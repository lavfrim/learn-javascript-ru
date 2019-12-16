import React from 'react';

const taskDescription = 'Почему наедаются оба хомяка?';
const taskLink = 'https://learn.javascript.ru/task/hamster-proto';

function solution() {
    let hamster = {
        stomach: [],
        
        eat(food) {
            this.stomach.push(food);
        }
    };
    
    let speedy = {
        stomach: [],
        __proto__: hamster
    };
    
    let lazy = {
        stomach: [],
        __proto__: hamster
    };
    
    // Этот хомяк нашёл еду
    speedy.eat("apple");
    console.log( speedy.stomach ); // apple
    
    // У этого хомяка тоже есть еда. Почему? Исправьте
    console.log( lazy.stomach ); // apple
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
