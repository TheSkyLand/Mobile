import { useState } from "react";
import { Text, View } from "react-native";
import { Ref } from "react";
import { Button } from "react-native";
import { StyleSheet, TextInput } from 'react-native';
import React from "react";




/*
export default function Index() {
  const [seconds, setSeconds] = React.useState('0')
  const [minutes, setMinutes] = React.useState('0')
  const [hours, setHours] = React.useState('0')
  function TimerStart() {
    const timerID = setInterval(function run() {
      let p = seconds + 1;
      console.log(p);
      setSeconds(p);
      console.log(seconds)
      //clearInterval(timerID);
    }, 1000)
  }



  const [MaxValue, setMaxValue] = React.useState('60')
  function Limiter(e: any) {
    console.log(e)
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
        onPress={TimerStart}
      />
      <Text>{seconds}</Text>
      <Text>{seconds}:{minutes}:{hours}</Text>
    </View>
  );
}
  */



// @ts-ignore
export default function Time({ time }) {
  
  const transformMinutes = () => {
    const convertedValue = Math.floor((time / 60000) % 60);
    const formattedValue = ("0" + convertedValue).slice(-2)
    return formattedValue
  }
  const transformSeconds = () => {
    const convertedValue = Math.floor((time / 1000) % 60);
    const formattedValue = ("0" + convertedValue).slice(-2)
    return formattedValue
  }
  const transformMilliseconds = () => {
    const convertedValue = Math.floor((time / 10) % 100);
    const formattedValue = ("0" + convertedValue).slice(-2)
    return formattedValue
  }
  return (
    <View style={styles.row}>
      <Text style={styles.time}>
        {transformMinutes()} :
        <Text> </Text>{transformSeconds()} :
        <Text> </Text>{transformMilliseconds()}
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  row: {
    display: 'flex',
  },
  time: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#272727'
  }
})
