import React from 'react';

const taskDescription = 'Отфильтруйте анаграммы';
const taskLink = 'https://learn.javascript.ru/task/filter-anagrams';

function solution() {
    function aclean(arr) {
        const map = new Map();
        arr.forEach((item) => {
            map.set(item.toUpperCase().split('').sort().join(''), item);
        });

        return Array.from(map.values());
    }


    let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

    console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
}

export default function FilterAnagrams() {
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
