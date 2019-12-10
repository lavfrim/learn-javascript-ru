import React from 'react';

const taskDescription = 'Скопировать и отсортировать массив';
const taskLink = 'https://learn.javascript.ru/task/copy-sort-array';

function solution() {
    function copySorted(array) {
        return array.slice().sort((next, prev) => (next >= prev ? 1 : -1));
    }

    let arr = ["CSS", "HTML", "JavaScript", "CSS"];

    let sorted = copySorted(arr);
    
    console.log( sorted ); // CSS, CSS, HTML, JavaScript
    console.log( arr ); // CSS, HTML, JavaScript, CSS (без изменений)
}

export default function CopySortArray() {
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
