import React from 'react';

const taskDescription = 'Сортировать в порядке по убыванию';
const taskLink = 'https://learn.javascript.ru/task/sort-back';

function solution() {
    let arr = [5, 2, 1, -10, 8];

    arr.sort((next, prev) => (prev - next));
    
    console.log( arr ); // 8, 5, 2, 1, -10
}

export default function SortBack() {
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
