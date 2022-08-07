class Person {
  constructor(
    public firstName: string,
    public lastName: string,
  ) {}

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  walk() {
    console.log('walking')
  }

  talk() {
    console.log('talking')
  }
}

class Student extends Person {
  constructor(
    public studentId: number,
    firstName: string,
    lastName: string,
  ) {
    super(firstName, lastName)
  }

  takeTest() {
    console.log('Taking a test')
  }
}

const student = new Student(1, 'Dylan', 'Zhang')
student.walk()
