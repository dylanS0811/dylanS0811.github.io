// src/lab06/Lab06App.jsx
import React, { useEffect } from 'react';

export default function Lab06App() {
  useEffect(() => {
    import('./question1.js');
    import('./question2.js');
    import('./question3.js');
  }, []);

  return (
    <div>
      <h1>Lab 6 - Constructor Function</h1>
      <h2>Open Console to See Outputs</h2>
    </div>
  );
}
