class Person {
    constructor(firtName,lastName,age,gender,interests){
        this.firtName = firtName
        this.lastName = lastName
        this.age = age
        this.gender = gender
        this.interests = interests
        this.fullName = `${this.firtName} ${this.lastName}`
    }
    bio() {
        return `${this.fullName} is ${this.age} years old. They like ${this.interests}`
    }
    greeting() {return `Hello, my name is ${this.fullName} `} 
}

class Teacher extends Person {
    constructor(firtName,lastName,age,gender,interests,subject){
        super(firtName,lastName,age,gender,interests)
        this.subject = subject
        this.prefix = this.gender === 'male'? 'Sr.':'Mrs.'
    }
    greeting(){return `Hello, my name is ${this.prefix} ${this.lastName}, and i teach ${this.subject}`}
}

class Student extends Person {
    constructor(firtName,lastName,age,gender,interests){
        super(firtName,lastName,age,gender,interests)
    }
    greeting(){return `Yo! I'm ${this.firtName}`}
}