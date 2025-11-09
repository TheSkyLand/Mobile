import { View, StyleSheet, TouchableOpacity, Text, Image, ImageBackground } from "react-native"
import React, { useState } from "react";

const Clicker = () => {

    const [hp, setHp] = useState(6);
    const [maxHp, setMaxHp] = useState(30);

    let frame = 1;

    const checkHp = () => {
            frame++;
    }
    const handlePress = () => {
        checkHp();
        setHp(hp - 1);
    }

    const changeImage = (hp: Number) => {
        switch (hp) {
            case 6: {
                return <Image source={require('../assets/images/egg1.png')} />
            }
            case 5: {
                return <Image source={require('../assets/images/egg2.png')} />
            }
            case 4: {
                return <Image source={require('../assets/images/egg3.png')} />
            }
            case 3: {
                return <Image source={require('../assets/images/egg4.png')} />
            }
            case 2: {
                return <Image source={require('../assets/images/egg5.png')} />
            }
            case 1: {
                return <Image source={require('../assets/images/egg6.png')} />
            }
        }
    }



    return (
        <View>
            <TouchableOpacity onPress={handlePress}>
                <Text>click</Text>
            </TouchableOpacity>
            <View
                style={{
                    width: 300,
                    height: 300,
                }}
            >
                {changeImage(hp)}
            </View>

            <Text>HP: {hp}</Text>
        </View>
    )
}

export default Clicker