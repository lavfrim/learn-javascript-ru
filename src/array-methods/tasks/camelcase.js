import React from 'react';

const taskDescription = 'Переведите текст вида border-left-width в borderLeftWidth';
const taskLink = 'https://learn.javascript.ru/task/camelcase';

function solution() {
    // camelize("background-color") == 'backgroundColor';
    // camelize("list-style-image") == 'listStyleImage';
    // camelize("-webkit-transition") == 'WebkitTransition';
    
    function camelize(string) {
        return string.split('-').map((item, index) => (index < 1 ? item : item[0].toUpperCase() + item.slice(1))).join('');
    }

    console.log(camelize("background-color"));
    console.log(camelize("list-style-image"));
    console.log(camelize("-webkit-transition"));
}

export default function Camelcase() {
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
