import React, { useState } from 'react';

import ArrayUniqueMap from './tasks/array-unique-map';
import FilterAnagrams from './tasks/filter-anagrams';
import IterableKey from './tasks/iterable-keys';


const partName = 'Map Set';

const allTasks = {
    "array-unique-map": <ArrayUniqueMap />,
    "filter-anagrams": <FilterAnagrams />,
    "iterable-keys": <IterableKey />,
};

const tasksShortDescription = [];
for (let taskShortName in allTasks) {
    tasksShortDescription.push(taskShortName);
}

export default function MapSet() {
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