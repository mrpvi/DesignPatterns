let sayHiMixin = {
    sayHi() { console.log(`Hello ${this.name}`) }
}

class User {
    name
}

Object.assign(User.prototype, sayHiMixin);

// ============
let user = new User();
user.name = "Ali";
user.sayHi(); // Hello Ali