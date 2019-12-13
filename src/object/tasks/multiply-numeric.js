import React from 'react';

const taskDescription = 'Умножаем все числовые свойства на 2';
const taskLink = 'https://learn.javascript.ru/task/multiply-numeric';

function solution() {
    function multiplyNumeric(obj) {
        return Object.fromEntries(
            Object.entries(obj).map(
                ([key, value]) => (typeof value === 'number' ? [key, value * 2] : [key, value])
            )
        );
    }

    // до вызова функции
    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };
    
    console.log(multiplyNumeric(menu));
    
    // после вызова функции
    // menu = {
    //     width: 400,
    //     height: 600,
    //     title: "My menu"
    // };
}

export default function Multiplynumeric() {
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
