import React from 'react';

const taskDescription = 'Сумма с произвольным количеством скобок';
const taskLink = 'https://learn.javascript.ru/task/sum-many-brackets';

function solution() {
    function sum(current) {
        let accumulator = current;
        
        function nextFunction(next) {
            accumulator += next;
            return nextFunction;
        } 

        nextFunction.toString = function() {
            return `${accumulator}`;
        }
        nextFunction.valueOf = function() {
            return accumulator;
        }

        return nextFunction;
    }

    console.log(sum(1)(2) =='3');
    console.log(sum(1)(2) == 3);
    console.log(typeof(sum(1)(2).toString())); // 3
    console.log(typeof(sum(1)(2).valueOf())); // 3
    console.log(sum(1)(2) + '3'); // 33
    console.log(sum(1)(2) + 3); // 6
    console.log(sum(1)(2)(3)); // 6
    console.log(sum(5)(-1)(2)); // 6
    console.log(sum(6)(-1)(-2)(-3)); // 0
    console.log(sum(0)(1)(2)(3)(4)(5)); // 15
}

export default function SumManyBrackets() {
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
