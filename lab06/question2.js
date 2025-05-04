// Constructor function for Student
function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.grades = [];
}

// Add method to prototype: push grade
Student.prototype.inputNewGrade = function (grade) {
  this.grades.push(grade);
};

// Add method to prototype: compute average
Student.prototype.computeAverageGrade = function () {
  if (this.grades.length === 0) return 0;
  return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
};

// Create instances of students
let stu1 = new Student('Dylan', 'Song');
stu1.inputNewGrade(85);
stu1.inputNewGrade(95);

let stu2 = new Student('Eli', 'Smith');
stu2.inputNewGrade(70);
stu2.inputNewGrade(80);

let allStudents = [stu1, stu2];

// Calculate average for all students
let avg = allStudents.reduce((sum, s) => sum + s.computeAverageGrade(), 0) / allStudents.length;

console.log('Average grade of all:', avg);
