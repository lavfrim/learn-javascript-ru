import React from 'react';

const taskDescription = 'Оставить уникальные элементы массива';
const taskLink = 'https://learn.javascript.ru/task/array-unique';

function solution() {
    function unique(arr) {
        const uniqueArray = []
        arr.forEach((item) => {
            if (!uniqueArray.includes(item)) {
                uniqueArray.push(item);
            }
        });
        return uniqueArray;
    }
    
    let strings = [
        "boy",
        "girl",
        "car",
        "boy",
        "boy",
        "girl",
        "girl",
        "car",
        "car",
        "car",
        "gun"
    ];
    
    console.log( unique(strings) ); // boy, girl, car, gun
}

export default function Arrayunique() {
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
