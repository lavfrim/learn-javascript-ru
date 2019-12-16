import React, { useState } from 'react';

import PropertyAfterDelete from './tasks/property-after-delete';
import SearchAlgorithn from './tasks/search-algorithm';
import HamsterProto from './tasks/hamster-proto';
import ChangingPrototype from './tasks/changing-prototype';
import NewObjectSameConstructor from './tasks/new-object-same-constructor';
import DeferToPrototype from './tasks/defer-to-prototype';
import DeferToPrototypeExtended from './tasks/defer-to-prototype-extended';
import DictionaryTostring from './tasks/dictionary-tostring';


const partName = 'advanced-functions';

const allTasks = {
    "property-after-delete": <PropertyAfterDelete />,
    "search-algorithm": <SearchAlgorithn />,
    "hamster-proto": <HamsterProto />,
    "changing-prototype": <ChangingPrototype />,
    "new-object-same-constructor": <NewObjectSameConstructor />,
    "defer-to-prototype": <DeferToPrototype />,
    "defer-to-prototype-extended": <DeferToPrototypeExtended />,
    "dictionary-tostring": <DictionaryTostring />
};

const tasksShortDescription = [];
for (let taskShortName in allTasks) {
    tasksShortDescription.push(taskShortName);
}

export default function Prototype() {
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