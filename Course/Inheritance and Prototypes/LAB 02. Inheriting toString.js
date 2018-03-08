function PersonAndStudent() {

    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            let baseStr = super.toString().slice(0, -1);
            return baseStr + `, subject: ${this.subject})`
        }
    }


    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            let baseStr = super.toString().slice(0, -1);
            return baseStr + `, course: ${this.course})`
        }
    }

    return {Person, Teacher, Student};
}


let obj = PersonAndStudent();

let Person = obj.Person;
let Teacher = obj.Teacher;
let Student = obj.Student;

let p = new Person('gosho', 'gosho@mail.bg');
let t = new Teacher('pesho', 'nsa@xbas.com', 'javascript');
let s = new Student('ivan', 'ivan@sgv.com', 'java');

console.log(p.toString());
console.log(t + "");
console.log(s.toString());


module.exports = Person;