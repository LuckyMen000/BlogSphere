class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }

    update(data) {
        console.log(`${this.name} received notification: New article posted - ${data.title}`);
    }
}

const blogObservable = new Observable();
const observer1 = new Observer("Subscriber 1");
const observer2 = new Observer("Subscriber 2");

blogObservable.subscribe(observer1);
blogObservable.subscribe(observer2);

blogObservable.notify({ title: "Observer Pattern in JavaScript" });
