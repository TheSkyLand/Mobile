import * as React from 'react'
import { View, TouchableOpacity } from "react-native"


interface CalculatorNumbersProps {
    num: number;
    back: (value: number) => void;
}

const calculatorNumbers = (props: CalculatorNumbersProps) => {
    const test = (t: number) => {

        props.back(t);
    }



    return (<TouchableOpacity onPress={() => test(props.num)} >
        {props.num}
    </TouchableOpacity>)
}


export default function Calculator() {
    return (
        <View>
            <calculatorNumbers>
                
            <calculatorNumbers />
        </View>
    )
}