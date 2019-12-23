import React from 'react';


const taskDescription = 'Playground';

function solution() {
    console.log(`this is the playground`);
    // write your code here

    function delay(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), ms);
        });
    }
      
    delay(3000).then(() => console.log('выполнилось через 3 секунды'));

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