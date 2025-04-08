import { useState } from "react";
import { Text, View } from "react-native";
import { Ref } from "react";
import { Button } from "react-native";
import { StyleSheet, TextInput } from 'react-native';
import React from "react";
import { useEffect } from "react";




export default function Index() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);


  const deadline = seconds
  const getTime = () => {
    const time = deadline;

    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <View>
      < Input  />

      <Text>{hours < 10 ? "0" + hours : hours}</Text>
      <Text>Hours</Text>
      <Text >{minutes < 10 ? "0" + minutes : minutes}</Text>
      <Text>Minutes</Text>
      <Text >{seconds < 10 ? "0" + seconds : seconds}</Text>
      <Text>Seconds</Text>

      <button>START</button>
    </View>
  );
}
