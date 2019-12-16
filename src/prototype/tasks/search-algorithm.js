import React from 'react';

const taskDescription = 'Алгоритм поиска';
const taskLink = 'https://learn.javascript.ru/task/search-algorithm';

function solution() {
    let head = {
        glasses: 1
    };

    let table = {
        pen: 3,
        __proto__: head,
    };

    let bed = {
        sheet: 1,
        pillow: 2,
        __proto__: table,
    };

    let pockets = {
        money: 2000,
        __proto__: bed,
    };

    console.log(pockets.pen); // 3
    console.log(bed.glasses); // 1
}

export default function SearchAlgorithn() {
    solution();
    return (
        <a
            className="text"
            target="_blank"
            rel="noopener noreferrer"
            href={taskLink}
        >
            {taskDescription}
        </a>
    )
}
