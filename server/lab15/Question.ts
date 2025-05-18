export class Question {
  constructor(public qid: number, public answer: string) {}

  checkAnswer(givenAnswer: string): boolean {
    return this.answer === givenAnswer;
  }
}
