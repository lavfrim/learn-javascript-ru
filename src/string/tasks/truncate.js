import React from 'react';

const taskDescription = 'Усечение строки';
const taskLink = 'https://learn.javascript.ru/task/truncate';

function solution() {
    function truncate(string, maxLength) {
        return string.length > maxLength ? string.slice(0, maxLength - 1) + '...' : string;
    }

    console.log(
        truncate("Вот, что мне хотелось бы сказать на эту тему:", 20),
        truncate("Всем привет!", 20)
    );
    // truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
    // truncate("Всем привет!", 20) = "Всем привет!"
}

export default function Truncate() {
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
