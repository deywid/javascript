class Person {
  #name
  #birthYear
  #age
  #interests

  constructor(name, birthYear, interests) {
    this.#name = name;
    this.#birthYear = birthYear;
    this.#age = new Date().getFullYear() - birthYear;
    this.#interests = interests;
  }

  get name() {
    return this.#name
  }

  get birthYear() {
    return this.#birthYear
  }

  get age() {
    return this.#age
  }

  get interests() {
    return this.#interests
  }

  set interests(newInterest) {
    this.#interests = newInterest
  }

  sayHello() {
    return `Hello! My name is ${this.name} and I am interested in ${this.interests.join(', ')}.`
  }

  sayGoodbye() {
    return `Goodbye!`;
  }

  toJSON() {
    return { // call to getters and setters
      name: this.name,
      birthYear: this.birthYear,
      age: this.age,
      interests: this.interests
    }
  }
}

class Teacher extends Person {
  #subject
  constructor(name, birthYear, interests, subject) {
    super(name, birthYear, interests);
    this.#subject = subject;
  }

  sayHello() {
    return `Hello! My name is ${this.name} and I teach ${this.subject}`;
  }

  get subject(){
    return this.#subject
  }

  toJSON() {
    return { // call to getters and setters
      name: this.name,
      birthYear: this.birthYear,
      age: this.age,
      interests: this.interests,
      subject: this.subject
    }
  }
}

class Student extends Person {
  #grades
  constructor(name, birthYear, interests, grades) {
    super(name, birthYear, interests);
    this.#grades = grades;
  }

  calculateAverageGrade() {
    return Math.fround((this.grades.reduce((sum, curGrade) => sum + curGrade)) / this.grades.length).toFixed(2);
  }

  sayHello() {
    return `Hello! My name is ${this.name} and I expect you to not be worried about my grades: ${this.grades}`;
  }

  get grades(){
    return this.#grades
  }

  set grades(newGrade) {
    this.#grades = newGrade
  }

  toJSON() {
    return { // call to getters and setters
      name: this.name,
      birthYear: this.birthYear,
      age: this.age,
      interests: this.interests,
      grade: this.grades
    }
  }
}

const person = new Person("Deywid", 1991, ['programming', 'playing drums']);
console.log(person.sayHello());
person.interests.push('football')
console.log(person.toJSON());
console.log(person.sayGoodbye());

const student = new Student("Joana", 1985, ['reading', 'watching movies'], [9, 3, 10]);
console.log(student.sayHello());
console.log(student.calculateAverageGrade());
student.grades.push(8);
console.log(student.calculateAverageGrade());
console.log(student.toJSON());
console.log(student.sayGoodbye());

const teacher = new Teacher("Marcus", 1972, ['yoga', 'cooking'], 'math');
console.log(teacher.sayHello());
console.log(teacher.toJSON());
console.log(teacher.sayGoodbye());