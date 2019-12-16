import React from 'react';

const taskDescription = 'Добавьте toString в словарь';
const taskLink = 'https://learn.javascript.ru/task/dictionary-tostring';

function solution() {
    let dictionary = Object.create(null, {
        toString: { // определяем свойство toString
          value() { // значение -- это функция
            return Object.keys(this).join();
          }
        }
    });

    // ваш код, который добавляет метод dictionary.toString

    // добавляем немного данных
    dictionary.apple = "Apple";
    dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

    // только apple и __proto__ выведены в цикле
    for(let key in dictionary) {
    console.log(key); // "apple", затем "__proto__"
    }

    // ваш метод toString в действии
    console.log(dictionary); // "apple,__proto__"

    console.log('----------------------------------------');

    function Rabbit(name) {
        this.name = name;
    }
    Rabbit.prototype.sayHi = function() {
        console.log( this.name );
    }
      
    let rabbit = new Rabbit("Rabbit");
    
    rabbit.sayHi();                        // Rabbit
    Rabbit.prototype.sayHi();              // undefined
    Object.getPrototypeOf(rabbit).sayHi(); // undefined
    rabbit.__proto__.sayHi();              // undefined
}

export default function DictionaryTostring() {
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
