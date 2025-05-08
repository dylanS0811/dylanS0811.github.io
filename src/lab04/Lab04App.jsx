import React from 'react';
import styles from './lab04.module.css';

export default function Lab04App() {
  return (
    <div className={styles.page}>
      <h1 className={styles.heading1}>Lab 4 - Execution Context</h1>

      {/* Section 1 */}
      <div className={styles.section}>
        <h2 className={styles.heading2}>Code 1</h2>
        <div className={styles.codeBlock}>
          <pre>
            <code>{`let x;
var a = 5;
var b = 10;
var c = function (a, b, c) {
  document.write(x);      // prints undefined
  document.write(a);      // prints 8
  var f = function (a, b, c) {
    b = a;
    document.write(b);    // prints 8
    b = c;
    var x = 5;
  };
  f(a, b, c);
  document.write(b);      // prints 9
  var x = 10;
};
c(8, 9, 10);
document.write(b);        // prints 10
document.write(x);        // prints undefined`}</code>
          </pre>
        </div>

        <h3 className={styles.heading3}>1. What will be printed in strict mode:</h3>
        <div className={styles.outputBlock}>
          undefined
          <br />
          8<br />
          8<br />
          9<br />
          10
          <br />
          undefined
        </div>

        <h3 className={styles.heading3}>Lexical Environment:</h3>
        <div className={styles.envBlock}>
          <p>
            <strong>1. Global EC Creation:</strong>
            <br />
            Outer: null
            <br />
            LE: &#123;a: undefined, b: undefined, c: undefined&#125;
            <br />
            TDZ: &#123;x&#125;
          </p>
          <p>
            <strong>2. Global EC Execution:</strong>
            <br />
            LE: &#123;a: 5, b: 10, c: fn, x: undefined&#125;
            <br />
            Output: x: undefined, a: 8
          </p>
          <p>
            <strong>3. C FEC Creation:</strong>
            <br />
            LE: &#123;a: 8, b: 9, c: 10, f: undefined, x: undefined&#125;
          </p>
          <p>
            <strong>4. C FEC Execution:</strong>
            <br />
            Output: b: 8, b: 9
          </p>
          <p>
            <strong>5. F FEC Creation:</strong>
            <br />
            LE: &#123;a: 8, b: 9, c: 10, x: undefined&#125;
          </p>
          <p>
            <strong>6. F FEC Execution:</strong>
            <br />
            LE: &#123;b: 10, x: 5&#125;
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className={styles.section}>
        <h2 className={styles.heading2}>Code 2</h2>
        <div className={styles.codeBlock}>
          <pre>
            <code>{`var x = 9;
function myFunction() {
  return x * x;
}
document.write(myFunction());
x = 5;
document.write(myFunction());`}</code>
          </pre>
        </div>

        <h3 className={styles.heading3}>2. What will be printed in strict mode:</h3>
        <div className={styles.outputBlock}>
          81
          <br />
          25
        </div>

        <h3 className={styles.heading3}>Lexical Environment:</h3>
        <div className={styles.envBlock}>
          <p>
            <strong>1. Global EC creation:</strong>
            <br />
            LE: &#123;x: undefined, myFunction: fn&#125;
          </p>
          <p>
            <strong>2. Global EC execution:</strong>
            <br />x = 9 → myFunction() → 81 → x = 5 → myFunction() → 25
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className={styles.section}>
        <h2 className={styles.heading2}>Code 3</h2>
        <div className={styles.codeBlock}>
          <pre>
            <code>{`var foo = 1;
function bar() {
  if (!foo) {
    var foo = 10;
  }
  alert(foo);
}
bar();`}</code>
          </pre>
        </div>

        <h3 className={styles.heading3}>3. What will be printed in strict mode:</h3>
        <div className={styles.outputBlock}>10 (via alert)</div>

        <h3 className={styles.heading3}>Lexical Environment:</h3>
        <div className={styles.envBlock}>
          <p>
            <strong>Global EC:</strong>
            <br />
            foo: undefined, bar: fn
          </p>
          <p>
            <strong>bar Execution:</strong>
            <br />
            foo = 10 → alert(10)
          </p>
        </div>
      </div>
    </div>
  );
}
