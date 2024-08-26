console.log(new Date);

class Person {
    name;

    constructor(name) {
      this.name = name;
    }

    introduceSelf() {
      console.log(`Hi! I'm ${this.name}`);
    }
  }

class Student extends Person {
    #year;

    constructor(name, year) {
      super(name);
      this.#year = year;
    }

    introduceSelf() {
      console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
    }

    canStudyArchery() {
      return this.#year > 1;
    }
  }

let aluno = new Student('gustavo', 2);
console.log(aluno.canStudyArchery());
aluno.#year = 1; //no node vai dar erro, no navegador vai aceitar
