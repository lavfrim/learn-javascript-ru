import React from 'react';

const taskDescription = 'Добавьте функциям декорирующий метод "defer()"';
const taskLink = 'https://learn.javascript.ru/task/defer-to-prototype-extended';

function solution() {
    Function.prototype.defer = function(time) {
        const ctxfunc = this;
        function func(...args) {
            return setTimeout(() => (ctxfunc.apply(this, args)), time);
        }
        return func;
    }

    function f(a, b) {
        console.log( a + b );
    }
    
    f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
}

export default function DeferToPrototypeExtended() {
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
