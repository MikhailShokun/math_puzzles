import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import s from "./App.module.scss"


const App = () => {
    const [num1, setNum1] = useState(Number(0));
    const [num2, setNum2] = useState(Number(0));
    const [maxNum, setMaxNum] = useState(Number(0));
    const [operator, setOperator] = useState("+");
    const [rightAnswer, setRightAnswer] = useState(Number(0));
    const [inputNum, setInputNum] = useState(Number(0));
    const [answer, setAnswer] = useState(Number(0));

    const randomNum = (a, b) => {
        let numLength = 2;
        const numbers = [];
        for (let i = 0; i < numLength; i++) {
            numbers.push(randomInteger(a, b));
        }
        setNum1(numbers[0]);
        setNum2(numbers[1]);
        return numbers;
    }

    const randomInteger = (min, max) => {
        // get a random number from (min-0.5) to (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    const calcResult = (a, b, operator) => {
        switch (operator) {
            case "+":
                setRightAnswer(a + b);
                break;
            case "-":
                setRightAnswer(a - b);
                break;
            case "*":
                setRightAnswer(a * b);
                break;
            case "/":
                setRightAnswer(Number((a / b).toFixed(2)));
                break;
            default:
                return 0;
        }
    };

    return (
        <div className={s.App}>
            <div>
                <h1>Math puzzles</h1>
                <div className={s.buttonWrapper}>
                    <div className={s.buttons}>
                        <Button onClick={() => setOperator("+")} color="warning" variant="outlined">+</Button>
                        <Button onClick={() => setOperator("-")} color="warning" variant="outlined">-</Button>
                        <Button onClick={() => setOperator("*")} color="warning" variant="outlined">*</Button>
                        <Button onClick={() => setOperator("/")} color="warning" variant="outlined">/</Button>
                    </div>
                    <Button onClick={() => {
                        setMaxNum(20)
                        randomNum(0, 20)
                    }} variant="outlined">to 20</Button>
                    <Button onClick={() => {
                        setMaxNum(100)
                        randomNum(0, 100);
                    }} variant="outlined">to 100</Button>
                    <Button onClick={() => {
                        setMaxNum(1000);
                        randomNum(0, 1000);
                    }} variant="outlined">to 1000</Button>
                </div>

                <hr/>

                <div className={s.buttons}>
                    <span style={{marginRight: "10px"}}>{num1} {operator} {num2} =</span>
                    <TextField
                        className={s.inputField}
                        value={inputNum}
                        onChange={(e) => setInputNum(e.target.value)}
                        type="number"
                        color="info"
                        sx={{width: "10ch", color: "white"}}
                        id="outlined-size-small"
                        size="small"
                        label="input answer"
                        variant="outlined"
                        autoFocus
                    />
                </div>
                <div className={s.buttons}>

                    <Button onClick={() => {
                        calcResult(num1, num2, operator);
                        setAnswer(Number(inputNum));
                    }} color="success" variant="outlined">Answer</Button>

                    <Button onClick={() => {
                        randomNum(0, maxNum);
                        setAnswer(0)
                    }} color="secondary" variant="outlined">Reset</Button>

                </div>

                <div>Your answer: <span style={{color: (answer === rightAnswer) ? "green" : "red"}}>{answer}</span></div>
                <div>Right answer: <span style={{color: "green"}}>{rightAnswer}</span></div>

            </div>
        </div>
    );
};

export default App;