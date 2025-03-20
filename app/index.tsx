import { useState } from "react";
import { Text, View } from "react-native";
import { Ref } from "react";


export default function Index() {
  let seconds = 0
  let minutes = 0
  let hours = 0

  const timerStart = () => { 

    while (seconds = 59) {
      seconds++
      console.log(seconds)
      console.log(minutes)
      console.log(hours)
      if (seconds = 59) {
        seconds = 0
        minutes++
        if (minutes = 59) {
          minutes = 0
          hours++
        }
      }

    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <button onClick={timerStart}>START</button>
      <Text>seconds:{seconds}, minutes:{minutes}, hours:{hours}</Text>
    </View>
  );
}
