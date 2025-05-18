import { Question } from './Question';
import { Student } from './Student';

export class Quiz {
  private questionsMap: Map<number, string>;
  private students: Student[];

  constructor(questions: Question[], students: Student[]) {
    this.questionsMap = new Map();
    questions.forEach((q) => this.questionsMap.set(q.qid, q.answer));
    this.students = students;
  }

  scoreStudentBySid(sid: number): number {
    const student = this.students.find((s) => s.studentId === sid);
    if (!student) return 0;

    let score = 0;
    for (const answer of student.answers) {
      const correctAnswer = this.questionsMap.get(answer.qid);
      if (correctAnswer && correctAnswer === answer.answer) {
        score++;
      }
    }

    return score;
  }

  getAverageScore(): number {
    const total = this.students.reduce((sum, s) => sum + this.scoreStudentBySid(s.studentId), 0);
    return total / this.students.length;
  }
}
