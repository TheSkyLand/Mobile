import { useState } from "react";
import { Text, View } from "react-native";
import { Ref } from "react";
import { Button } from "react-native";
import { StyleSheet, TextInput } from 'react-native';
import React from "react";





export default function Index() {
  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  const deadline = "December, 31, 2022";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  
  React.useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);


  return (

    <View>


            <Text >{days < 10 ? "0" + days : days}</Text>
            <Text >Days</Text>
            <Text >{hours < 10 ? "0" + hours : hours}</Text>
            <Text>Hours</Text>
            <Text >{minutes < 10 ? "0" + minutes : minutes}</Text>
            <Text >Minutes</Text>
            <Text >{seconds < 10 ? "0" + seconds : seconds}</Text>
            <Text >Seconds</Text>
    </View>
  );
}
