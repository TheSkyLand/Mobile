import * as React from 'react'
import { View, TouchableOpacity } from "react-native"
import Numpad from '@/app/components/Numpad';
import { StyleSheet } from 'react-native';
import NumberField from '@/app/components/numberField';

const Calculator = () => {
    let p = [];
    for (let i = 0; i < 10; i++) {
        p.push(i);
    }
    const [bufferNum, setBufferNum] = React.useState('')
    const [inputNum, setInput] = React.useState('');
    const [secondNum, setSecond] = React.useState('');
    const [operator, setOperator] = React.useState('');
    const [inputType, setInputType] = React.useState("InputNum");
    const backNum = (value: any) => {

        setInput(inputNum + value.toString())

    }

    const handleOperator = (operator: string) => {
        setOperator(operator)

        switch (operator) {
            case "+": {
                setBufferNum(inputNum)
                setSecond(inputNum + operator.toString())
                break
            }
            case "-": {
                setBufferNum(inputNum)
                setSecond(inputNum + operator.toString())
                break
            }
            case "*": {
                setBufferNum(inputNum)
                setSecond(inputNum + operator.toString())
                break
            }
            case "/": {
                setBufferNum(inputNum)
                setSecond(inputNum + operator.toString())
                break
            }
        }
    }
    const handleEquation = (operator: any) => {
        switch (operator) {
            case "+": {
                let result = Number(bufferNum) + Number(inputNum)
                setInput(result.toString())
                break
            }
            case "-": {
                let result = Number(bufferNum) - Number(inputNum)
                setInput(result.toString())
                break
            }
            case "*": {
                let result = Number(bufferNum) * Number(inputNum)
                setInput(result.toString())
                break
            }
            case "/": {
                let result = Number(bufferNum) / Number(inputNum)
                setInput(result.toString())
                break
            }
        }
    }
    return (
        <View>
            <View
                style={styles.box}
            >
                <NumberField
                    inputStr={inputNum}
                />
                <NumberField
                    inputStr={secondNum}
                />
                {p.map((item, index) => (
                    <Numpad
                        num={index}
                        back={backNum}
                    />
                ))}
            </View>
            <View>
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
                        onPress={(e) => handleEquation(operator)}
                    >
                        =
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button2}
                        onPress={() => setInput('')}
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
        width: 80,
    },
    button: {
        display: "flex",
        fontSize: 40,
        borderColor: "black",
        borderWidth: 1,
    },
    button2: {
        display: "flex",
        fontSize: 40,
        borderColor: "black",
        borderWidth: 1,
    },
    box2: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        width: 100,
    },
})

export default Calculator
