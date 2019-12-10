import React from 'react';

const taskDescription = 'Трансформировать в массив имён';
const taskLink = 'https://learn.javascript.ru/task/array-get-names';

function solution() {
    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };
    
    let users = [ vasya, petya, masha ];
    
    let names = users.map((user) => (user.name));
    
    console.log( names ); // Вася, Петя, Маша
}

export default function ArrayGetNames() {
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
