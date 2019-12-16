import React, { useState } from 'react';

import RecursionFactorial from './tasks/recursion-factorial';
import Closure from './tasks/closure';
import SumManyBrackets from './tasks/sum-many-brackets';
import NewFunction from './tasks/new-Function';
import SpyDecorator from './tasks/spy-decorator';
import DebounceDecorator from './tasks/debounce-decorator';
import ThrottleDecorator from './tasks/throttling-decorator';
import ThisContextFunction from './tasks/this-context-function';


const partName = 'advanced-functions';

const allTasks = {
    "recursion-factorial": <RecursionFactorial />,
    "closure": <Closure />,
    "sum-many-brackets": <SumManyBrackets />,
    "new-Function": <NewFunction />,
    "spy-decorator": <SpyDecorator />,
    "debounce-decorator": <DebounceDecorator />,
    "throttle-decorator": <ThrottleDecorator />,
    "this": <ThisContextFunction />,
};

const tasksShortDescription = [];
for (let taskShortName in allTasks) {
    tasksShortDescription.push(taskShortName);
}

export default function AdvancedFunctions() {
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