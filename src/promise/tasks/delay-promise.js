import React from 'react';

const taskDescription = 'Проверка на спам';
const taskLink = 'https://learn.javascript.ru/task/check-spam';

function solution() {
    function delay(ms) {
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => resolve(), ms);
        //     // setTimeout(resolve, ms);
        // });
        return new Promise(resolve => setTimeout(resolve, ms));
    }
      
    delay(1500).then(() => console.log('выполнилось через 1.5 секунды'));
}

export default function DelayPromise() {
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
