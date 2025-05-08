// ES6 Class version
class ClassQuestion {
  constructor(qid, answer) {
    this.qid = qid;
    this.answer = answer;
  }
  checkAnswer(ans) {
    return this.answer === ans;
  }
}

class ClassStudent {
  constructor(id) {
    this.studentId = id;
    this.answers = [];
  }
  addAnswer(question) {
    this.answers.push(question);
  }
}

class ClassQuiz {
  constructor(questionsArray, studentsArray) {
    this.questions = new Map();
    this.students = studentsArray;
    for (let q of questionsArray) {
      this.questions.set(q.qid, q.answer);
    }
  }

  scoreStudentBySid(sid) {
    const student = this.students.find((s) => s.studentId === sid);
    if (!student) return 0;
    return student.answers.reduce((score, ans) => {
      const correct = this.questions.get(ans.qid);
      return score + (correct === ans.answer ? 1 : 0);
    }, 0);
  }

  getAverageScore() {
    let total = 0;
    for (let s of this.students) {
      total += this.scoreStudentBySid(s.studentId);
    }
    return total / this.students.length;
  }
}

window.runQ2 = function () {
  const student1 = new ClassStudent(10);
  student1.addAnswer(new ClassQuestion(2, 'a'));
  student1.addAnswer(new ClassQuestion(3, 'b'));
  student1.addAnswer(new ClassQuestion(1, 'b'));

  const student2 = new ClassStudent(11);
  student2.addAnswer(new ClassQuestion(3, 'b'));
  student2.addAnswer(new ClassQuestion(2, 'a'));
  student2.addAnswer(new ClassQuestion(1, 'd'));

  const students = [student1, student2];
  const questions = [
    new ClassQuestion(1, 'b'),
    new ClassQuestion(2, 'a'),
    new ClassQuestion(3, 'b')
  ];

  const quiz = new ClassQuiz(questions, students);
  const outputText = [
    'Q2: Class Syntax Version',
    'Student 10 Score: ' + quiz.scoreStudentBySid(10),
    'Student 11 Score: ' + quiz.scoreStudentBySid(11),
    'Average Score: ' + quiz.getAverageScore()
  ].join('\n');

  const outputElem = document.getElementById('output');
  outputElem.innerText = outputText;

  const existingImg = document.getElementById('q2-image');
  if (existingImg) existingImg.remove();

  const img = document.createElement('img');
  img.src = '/images/lab07-q2-diagram.png';
  img.alt = 'Prototype Chain Diagram';
  img.id = 'q2-image';

  // ✅ 样式设置（强烈建议这样写）
  img.style.width = '700px'; // 设置宽度
  img.style.height = 'auto'; // 高度自动等比缩放
  img.style.display = 'block';
  img.style.margin = '20px auto';
  img.style.border = '1px solid #ccc';
  img.style.borderRadius = '10px';
  img.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';

  outputElem.insertAdjacentElement('afterend', img);
};
