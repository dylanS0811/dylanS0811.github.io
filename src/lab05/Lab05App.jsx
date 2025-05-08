import React from 'react';
import styles from './lab05.module.css';

export default function Lab05App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lab 5 - Call Context</h1>

      {/* Question 1 */}
      <div className={styles.section}>
        <h2 className={styles.questionTitle}>Question 1</h2>
        <pre className={styles.code}>
          {`let str = "Greetings, ";
let user = {
  firstName: "John",
  lastname: "Smith",
  display: function () {
    console.log(str, this.firstName);
    show("hi");
  }
};
user.display();
function show(msg) {
  console.log(msg + " " + this.lastname);
}
show.call(user, "hello");`}
        </pre>

        <h3 className={styles.subtitle}>What will be printed in strict mode:</h3>
        <div className={styles.output}>
          Greetings, John
          <br />
          hi undefined
          <br />
          hello Smith
        </div>

        <h3 className={styles.subtitle}>Lexical Environment:</h3>
        <div className={styles.env}>
          <p>
            <strong>1. Global EC creation:</strong>
            <br />
            • Outer: null, this: Window
            <br />• LE: {'{ show: fn }'}
            <br />• TDZ: {'{ str, user }'}
          </p>

          <p>
            <strong>2. Global EC execution:</strong>
            <br />• LE: {'{ str: "Greetings, ", user: {...}, show: fn }'}
            <br />• TDZ: {'{}'}
          </p>

          <p>
            <strong>3. display FEC creation:</strong>
            <br />
            • this: user
            <br />• LE: {'{ arguments: {} }'}
          </p>

          <p>
            <strong>4. display FEC execution:</strong>
            <br />
            • this: user
            <br />• LE: {'{ arguments: {} }'}
          </p>

          <p>
            <strong>5. show FEC creation (inside display):</strong>
            <br />
            • this: Window
            <br />• LE: {'{ arguments: { msg: "hi" } }'}
          </p>

          <p>
            <strong>6. show.call(user, "hello") execution:</strong>
            <br />
            • this: user
            <br />• LE: {'{ arguments: { msg: "hello" } }'}
          </p>
        </div>
      </div>

      {/* Question 2 */}
      <div className={styles.section}>
        <h2 className={styles.questionTitle}>Question 2</h2>
        <pre className={styles.code}>
          {`askPassword(user.loginOk.bind(user), user.loginFail.bind(user));`}
        </pre>
        <h3 className={styles.subtitle}>Fix Explanation:</h3>
        <div className={styles.output}>
          Binding the methods ensures that <code>this</code> inside <code>loginOk</code> and{' '}
          <code>loginFail</code> always refers to the correct <code>user</code> object when passed
          as callbacks.
        </div>
      </div>

      {/* Question 3 */}
      <div className={styles.section}>
        <h2 className={styles.questionTitle}>Question 3</h2>
        <pre className={styles.code}>
          {`showList: function() {
  this.students.forEach((student) => {
    console.log(this.title + ": " + student);
  });
}`}
        </pre>
        <h3 className={styles.subtitle}>Fix Explanation:</h3>
        <div className={styles.output}>
          Arrow functions do not have their own <code>this</code> binding. Instead, they inherit it
          from the enclosing lexical scope. This ensures <code>this.title</code> correctly refers to
          the <code>group</code> object inside <code>showList()</code>.
        </div>
      </div>
    </div>
  );
}
