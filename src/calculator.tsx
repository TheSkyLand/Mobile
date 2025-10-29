import * as React from 'react'
import { View, TouchableOpacity } from "react-native"
import { StyleSheet } from 'react-native';
import NumberField from '@/components/numberField';
import Numpad from '@/components/Numpad';

const Calculator = () => {
    let p = [];
    for (let i = 0; i < 10; i++) {
        p.push(i);
    }
    const [bufferNum, setBufferNum] = React.useState('')
    const [inputNum, setInput] = React.useState('');
    const [secondNum, setSecond] = React.useState('');
    const [operator, setOperator] = React.useState('');
    const backNum = (value: any) => {

        setInput(inputNum + value.toString())

    }

    const handleOperator = (operator: string) => {
        setOperator(operator)
        switch (operator) {
            case "+": {
                setBufferNum(inputNum)
                setInput('')
                setSecond(inputNum + operator.toString())
                break
            }
            case "-": {
                setBufferNum(inputNum)
                setInput('')
                setSecond(inputNum + operator.toString())
                break
            }
            case "*": {
                setBufferNum(inputNum)
                setInput('')
                setSecond(inputNum + operator.toString())
                break
            }
            case "/": {
                setBufferNum(inputNum)
                setInput('')
                setSecond(inputNum + operator.toString())
                break
            }
        }
    }
    const handleEquation = (operator: any) => {
        switch (operator) {
            case "+": {
                let result = Number(bufferNum) + Number(inputNum)
                setSecond(bufferNum.toString() + operator + inputNum.toString() + "=" + result.toString())
                break
            }
            case "-": {
                let result = Number(bufferNum) - Number(inputNum)
                setSecond(bufferNum.toString() + operator + inputNum.toString() + "=" + result.toString())
                break
                
            }
            case "*": {
                let result = Number(bufferNum) * Number(inputNum)
                setSecond(bufferNum.toString() + operator + inputNum.toString() + "=" + result.toString())
                break
                
            }
            case "/": {
                let result = Number(bufferNum) / Number(inputNum)
                setSecond(bufferNum.toString() + operator + inputNum.toString() + "=" + result.toString())
                break
                
            }
        }
        setInput('');
    }

    const handleClear = () => {
        setSecond('')
        setBufferNum('')
        setInput('')
    }
    return (
        <View>
            <View
                style={styles.box}
            >
                <NumberField
                    inputStr={secondNum}
                />
                <NumberField
                    inputStr={inputNum}
                />
                {p.map((item, index) => (
                    <Numpad
                        num={index}
                        back={backNum}
                    />
                ))}
                <View
                    style={styles.box2}
                >
                    <TouchableOpacity
                        style={styles.button2}
                        onPress={(e) => handleOperator("+")}
                    >
                        +
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button2}
                        onPress={(e) => handleOperator("-")}
                    >
                        -
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button2}
                        onPress={(e) => handleOperator("*")}
                    >
                        *
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button2}
                        onPress={(e) => handleOperator("/")}
                    >
                        ÷
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button2}
                        onPress={(e) => handleEquation(operator)}
                    >
                        =
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button2}
                        onPress={handleClear}
                    >Clear
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        width: 200,
    },
    button2: {
        display: "flex",
        fontSize: 40,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 100,
        padding: 10,
        margin: 10
    },
    box2: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        width: 500,
    },
})

export default Calculator
