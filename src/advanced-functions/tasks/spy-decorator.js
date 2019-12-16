import React from 'react';

const taskDescription = 'Декоратор-шпион';
const taskLink = 'https://learn.javascript.ru/task/spy-decorator';

function solution() {
    function spy(func) {
        wrapper.calls = [];

        function wrapper(...args) {
            wrapper.calls.push(args);
            return func.apply(this, args)
        }

        return wrapper;
    }

    function work(a, b) {
        console.log( a + b ); // произвольная функция или метод
    }
      
    work = spy(work);
    
    work(1, 2); // 3
    work(4, 5); // 9
    
    for (let args of work.calls) {
        console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
    }

    console.log('----------------------------------');
    
    function delay(func, time) {
        function wrapper(...args) {
            // return setTimeout(() => (func.apply(this, args)), time); // вот так лучше
            const savedThis = this;
            return setTimeout(function() {
                func.apply(savedThis, args);
            }, time);
        }
        return wrapper;
    }

    function f(x) {
        console.log(x);
    }
    
    // создаём обёртки
    let f1000 = delay(f, 1000);
    let f1500 = delay(f, 1500);
    
    f1000("test"); // показывает "test" после 1000 мс
    f1500("test2"); // показывает "test" после 1500 мс
}

export default function SpyDecorator() {
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
