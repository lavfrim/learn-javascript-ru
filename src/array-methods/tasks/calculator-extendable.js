import React from 'react';

const taskDescription = 'Создать расширяемый калькулятор';
const taskLink = 'https://learn.javascript.ru/task/calculator-extendable';

function solution() {
    function Calculator() {
        if (!new.target) {
            return new Calculator();
        }
        this.functionality = {
            "+": (a, b) => (a + b),
            "-": (a, b) => (a - b),
        }

        this.calculate = (expression) => {
            const expressionInArray = expression.split(' ');
            const a = +expressionInArray[0];
            const b = +expressionInArray[2];
            const operator = expressionInArray[1];
            return  this.functionality[operator] ? 
                    this.functionality[operator](a, b) :
                    `Please use "addMethod" for add functionality to your operator "${operator}"`;
        }

        this.addMethod = (operator, functionExpression) => {
            this.functionality[operator] = functionExpression;
        }
    }

    let calc = new Calculator();

    console.log( calc.calculate("3 + 7") ); // 10

    let powerCalc = new Calculator();
    powerCalc.addMethod("*", (a, b) => a * b);
    powerCalc.addMethod("/", (a, b) => a / b);
    powerCalc.addMethod("**", (a, b) => a ** b);

    let result = powerCalc.calculate("2 ** 3");
    console.log( result ); // 8
}

export default function CalculatorExtendable() {
    solution();
    return (
        <a
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
            href={taskLink}
        >
            {taskDescription}
        </a>
    )
}
