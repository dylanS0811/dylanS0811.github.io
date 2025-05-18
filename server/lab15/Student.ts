import { Question } from './Question';

export class Student {
  studentId: number;
  answers: Question[] = [];

  constructor(studentId: number) {
    this.studentId = studentId;
  }

  addAnswer(question: Question): void {
    this.answers.push(question);
  }
}
