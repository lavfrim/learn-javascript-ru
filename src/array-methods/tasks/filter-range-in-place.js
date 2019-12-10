import React from 'react';

const taskDescription = 'Фильтрация по диапазону "на месте"';
const taskLink = 'https://learn.javascript.ru/task/filter-range-in-place';

function solution() {
    function filterRangeInPlace(array, start, end) {
        array.forEach((item, index) => {
            if (item < start || item > end) {
                array.splice(index, 1);
            }
        });
    }

    let arr = [5, 3, 8, 1];

    filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

    console.log( arr ); // [3, 1]
}

export default function FilterRangeInPlace() {
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
