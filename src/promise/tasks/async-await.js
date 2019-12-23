import React from 'react';

const taskDescription = 'async-await';
const taskLink = 'https://learn.javascript.ru/async-await';

function solution() {
    console.log('Перепишите, используя async/await');
    console.log('https://learn.javascript.ru/task/rewrite-async')

    // function loadJson(url) {
    //     return fetch(url)
    //       .then(response => {
    //         if (response.status == 200) {
    //           return response.json();
    //         } else {
    //           throw new Error(response.status);
    //         }
    //     })
    // }

    async function loadJson(url) {
        const response = await fetch(url);
        if (response.status == 200) {
            const json = await response.json();
            return json;
        } else {
            throw new Error(response.status);
        }
    }
      
    loadJson('no-such-user.json') // (3)
    .catch((err) => (console.log(err))); // Error: 404

    console.log('----------------------------------------------');
    console.log('Перепишите, используя async/await');
    console.log('https://learn.javascript.ru/task/rewrite-async-2');
    console.log('----------------------------------------------');

    class HttpError extends Error {
        constructor(response) {
          super(`${response.status} for ${response.url}`);
          this.name = 'HttpError';
          this.response = response;
        }
    }
      
    async function loadJson(url) {
        const response = await fetch(url);
        if (response.status == 200) {
            return await response.json();
        } else {
            throw new HttpError(response);
        }
    }

    
    
    // Запрашивать логин, пока github не вернёт существующего пользователя.
    async function demoGithubUser() {
        let user;
        while (true) {
            // const name = "iliakan"; 
            const name = prompt("Введите логин?", "iliakan");
    
            try {
                user = await loadJson(`https://api.github.com/users/${name}`);
                console.log(`Полное имя: ${user.name}.`);
                break;
            } catch(err) {
                if (err instanceof HttpError && err.response.status == 404) {
                    console.log("Такого пользователя не существует, пожалуйста, повторите ввод.");
                } else {
                    throw err;
                }
            }
        }

       return user;
    }
      
    demoGithubUser();

    console.log('----------------------------------------------');
    console.log('Вызовите async–функцию из "обычной"');
    console.log('https://learn.javascript.ru/task/async-from-regular');
    console.log('----------------------------------------------');

    function saveData(data) {
        console.log('#3 save data - ', data);
        return data;
    }

    async function wait() {
        await new Promise(resolve => setTimeout(resolve, 1000));
      
        return 10;
    }
      
    function func() {
        let data;
        wait().then(resolve => saveData(resolve));
    }
    func();
}

export default function AsyncAwait() {
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
