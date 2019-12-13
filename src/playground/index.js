import React from 'react';


const taskDescription = 'Playground';

function solution() {
    console.log(`this is the playground`);
    // write your code here

   

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