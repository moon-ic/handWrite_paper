var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.size = 0;

    //虚拟头尾
    this.head = new Node();
    this.tail = new Node();

    // 组装起来
    this.head.next = this.tail;
    this.tail.pre = this.head;

    this.map = new Map();
};
var Node = function (key = 0, val = 0) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.pre = null;
};

// 插入到头
LRUCache.prototype._insert = function (node = null) {
    if (node) {
        node.next = this.head.next;
        node.pre = this.head;

        if (this.head.next) this.head.next.pre = node;
        this.head.next = node;
    }
};
// 移除链表
LRUCache.prototype._remove = function (node = null) {
    if (node && node.pre && node.next) {
        node.pre.next = node.next;
        node.next.pre = node.pre;
    }
};

LRUCache.prototype.get = function (key) {
    const node = this.map.get(key);
    if (!node) return -1;

    this._remove(node);
    this._insert(node);
    return node.val;
};

LRUCache.prototype.set = function (key, value) {
    let node = this.map.get(key);

    if (!node) {
        node = new Node(key, value);
        this.map.set(key, node);
        this._insert(node);
        this.size++;
    } else {
        this._remove(node);
        node.val = value;
        this._insert(node);
    }

    // 超出后移除尾部
    if (this.size > this.capacity) {
        const lru = this.tail.pre;
        if (lru && lru !== this.head) {
            this._remove(lru);
            this.map.delete(lru.key);
            this.size--;
        }
    }
};
