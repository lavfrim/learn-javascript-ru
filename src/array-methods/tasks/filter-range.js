import React from 'react';

const taskDescription = 'Фильтрация по диапазону';
const taskLink = 'https://learn.javascript.ru/task/filter-range';

function solution() {
    function filterRange(array, start, end) {
        return array.filter((item) => (item >= start && item <= end))
    }

    let arr = [5, 3, 8, 1];
    let filtered = filterRange(arr, 1, 4);

    console.log( filtered ); // 3,1 (совпадающие значения)
    console.log( arr ); // 5,3,8,1 (без изменений)
    }

export default function FilterRange() {
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
