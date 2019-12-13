import React from 'react';

const taskDescription = 'Перебираемые ключи';
const taskLink = 'https://learn.javascript.ru/task/iterable-keys';

function solution() {
    let map = new Map();

    map.set("name", "John")
        .set("newName", "Alex")
        .set("girl", "Anna");

    let keys = Array.from(map.keys());
    
    keys.push("more");
    console.log(keys);
}

export default function IterableKey() {
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
