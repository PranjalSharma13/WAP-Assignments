function Student(firstName, lastName) {
  
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];
}

Student.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName;
}


Student.getStudentFullName = function (student) {
    return `${student.firstName} ${student.lastName}`;
};


Student.prototype.inputNewGrade = function (newGrade) {
    this.grades.push(newGrade);
}


Student.prototype.computeAverage = function () {
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    const avg = sum / this.grades.length;
    return avg;
}


const std1 = new Student("Pranjal", "Sharma");
std1.inputNewGrade(100);
std1.inputNewGrade(90);
std1.inputNewGrade(85);
std1.inputNewGrade(95);
std1.inputNewGrade(99);
std1.inputNewGrade(80);


console.log(`Average Grade of ${Student.getStudentFullName(std1)}: `, std1.computeAverage());


const std2 = new Student("Rosa", "Diaz");
std2.inputNewGrade(10);
std2.inputNewGrade(70);
std2.inputNewGrade(59);
std2.inputNewGrade(99);

console.log(`Average Grade of ${std2.getFullName()}: ${std2.computeAverage()}`);


const std3 = new Student("Ming", "Smith");
std3.inputNewGrade(2);
std3.inputNewGrade(8);
std3.inputNewGrade(9);
std3.inputNewGrade(3);


console.log(`Average Grade of ${std3.getFullName()}: ${std3.computeAverage()}`);
