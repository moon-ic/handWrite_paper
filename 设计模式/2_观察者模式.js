class Subject {
    constructor(name) {
        this.state = "happy";
        this.observers = [];
    }

    // 收集观察者
    attach(o) {
        this.observers.push(o);
    }

    // 更新被观察者状态
    setState(state) {
        this.state = state;
        this.observers.forEach((o) => o.update(this));
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }
    update(student) {
        console.log("当前" + this.name + "被通知了", "当前学生的状态是" + student.state);
    }
}

let student = new Subject("学生");
let parent = new Observer("父母");
let teacher = new Observer("老师");

// 被观察者存储观察者的前提，需要先接纳观察者
student.attach(parent);
student.attach(teacher);
student.setState("被欺负了");
