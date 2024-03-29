import React from 'react';

const taskDescription = 'Трансформировать в объекты';
const taskLink = 'https://learn.javascript.ru/task/map-objects';

function solution() {
    let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
    let petya = { name: "Петя", surname: "Иванов", id: 2 };
    let masha = { name: "Маша", surname: "Петрова", id: 3 };

    let users = [ vasya, petya, masha ];

    let usersMapped = users.map((user) => ({
        fullName: `${user.name} ${user.surname}`,
        id: user.id,
    }))

    /*
    usersMapped = [
    { fullName: "Вася Пупкин", id: 1 },
    { fullName: "Петя Иванов", id: 2 },
    { fullName: "Маша Петрова", id: 3 }
    ]
    */

    console.log( usersMapped[0].id ) // 1
    console.log( usersMapped[0].fullName ) // Вася Пупкин
}

export default function MapObjects() {
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
