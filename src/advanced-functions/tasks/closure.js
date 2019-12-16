import React from 'react';

const taskDescription = 'Замыкание. Сумма с помощью замыканий';
const taskLink = 'https://learn.javascript.ru/closure#summa-s-pomoschyu-zamykaniy';

function solution() {
    function sum(a) {
        return function(b) {return a + b};
    }

    console.log(sum(1)(2)); // = 3;
    console.log(sum(5)(-1)); // = 4;

    console.log('-----------------------\n');
    console.log('Фильтрация с помощью функции');
    console.log('https://learn.javascript.ru/task/filter-through-function\n');

    /* .. ваш код для inBetween и inArray */
    let arr = [1, 2, 3, 4, 5, 6, 7];

    function inBetween(start, end) {
        return (item) => (item < start || item > end ? false : true);
    }

    function inArray(subArray) {
        return (item) => (subArray.includes(item));
    }

    console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

    console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2

    console.log('-----------------------\n');
    console.log('Сортировать по полю');
    console.log('https://learn.javascript.ru/task/sort-by-field\n');

    function byField(field) {
        return (next, prev) => (next[field] - prev[field]);
    }

    let users = [
        { name: "John", age: 20, surname: "Johnson" },
        { name: "Pete", age: 18, surname: "Peterson" },
        { name: "Ann", age: 19, surname: "Hathaway" }
    ];

    users.sort(byField('name'));
    users.sort(byField('age'));

    console.log('-----------------------\n');
    console.log('Армия функций');
    console.log('https://learn.javascript.ru/task/make-army\n');

    function makeArmy() {
        let shooters = [];
      
        let i = 0;
        while (i < 10) {
            let numer = i;
            let shooter = function() { // функция shooter
                console.log( numer ); // должна выводить порядковый номер
            };
            shooters.push(shooter);
            i++;
        }
      
        return shooters;
      }
      
      let army = makeArmy();
      
      army[0](); // у 0-го стрелка будет номер 10
      army[5](); // и у 5-го стрелка тоже будет номер 10
      // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
}

export default function Closure() {
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
