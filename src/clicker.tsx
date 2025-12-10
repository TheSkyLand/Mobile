import { View, StyleSheet, TouchableOpacity, Text, Image, ImageBackground } from "react-native"
import React, { useState } from "react";

const Clicker = () => {
    const [hp, setHp] = useState(60);
    let frame;
    const handlePress = () => {
        setHp(hp - 1);
    }

    const changeImage = () => {
        if (hp > 50) {
            return <Image source={require('../assets/images/egg1.png')} />
        }
        else if (hp > 40) {
            return <Image source={require('../assets/images/egg2.png')} />
        }
        else if (hp > 30) {
            return <Image source={require('../assets/images/egg3.png')} />
        }
        else if (hp > 20 ) {
            return <Image source={require('../assets/images/egg4.png')} />
        }
        else if (hp > 10) {
            return <Image source={require('../assets/images/egg5.png')} />
        }
        else if (hp > 5) {
            return <Image source={require('../assets/images/egg6.png')} />
        }

        if (hp === 0) {
            return (<View
                style={{
                    position: "absolute",
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <View

                >
                    <TouchableOpacity
                        onPress={() => setHp(60)}
                    >
                        do you want to restart
                    </TouchableOpacity>

                </View>
            </View>)
        }
    }



    return (
        <View>

            <TouchableOpacity
                onPress={handlePress}
                style={{
                    width: 300,
                    height: 300,
                }}
            >
                {changeImage()}
            </TouchableOpacity>

            <Text>HP: {hp}</Text>
        </View>
    )
}

export default Clicker