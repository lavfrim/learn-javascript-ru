import React from 'react';

const taskDescription = 'Проверка на спам';
const taskLink = 'https://learn.javascript.ru/task/check-spam';

function solution() {
    function checkSpam(string) {
        const exceptions = [
            'VIAGRA',
            'XXX',
            "HUI"
        ];
        let verdict = false;
        exceptions.forEach((exception) => {
            if (string.toUpperCase().includes(exception)) {
                verdict = true;
            }
        });

        return verdict; 
    }

    console.log(
        checkSpam('buy ViAgRA now'),
        checkSpam('free xxxxx'),
        checkSpam("innocent rabbit")
    );

    // checkSpam('buy ViAgRA now') == true
    // checkSpam('free xxxxx') == true
    // checkSpam("innocent rabbit") == false
}

export default function CheckSpam() {
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
