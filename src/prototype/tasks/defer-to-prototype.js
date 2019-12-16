import React from 'react';

const taskDescription = 'Добавить функциям метод "f.defer(ms)"';
const taskLink = 'https://learn.javascript.ru/task/defer-to-prototype';

function solution() {
    Function.prototype.defer = function(time) {
        const ctxFunc = this;
        return setTimeout(() => (ctxFunc.apply(this)), time);
    }

    function f() {
        console.log("Hello!");
    }
    
    f.defer(1000); // выведет "Hello!" через 1 секунду
}

export default function DeferToPrototype() {
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
