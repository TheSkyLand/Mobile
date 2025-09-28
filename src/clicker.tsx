import { View, StyleSheet, TouchableOpacity, Text } from "react-native"
import { useState } from "react";

export default function Clicker() {

    const [count, setCount] = useState(0);
    return (
        <View>
            <Text>{count}</Text>
            <TouchableOpacity onPress={() => setCount(count + 1)}>
                <Text>click</Text>
            </TouchableOpacity>


        </View>
    )
}