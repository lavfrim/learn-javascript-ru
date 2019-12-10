import React from 'react';

const taskDescription = 'Отсортировать пользователей по возрасту';
const taskLink = 'https://learn.javascript.ru/task/sort-objects';

function solution() {
    function sortByAge(array) {
        array.sort((next, prev) => (next.age - prev.age));
    }

    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let arr = [ vasya, petya, masha ];

    sortByAge(arr);

    // теперь: [vasya, masha, petya]
    console.log(arr[0].name); // Вася
    console.log(arr[1].name); // Маша
    console.log(arr[2].name); // Петя
}

export default function SortObject() {
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
