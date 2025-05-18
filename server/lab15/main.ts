import { Question } from './Question';
import { Student } from './Student';
import { Quiz } from './Quiz';

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

console.log('Score of student 10:', quiz.scoreStudentBySid(10));
console.log('Score of student 11:', quiz.scoreStudentBySid(11));
console.log('Average score:', quiz.getAverageScore());
