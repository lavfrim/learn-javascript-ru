import React from 'react';

const taskDescription = 'Перемешайте массив';
const taskLink = 'https://learn.javascript.ru/task/shuffle';

function solution() {
    function shuffle(array) {
        array.forEach((item, index) => {
            const random100 = Math.random() * 100;
            const part = 100 / array.length;
            const newIndex = Math.trunc(random100 / part);
            const value = array[newIndex];
            array.splice(newIndex, 1, item);
            array.splice(index, 1, value);
        })
    }

    let arr = [1, 2, 3];

    const counter = {
        "123": 0,
        "132": 0,
        "213": 0,
        "231": 0,
        "321": 0,
        "312": 0,

    };
    const STOP_QUANTITY = 100000;
    for (let i = 0; i < STOP_QUANTITY; i += 1) {
        shuffle(arr);
        const arrayString = arr.join('');
        counter[arrayString] += 1;
    }

    console.log(counter);
}

export default function Shuffle() {
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
