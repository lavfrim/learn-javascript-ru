import React from 'react';

const taskDescription = 'this';
const taskLink = 'https://learn.javascript.ru/bind#ispravte-funktsiyu-teryayuschuyu-this';

function solution() {
    console.log('Исправьте функцию, теряющую "this"');
    console.log('https://learn.javascript.ru/task/question-use-bind')

    function askPassword(ok, fail) {
        let password =  'rockstar';
        if (password == "rockstar") ok();
        else fail();
    }
      
    let user = {
        name: 'Вася',
        
        loginOk() {
            alert(`${this.name} logged in`);
        },
        
        loginFail() {
            alert(`${this.name} failed to log in`);
        },
        
    };
      
    askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

    console.log('-------------------------------------------------');
    console.log('Использование частично применённой функции для логина');
    console.log('https://learn.javascript.ru/task/ask-partial');

    function askPassword2(ok, fail) {
        let password =  'rockstar';
        if (password == "notRockstar") ok();
        else fail();
    }
    
    let user2 = {
        name: 'John',
        
        login(result) {
            alert( this.name + (result ? ' logged in' : ' failed to log in') );
        }
    };
      
    askPassword2(user2.login.bind(user, true), user2.login.bind(user, false));
}

export default function ThisContextFunction() {
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
