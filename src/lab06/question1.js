// A template object for student
let studentTemplate = {
  firstName: '',
  lastName: '',
  grades: [],

  // Add a new grade to the grades array
  inputNewGrade: function (newGrade) {
    this.grades.push(newGrade);
  },

  // Compute the average of all grades
  computeAverageGrade: function () {
    if (this.grades.length === 0) return 0;
    let sum = this.grades.reduce((a, b) => a + b, 0);
    return sum / this.grades.length;
  }
};

// Create student objects using Object.create
let student1 = Object.create(studentTemplate);
student1.firstName = 'Dylan';
student1.lastName = 'Song';
student1.inputNewGrade(80);
student1.inputNewGrade(90);

let student2 = Object.create(studentTemplate);
student2.firstName = 'Eli';
student2.lastName = 'Smith';
student2.inputNewGrade(70);
student2.inputNewGrade(75);

// Store them in an array
let students = [student1, student2];

// Compute average grade of all students
let total = students.reduce((sum, s) => sum + s.computeAverageGrade(), 0);
let overallAverage = total / students.length;

console.log("All students' average grade:", overallAverage);
