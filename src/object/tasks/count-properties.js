import React from 'react';

const taskDescription = 'Подсчёт количества свойств объекта';
const taskLink = 'https://learn.javascript.ru/task/count-properties';

function solution() {
    function count(obj) {
        return Object.keys(obj).length;
    }

    function isEmpty(obj) {
        return Object.values(obj).length > 0 ? false : true;
    }

    let user = {};

    console.log('is empty? - ', isEmpty(user));

    user = {
        name: 'John',
        age: 30,
        mardied: false
    };

    

    user.convict = false;
    
    console.log( count(user) ); // 4

    delete user.mardied;

    console.log(user);
    console.log( count(user) ); // 3
    console.log('is empty? - ', isEmpty(user));
}

export default function CountProperties() {
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
