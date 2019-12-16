import React from 'react';

const taskDescription = 'Работа с прототипами';
const taskLink = 'https://learn.javascript.ru/task/property-after-delete';

function solution() {

    let animal = {
        jumps: null
    };

    let rabbit = {
        __proto__: animal,
        jumps: true
    };
    
    console.log( rabbit.jumps ); // true
    
    delete rabbit.jumps;
    
    console.log( rabbit.jumps ); // null
    
    delete animal.jumps;
    
    console.log( rabbit.jumps ); // undefined
}

export default function PropertyAfterDelete() {
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
