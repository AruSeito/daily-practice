window.addEventListener("load", () => {
  getNews();
  registerSW();
})

async function getNews() {
  const res = await fetch("https://www.fastmock.site/mock/90081b6542ca917fc651013fe10b3815/api/getNews");
  const json = await res.json();

  const main = document.querySelector("#main");
  main.innerHTML = json.title;
}

async function registerSW() {
  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register("./sw.js")
    } catch (e) {
      console.log(e);
      console.error("SW failed");
    }
  }
}