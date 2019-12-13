import React, { useState } from 'react';

import SumSalaries from './tasks/sum-salaries';
import CountProperties from './tasks/count-properties';
import Multiplynumeric from './tasks/multiply-numeric';
import Destructuring from './tasks/destructuring';


const partName = 'Object';

const allTasks = {
    "sum-salaries": <SumSalaries />,
    "count-properties": <CountProperties />,
    "multiply-numeric": <Multiplynumeric />,
    "destructuring": <Destructuring />,
};

const tasksShortDescription = [];
for (let taskShortName in allTasks) {
    tasksShortDescription.push(taskShortName);
}

export default function ObjectSubject() {
    const [task, setTask] = useState((<h2 className="head-text">{'Choose task'}</h2>));

    function handleClick(clickEvent) {
        const task = clickEvent.target.innerText;
        if(allTasks[task]) {
            setTask(allTasks[task]);
        }
    }


    return (
        <>  
            <div className="list center">
                <h2 className="head-text">{partName}</h2>
                {tasksShortDescription.map((task, index) => {
                    return (
                        <button
                            className="button text"
                            key={`${index}-${task}`}
                            onClick={handleClick}
                        >
                            {task}
                        </button>
                    )
                })}
            </div>

            <article className="text margin">
                {task}
            </article>
        </>
    )
}