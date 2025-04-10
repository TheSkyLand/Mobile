import { useState } from "react";
import { Button, Text, View } from "react-native";
import { Ref } from "react";
import { StyleSheet, TextInput } from 'react-native';
import React from "react";
import { useEffect } from "react";


export default function Index() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);


  const [targetHours, setTargetHours] = useState('')
  const [targetMinutes, setTargetMinutes] = useState('')
  const [targetSeconds, setTargetSeconds] = useState('')





  const deadline = `${targetHours}, ${targetMinutes}, ${targetHours}`
  const getTime = () => {
  const time = Date.parse(deadline) - Date.now();

    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));

  };


function start() {
  const interval = setInterval(() => getTime(), 1000);

  return () => clearInterval(interval);
}





  return (
    <View>
      <Text>{hours < 10 ? "0" + hours : hours}</Text>
      <Text>Hours</Text>
      <Text >{minutes < 10 ? "0" + minutes : minutes}</Text>
      <Text>Minutes</Text>
      <Text >{seconds < 10 ? "0" + seconds : seconds}</Text>
      <Text>Seconds</Text>
      <TextInput  onChangeText={newSeconds => setTargetSeconds(newSeconds)} />
      <Text>e Seconds</Text>
      <TextInput  onChangeText={newMinutes => setTargetMinutes(newMinutes)} />
      <Text>e Minutes</Text>
      <TextInput onChangeText={newHours => setTargetHours(newHours)} />
      <Text>e Hours</Text>
      <Button onPress={start}>start</Button>
    </View>
  );
}