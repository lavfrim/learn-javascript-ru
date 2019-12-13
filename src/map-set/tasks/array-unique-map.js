import React from 'react';

const taskDescription = 'Фильтрация уникальных элементов массива';
const taskLink = 'https://learn.javascript.ru/task/array-unique-map';

function solution() {
    function unique(arr) {
        return Array.from(new Set(arr));
    }
    
    let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];
    
    console.log( unique(values) ); // Hare, Krishna, :-O
}

export default function ArrayUniqueMap() {
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
