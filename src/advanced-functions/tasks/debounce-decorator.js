import React from 'react';

const taskDescription = 'Декоратор debounce';
const taskLink = 'https://learn.javascript.ru/task/debounce';

function solution() {
    function debounce(func, time) {
        let lastCallingTime = new Date(0);
        function wrapper(...args) {
            const now = Date.now();
            
            return now - lastCallingTime > time ? (lastCallingTime = now, func.apply(this, args)) : console.log('miss')
        }
        return wrapper;
    }


    let f = debounce(console.log, 1000);

    f(1); // выполняется немедленно
    f(2); // проигнорирован

    setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
    setTimeout( () => f(4), 1100); // выполняется
    setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)

    console.log('---------------------------------');
    console.log('Тормозящий (throttling) декоратор');
    console.log('https://learn.javascript.ru/task/throttle')

    function throttle(func, time) {
        function wrapper(...args) {
            return func.apply(this, args);
        }

        return wrapper;
    }

    function smthFunc(a) {
        console.log(a);
    }
    
    // f1000 передаёт вызовы f максимум раз в 1000 мс
    let f1000 = throttle(smthFunc, 1000);
    
    f1000(1); // показывает 1
    f1000(2); // (ограничение, 1000 мс ещё нет)
    f1000(3); // (ограничение, 1000 мс ещё нет)
    
    // когда 1000 мс истекли ...
    // ...выводим 3, промежуточное значение 2 было проигнорировано
}

export default function DebounceDecorator() {
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
