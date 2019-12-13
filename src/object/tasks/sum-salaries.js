import React from 'react';

const taskDescription = 'Сумма свойств объекта';
const taskLink = 'https://learn.javascript.ru/task/sum-salaries';

function solution() {
    function sumSalaries(obj) {
        return Object.values(obj).reduce((acc, sol) => (acc + sol), 0);
    }

    let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
    };
    
    console.log( sumSalaries(salaries) ); // 650
}

export default function SumSalaries() {
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
