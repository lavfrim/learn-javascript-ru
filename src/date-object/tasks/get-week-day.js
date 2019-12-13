import React from 'react';

const taskDescription = 'Покажите день недели';
const taskLink = 'https://learn.javascript.ru/task/get-week-day';

function solution() {
    function getWeekDay(date) {
        let dayofWeek = 0;

        switch (date.getDay()) {
            case 0: dayofWeek = 'ВС';
                break;
            case 1: dayofWeek = 'ПН';
                break;
            case 2: dayofWeek = 'ВТ';
                break;
            case 3: dayofWeek = 'СР';
                break;
            case 4: dayofWeek = 'ЧТ';
                break;
            case 5: dayofWeek = 'ПТ';
                break;
            case 6: dayofWeek = 'СБ';
                break;
            default: dayofWeek = 'date wrong';
                break;
        }
        return dayofWeek;
    }

    let date = new Date(2012, 0, 3);  // 3 января 2012 года
    console.log( getWeekDay(date) );        // нужно вывести "ВТ"
}

export default function GetWeekDay() {
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
