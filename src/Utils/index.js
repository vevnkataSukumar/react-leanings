const getDetails = {
    details() {
        console.log('Details', this.name);
        
    }
}

const getAge = {
    age() {
        console.log('Age', this.age);
    }
}

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

Object.assign(User.prototype, getDetails,getAge);

const user = new User('John', 30);

user.age();
user.details();