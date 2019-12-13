import React from 'react';

const taskDescription = 'Деструктурирующее присваивание';
const taskLink = 'https://learn.javascript.ru/destructuring-assignment';

function solution() {
    console.log(`
    Общий вид:
    let {prop : varName = default, ...rest} = object
    ------------------------------------------------
    `);

    const user = { name: "John", years: 30 };

    const { name = 'unnamed', years: age = 0, isAdmin = false } = user

    console.log( name ); // John
    console.log( age ); // 30
    console.log( isAdmin ); // false
    console.log('------------------------------------------------');

    function topSalary(obj) {
        const workerEntries = Object.entries(obj);
        let maxSalary = 0;
        let topWorker = 'nobody';
        
        if (workerEntries.length <= 0) {
            return null
        } else {
            for (let [name, salary] of workerEntries) {                 
                if (salary > maxSalary) {
                    maxSalary = salary;
                    topWorker = name;
                }
            }
            return topWorker;
        }
        
    }

    function topWorker(obj) {
        const workers = Object.entries(obj).sort(
            ([nextKey, nextValue], [prevKey, prevValue]) => (prevValue - nextValue)
        );
        return workers[0][0];
    }

    let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250,
        "Alex": 450,
    };

    console.log(topSalary(salaries));
    console.log(topWorker(salaries));
}

export default function Destructuring() {
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
