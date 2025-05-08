// src/lab03/Lab03App.jsx
import React, { useEffect } from 'react';

export default function Lab03App() {
  useEffect(() => {
    import('./question-01/question1.js');
    import('./question-02/question2.js');
    import('./question-03/question3.js');
    import('./question-04/script.js');
  }, []);

  return (
    <div className="container">
      <h1>Open Console to See Outputs</h1>
      <p>
        The JavaScript functions will run when this page loads. Please open your browser console
        (F12 or right-click → Inspect → Console tab) to view the output.
      </p>
    </div>
  );
}
