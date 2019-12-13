import React from 'react';

const taskDescription = 'Сколько сегодня прошло секунд?';
const taskLink = 'https://learn.javascript.ru/task/get-seconds-today';

function solution() {
    function getSecondsToday() {
        const now = new Date();
        const hours = now.getHours()
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        return (hours * 60 + minutes) * 60 + seconds;
    }

    console.log(getSecondsToday());
}

export default function GetSecondToday() {
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
