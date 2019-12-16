import React from 'react';


const taskDescription = 'Playground';

function solution() {
    console.log(`this is the playground`);
    // write your code here

    function askPassword(ok, fail) {
        let password = prompt("Password?", '');
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

    // ... 
}

export default function Playground() {
    solution();
    return (
        <h2
            className="head-text"
        >
            {taskDescription}
        </h2>
    )
}