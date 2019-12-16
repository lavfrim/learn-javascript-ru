import React from 'react';

const taskDescription = 'Изменяем "prototype"';
const taskLink = 'https://learn.javascript.ru/task/changing-prototype';

function solution() {
    function Rabbit() {}
    Rabbit.prototype = {
      eats: true
    };
    
    let rabbit = new Rabbit();

    // Rabbit.prototype = {}; // true
    // Rabbit.prototype.eats = false; // false 
    // delete rabbit.eats; // true
    delete Rabbit.prototype.eats; // undefined
    
    console.log( rabbit.eats ); // true
}

export default function HamsterProto() {
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
