const cacheName = "news@v2";

const staticAssets = [
  "./",
  "./index.html",
  "./index.js",
  "./sw.js"
]

self.addEventListener("install", async () => {
  // SW环境下用来存储的东西
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  // 手动触发sw的activate
  return self.skipWaiting();
})

self.addEventListener("activate", async () => {
  // 更新客户端上的sw相关文件
  self.clients.claim();
})

self.addEventListener("fetch", async (e) => {
  console.log("sw 开始缓存fetch")
  const req = e.request;
  const url = new URL(req.url);

  if (url.origin === location.origin) {
    e.respondWith(cacheFirst(req));
  } else {
    e.respondWith(newtworkAndCache(req));

  }
})

async function cacheFirst(req) {
  const cache = await caches.open(cacheName);

  const cached = await cache.match(req);
  return cached || fetch(req);
}

async function newtworkAndCache(req) {
  const cache = await caches.open(cacheName);
  try {
    const fresh = await fetch(req);
    await cache.put(req, fresh.clone())
  } catch (e) {
    const cached = await cache.match(req);
    return cached;
  }
}