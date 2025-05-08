// Constructor Function implementation
function Question(qid, answer) {
  this.qid = qid;
  this.answer = answer;
}
Question.prototype.checkAnswer = function (ans) {
  return this.answer === ans;
};

function Student(id) {
  this.studentId = id;
  this.answers = [];
}
Student.prototype.addAnswer = function (question) {
  this.answers.push(question);
};

function Quiz(questionsArray, studentsArray) {
  this.questions = new Map();
  this.students = studentsArray;
  for (let q of questionsArray) {
    this.questions.set(q.qid, q.answer);
  }
}
Quiz.prototype.scoreStudentBySid = function (sid) {
  const student = this.students.find((s) => s.studentId === sid);
  if (!student) return 0;
  return student.answers.reduce((score, ans) => {
    const correct = this.questions.get(ans.qid);
    return score + (correct === ans.answer ? 1 : 0);
  }, 0);
};
Quiz.prototype.getAverageScore = function () {
  let total = 0;
  for (let s of this.students) {
    total += this.scoreStudentBySid(s.studentId);
  }
  return total / this.students.length;
};

window.runQ1 = function () {
  const existingImg = document.getElementById('q2-image');
  if (existingImg) existingImg.remove();

  const student1 = new Student(10);
  student1.addAnswer(new Question(2, 'a'));
  student1.addAnswer(new Question(3, 'b'));
  student1.addAnswer(new Question(1, 'b'));

  const student2 = new Student(11);
  student2.addAnswer(new Question(3, 'b'));
  student2.addAnswer(new Question(2, 'a'));
  student2.addAnswer(new Question(1, 'd'));

  const students = [student1, student2];
  const questions = [new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];
  const quiz = new Quiz(questions, students);

  const output = [
    'Q1: Constructor Function Version',
    'Student 10 Score: ' + quiz.scoreStudentBySid(10),
    'Student 11 Score: ' + quiz.scoreStudentBySid(11),
    'Average Score: ' + quiz.getAverageScore()
  ].join('\n');

  document.getElementById('output').innerText = output;
};
