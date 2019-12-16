import React from 'react';

const taskDescription = 'Объявление функции через new Function([arg1, arg2, ...argN], functionBody)';
const taskLink = 'https://learn.javascript.ru/new-function';

// !!!!!!!!!
window.value = 'im global';

function solution() {
    // Closure

    let value = 'in block';

    const func = new Function('console.log(value)');
    func();

    const funcBody = 'return a + b';
    const a = 'a';
    const b = 100;
    const sumFunc = new Function([a, 'b'], funcBody);
    console.log(sumFunc(21, b));
}

export default function NewFunction() {
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
