import { TouchableOpacity } from "react-native";
import * as React from 'react'
import { StyleSheet } from 'react-native';

type CalculatorNumbersProps = {
    num: number;
    back: (value: number) => void;
}

export default function Numpad(props: CalculatorNumbersProps) {
    let p = [];
    const test = (t: number) => {

        props.back(t);
    }



    return (
    <TouchableOpacity
    style={styles.button}

    
    onPress={() => test(props.num)} >
        {props.num}
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    button:{
        display:"flex",
        fontSize:40,
        borderColor:"black",
        borderWidth: 1,
    }
})