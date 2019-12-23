import React, { useState } from 'react';
import './App.css';

import Playground from './playground';
import ArrayMethods from './array-methods';
import String from './string';
import MapSet from './map-set';
import ObjectSubject from './object';
import DateObject from './date-object';
import AdvancedFunctions from './advanced-functions';
import Prototype from './prototype';
import Promise from './promise';

const subjectName = 'Subjects';


function App() {
const [subject, setSubject] = useState((<h2 className="head-text">{'Choose subject'}</h2>));

  const allSubjects = {
    "playground": <Playground />,
    "arrey-methods": <ArrayMethods />,
    "map-set": <MapSet />,
    "object": <ObjectSubject />,
    "date-object": <DateObject />,
    "string": <String />,
    "advanced-functions": <AdvancedFunctions />,
    "prototype": <Prototype />,
    "promise": <Promise />,
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
