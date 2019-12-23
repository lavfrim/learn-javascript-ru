import React, { useState } from 'react';

import DelayPromise from './tasks/delay-promise';
import AsyncAwait from './tasks/async-await';


const partName = 'Promise';

const allTasks = {
    "delay-promise": <DelayPromise />,
    "async-await": <AsyncAwait />,
};

const tasksShortDescription = [];
for (let taskShortName in allTasks) {
    tasksShortDescription.push(taskShortName);
}

export default function Promise() {
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