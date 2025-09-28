import * as React from 'react'
import { View, TouchableOpacity } from "react-native"
import Numpad from '@/components/calculatorNumbers';
import { StyleSheet } from 'react-native';
import NumberField from '@/components/numberField';


export default function Calculator() {
    let p = [];

    for (let i = 0; i < 10; i++) {
        p.push(i);
    }

    const [InputNum, setInput] = React.useState('');

    const backNum = (value: number) => {
        setInput(InputNum + value.toString());
    }

    return (

        <View>
            <View
                style={styles.box}
            >
                <NumberField
                    inputStr={InputNum}
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

                    >
                        +
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button2}
                    >
                        -
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button2}
                    >
                        *
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button2}
                    >
                        ÷
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