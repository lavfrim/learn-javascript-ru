import React, { useState } from 'react';
import './App.css';

import ArrayMethods from './array-methods';

const subjectName = 'Subjects';



function App() {
const [subject, setSubject] = useState((<h2 class="head-text">{'Choose subject'}</h2>));

  const allSubjects = {
    "arrey-methods": <ArrayMethods />,
    "example": <div>{'example'}</div>,
  };
  
  const subjectsDescription = [];
  for (let sub in allSubjects) {
    subjectsDescription.push(sub);
  }

  function handleClick(clickEvent) {
    const subject = clickEvent.target.innerText;
    if (allSubjects[subject]) {
      setSubject(allSubjects[subject]);
    }
  }

  return (
    <div className="app-box">
      <nav className="menu-box center">
        <h2 className="head-text">{subjectName}</h2>
        <div className="list">
          {subjectsDescription.map((sub, index) => {
            return (
              <button
                className="button text"
                key={`${index}-${sub}`}
                onClick={handleClick}
              >
                {sub}
              </button>
            )
          })}
        </div>
      </nav>
      <main className="main-box center">
        {subject}
      </main>
    </div>
  );
}

export default App;
