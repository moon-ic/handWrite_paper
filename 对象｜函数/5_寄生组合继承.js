function Parent(name) {
    this.name = name;
}
Parent.prototype.say = function () {
    console.log(this.name + "say");
};
Parent.prototype.play = function () {
    console.log(this.name + "play");
};

function Child(name, parent) {
    Parent.call(this, parent); //绑定父类构造函数
    this.name = name;
}

Child.prototype = Object.create(Parent.prototype);
// 隔离父类原型
// Child.prototype指向了一个新对象，这个新对象的constructor默认指向Parent，所以需要手动将其改回指向Child。

Child.prototype.say = function () {
    console.log(this.name + "says：");
};

Child.prototype.constructor = Child;
