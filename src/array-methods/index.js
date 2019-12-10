import React, { useState } from 'react';

import Camelcase from './tasks/camelcase';
import FilterRange from './tasks/filter-range';
import FilterRangeInPlace from './tasks/filter-range-in-place';
import SortBack from './tasks/sort-back';
import CopySortArray from './tasks/copy-sort-array';
import CalculatorExtendable from './tasks/calculator-extendable';
import ArrayGetNames from './tasks/array-get-names';
import MapObjects from './tasks/map-objects';
import SortObject from './tasks/sort-objects';
import Shuffle from './tasks/shuffle';
import AverageAge from './tasks/average-age';
import Arrayunique from './tasks/array-unique';

const partName = 'Array methods';

export default function ArrayMethods() {
const [task, setTask] = useState((<p className="App-link">{'Choose task'}</p>));

    const allTasks = {
        "camelcase": <Camelcase />,
        "filter-range": <FilterRange />,
        "filter-range-in-place": <FilterRangeInPlace />,
        "sort-back": <SortBack />,
        "copy-sort-array": <CopySortArray />,
        "calculator-extendable": <CalculatorExtendable />,
        "array-get-names": <ArrayGetNames />,
        "map-objects": <MapObjects />,
        "sort-objects": <SortObject />,
        "shuffle": <Shuffle />,
        "average-age": <AverageAge />,
        "array-unique": <Arrayunique />,
    };

    const tasksShortDescription = [];
    for (let taskShortName in allTasks) {
        tasksShortDescription.push(taskShortName);
    }

    
    function handleClick(clickEvent) {
        const task = clickEvent.target.innerText;
        if(allTasks[task]) {
            setTask(allTasks[task]);
        }
    }

    return (
        <>  
            <h2 className="App-link">{partName}</h2>
            {tasksShortDescription.map((task, index) => {
                return (
                    <button
                        className="App-button"
                        key={`${index}-${task}`}
                        onClick={handleClick}
                    >
                        {task}
                    </button>
                )
            })}

            {task}
        </>
    )
}