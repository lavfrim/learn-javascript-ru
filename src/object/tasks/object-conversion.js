import React from 'react';

const taskDescription = 'Преобразование объектов: toString и valueOf и не только!';
const taskLink = 'https://learn.javascript.ru/object-conversion';

function solution() {
    console.log(`['x'] == 'x' // true`);
    console.log( ['x'] == 'x' );
    console.log(`['x'].toString() = ${['x'].toString()}`);
    console.log('----------------------------------\n');

    var foo = {
        toString: function() {
          return 'foo';
        },
        valueOf: function() {
          return 2;
        }
    };
      
    alert( foo ); // foo
    console.log( foo + 1 ); // 3
    console.log( foo + "3" ); // 23
    console.log('----------------------------------\n');


    console.log( [] == [] ); // false // obj != obj
    console.log( [] == ![] ); // true // ![] = !true = false -> [] == false -> '' == false -> true
    console.log('----------------------------------\n');

    console.log(`
        ${new Date(0).valueOf()} // 0
        ${new Date(0) - 0} // 0 - 0 = 0
        ${new Array(1)[0] + ""} // [empty] -> [empty][0] -> undefined -> "undefined"
        ${({})[0]} // obj[0] -> undefined
        ${[1] + 1} // [].toString() + 1 -> "1" + 1 -> "11"
        ${[1,2] + [3,4]} // "1,23,4"
        ${[] + null + 1} // "" + null + 1 -> "null1"
        ${[[0]][0][0]} // 0 (number)
        ${{} + {}} // "[object Object][object Object]"
    `);
}

export default function ObjectConversion() {
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
