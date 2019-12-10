import React from 'react';

const taskDescription = 'Получить средний возраст';
const taskLink = 'https://learn.javascript.ru/task/average-age';

function solution() {
    function getAverageAge(array) {
        const accumulatedAge = array.reduce((accumulater, user) => (accumulater + user.age), 0);
        return accumulatedAge / array.length;
    }

    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 29 };

    let arr = [ vasya, petya, masha ];

    console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
}

export default function AverageAge() {
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
