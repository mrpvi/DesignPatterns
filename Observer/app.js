function Subject() {
    this.observers = [];
}

Subject.prototype = {
    subscriber: function(fn) {
        this.observers.push(fn);
    },
    unsubscribe: function(fnToRemove) {
        this.observers = this.observers.filter(fnItem => fnItem !== fnToRemove);
    },
    fire: function() {
        this.observers.forEach(fn => fn.call());
    }
}

const subject = new Subject();
const observers1 = () => console.log('Observer 1 Firing!');
const observers2 = () => console.log('Observer 2 Firing!');
subject.subscriber(observers1);
subject.subscriber(observers2);

subject.fire(); // Observer 1 Firing! Observer 2 Firing!

console.log("====== Unsubscribe Observer 1 ======")

subject.unsubscribe(observers1);
subject.fire(); // Observer 2 Firing!