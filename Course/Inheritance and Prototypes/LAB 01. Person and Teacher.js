function PersonT() {

    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    return { Person,  Teacher };
}


let obj = PersonT();
let Teacher = obj.Teacher;

let t = new Teacher('pesho', 'nsa@xbas.com', 'javascript');
console.log(t);