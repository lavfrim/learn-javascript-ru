import React from 'react';

const taskDescription = 'Рекурсияя';
const taskLink = 'https://learn.javascript.ru/recursion';

function solution() {
    function factorial(n) {
        if (n === 1) {
            return n;
        } else {
            return n * factorial(n-1);
        }
    }

    console.log(factorial(5));
    console.log(
        '-------------------------\n',
        'Последовательность Фибоначи\n',
        'https://learn.javascript.ru/task/fibonacci-numbers\n',
    );

    function fibonachi(n) {
        return n <= 1 ? n : fibonachi(n - 1) + fibonachi(n - 2);
    }
    console.log(fibonachi(7)); //  13

    console.log(factorial(5));
    console.log(
        '-------------------------\n',
        'Вывод односвязного списка\n',
        'https://learn.javascript.ru/task/output-single-linked-list\n',
    );

    let list = {
        value: 1,
        next: {
          value: 2,
          next: {
            value: 3,
            next: {
              value: 4,
              next: null
            }
          }
        }
    };

    function printList(list) {
        const { next, value } = list;
        return next ? (console.log(value), printList(next)) : console.log(value);
    }
    printList(list);

    console.log('-------------------------\n');

    function printListWithCicle(list) {
        let { next, value } = list;
        if (value) {
            console.log(value);
        }
        while (next) {
            console.log(next.value);
            next = next.next;
        }
    }
    printListWithCicle(list);

    console.log('-------------------------\n',
                'Вывод односвязного списка в обратном порядке\n',
    );

    function printListReverse(list) {
        if (list.next) {
            printListReverse(list.next);
        }

        console.log(list.value);
    }
    printListReverse(list);

    console.log('-------------------------\n');

    function printListWithCicle(list) {
        let { next, value } = list;
        const valueArray = [];
        if (value) {
            valueArray.push(value);
        }
        while (next) {
            valueArray.push(next.value);
            next = next.next;
        }
        for (let i = valueArray.length - 1; i >= 0; i -= 1 ) {
            console.log(valueArray[i]);
        }
    }
    printListWithCicle(list);
}

export default function RecursionFactorial() {
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
