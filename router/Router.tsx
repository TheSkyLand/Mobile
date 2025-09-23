import { navigate } from 'expo-router/build/global-state/routing';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';


export default function Home({ navigation }: any) {


    return (
        <View
            style={styles.container}
        >
            <Text
                style={styles.title}
            >Home Screen</Text>
            <TouchableOpacity


                onPress={() => navigation.navigate('Calculator')}>
                <Text
                    style={styles.button}>Калькулятор</Text>

            </TouchableOpacity>
            <TouchableOpacity

                onPress={() => navigation.navigate('Weather')}>
                <Text
                    style={styles.button}
                >Погода</Text>
            </TouchableOpacity>
            <TouchableOpacity

                onPress={() => navigation.navigate('Clicker')}>
                <Text
                    style={styles.button}
                >Кликер</Text>
            </TouchableOpacity>
            <TouchableOpacity

                onPress={() => navigation.navigate('Checkers')}>
                <Text
                    style={styles.button}
                >Шашки</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        padding: 20,
        fontSize: 30,
        fontWeight: 300
    },
    button: {
        padding: 30,
        margin: 30,
        fontSize: 20,
        fontWeight: 600,
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 2.5,
        borderRadius: 50,
    }
})