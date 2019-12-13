import React from 'react';

const taskDescription = 'Какой день месяца был много дней назад?';
const taskLink = 'https://learn.javascript.ru/task/get-date-ago';

function solution() {
    function getDateAgo(date, dayAgo) {
        const newDate = new Date(date);
        newDate.setDate(date.getDate() - dayAgo)
        return newDate.getDate();
    }

    let date = new Date(2015, 0, 2);

    console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
    console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
    console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
    console.log('-----------------------------------------')

    function getLastDayOfMonth(year, month) {
        const date = new Date(year, month + 1, 0)
        return date.getDate();
    }

    console.log(getLastDayOfMonth(2012, 1)) // = 29 (високосный год, февраль).
}

export default function GetDateAgo() {
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
