/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
function LinkNode(key, value) {
  this.key = key;
  this.value = value;
  this.next = null;
  this.prev = null;
}
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.hashMap = new Map();
  this.capacity = capacity;
  this.fakeHead = new LinkNode(null, null);
  this.fakeTail = new LinkNode(null, null);
  this.fakeHead.next = this.fakeTail;
  this.fakeTail.prev = this.fakeHead;
};

LRUCache.prototype.removeNode = function (node) {
  let prev = node.prev, next = node.next;
  const key = node.key;
  prev.next = next;
  next.prev = prev;
  node.prev = null;
  node.next = null;
  this.hashMap.delete(key);
  return node;
}

LRUCache.prototype.addNodeAtHead = function (node) {
  let head = this.fakeHead;
  node.next = head.next;
  node.prev = head;
  head.next.prev = node;
  head.next = node;
  this.hashMap.set(node.key, node);
}

LRUCache.prototype.isHashMapFull = function () {
  return this.hashMap.size === this.capacity;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.hashMap.has(key)) {
    const node = this.hashMap.get(key);
    this.addNodeAtHead(this.removeNode(node));
    return node.value;
  }
  return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const newNode = new LinkNode(key, value);
  if (this.hashMap.has(key)) {
    const oldNode = this.hashMap.get(key);
    this.removeNode(oldNode);
    this.addNodeAtHead(newNode);
  } else {
    if (this.isHashMapFull()) {
      const tail = this.fakeTail;
      const lastNode = tail.prev;
      this.removeNode(lastNode);
      this.addNodeAtHead(newNode)
    } else {
      this.addNodeAtHead(newNode)
    }

  }
};
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

