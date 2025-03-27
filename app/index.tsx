  import { useState } from "react";
  import { Text, View } from "react-native";
  import { Ref } from "react";
  import { Button } from "react-native";
  import { StyleSheet, TextInput } from 'react-native';
  import React from "react";





  export default function Index() {
    const [seconds, setSeconds] = React.useState(0)
    const [minutes, setMinutes] = React.useState('0')
    const [hours, setHours] = React.useState('0')

    function timerStart() {
      (function loop() {
        setTimeout(() => {
          let p = seconds - 1
          console.log(p)
          loop()
        }, 1000);
      })();
    }



    return (

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <TextInput
          placeholder="hours"
          onChangeText={setHours}
          value={hours}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="minutes"
          onChangeText={setMinutes}
          value={minutes}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="seconds"
          //onChangeText={(e) => Limiter(e)}
          onChangeText={setSeconds}
          value={seconds}
          keyboardType="numeric"
        />
        <Button
          title="start"
          onPress={timerStart}
        />
        <Text>{seconds}</Text>
        <Text>{seconds}:{minutes}:{hours}</Text>
      </View>
    );
  }
