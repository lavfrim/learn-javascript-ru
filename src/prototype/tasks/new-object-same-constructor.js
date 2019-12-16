import React from 'react';

const taskDescription = 'Создайте новый объект с помощью уже существующего"';
const taskLink = 'https://learn.javascript.ru/task/new-object-same-constructor';

function solution() {
    function ThisIsAnewShirt() {
        this.prop = 'prop of object';
    }
    ThisIsAnewShirt.prototype.oldProp = 'oldest prop of object';

    let obj = new ThisIsAnewShirt()
    obj.constructor.prototype.newProp = 'a new property';

    let obj2 = new obj.constructor();

    console.log(obj2);
    console.log('------------------------');

    function User(name) {
        this.name = name;
    }
    User.prototype = {}; // эта строчка перетерает прототип User и удаляет constructor, т.е. заменяет пустым объектом
    
    let user = new User('John');
    let user2 = new user.constructor('Pete');
    
    console.log(user);
    console.log(user2);
    console.log( user2.name ); // undefined
}

export default function NewObjectSameConstructor() {
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
