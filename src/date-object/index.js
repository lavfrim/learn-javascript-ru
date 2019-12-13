import React, { useState } from 'react';

import NewDate from './tasks/new-date';
import GetWeekDay from './tasks/get-week-day';
import GetDateAgo from './tasks/get-date-ago';
import GetSecondToday from './tasks/get-seconds-today';


const partName = 'Date object';

const allTasks = {
    "new-date": <NewDate />,
    "get-week-day": <GetWeekDay />,
    "get-date-ago": <GetDateAgo />,
    "get-seconds-today": <GetSecondToday />,
};

const tasksShortDescription = [];
for (let taskShortName in allTasks) {
    tasksShortDescription.push(taskShortName);
}

export default function DateObject() {
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