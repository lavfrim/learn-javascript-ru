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

export default function ArrayMethods() {
    const [task, setTask] = useState((<h2 className="head-text">{'Choose task'}</h2>));

    function handleClick(clickEvent) {
        const task = clickEvent.target.innerText;
        if(allTasks[task]) {
            setTask(allTasks[task]);
        }
    }

    // window.console.log(`
    // Шпаргалка по методам массива:

    // Для добавления/удаления элементов:
    
    // push (...items) – добавляет элементы в конец,
    // pop() – извлекает элемент с конца,
    // shift() – извлекает элемент с начала,
    // unshift(...items) – добавляет элементы в начало.
    // splice(pos, deleteCount, ...items) – начиная с индекса pos, удаляет deleteCount элементов и вставляет items.
    // slice(start, end) – создаёт новый массив, копируя в него элементы с позиции start до end (не включая end).
    // concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items. Если какой-то из items является массивом, тогда берутся его элементы.
    // Для поиска среди элементов:
    
    // indexOf/lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
    // includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false.
    // find/filter(func) – фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается true.
    // findIndex похож на find, но возвращает индекс вместо значения.
    // Для перебора элементов:
    
    // forEach(func) – вызывает func для каждого элемента. Ничего не возвращает.
    // Для преобразования массива:
    
    // map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
    // sort(func) – сортирует массив «на месте», а потом возвращает его.
    // reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
    // split/join – преобразует строку в массив и обратно.
    // reduce(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.
    // Дополнительно:
    
    // Array.isArray(arr) проверяет, является ли arr массивом.
    // Обратите внимание, что методы sort, reverse и splice изменяют исходный массив.
    // `);

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