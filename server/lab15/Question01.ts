function describePerson(person: { name: string; age: number; isStudent: boolean }): string {
  const status = person.isStudent ? 'a student' : 'not a student';
  return `${person.name} is ${person.age} years old and is ${status}.`;
}

// Example:
console.log(describePerson({ name: 'Alice', age: 25, isStudent: true }));
// Output: Alice is 25 years old and is a student.
