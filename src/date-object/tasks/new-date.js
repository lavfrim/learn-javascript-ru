import React from 'react';

const taskDescription = 'Создайте дату';
const taskLink = 'https://learn.javascript.ru/task/new-date';

function solution() {
    // Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
   console.log(new Date(2012, 1, 20, 3, 12));
}

export default function NewDate() {
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
