import React, { useState } from "react"
import { View, Text } from "react-native"
import { useEffect } from "react"
import Geolocation from '@react-native-community/geolocation'


type WeatherProps = {
    id: Number,
    current: String,
    description: String
}

const Weather = (props: WeatherProps) => {
    const [data, setData] = useState<WeatherProps[]>([])

    const [latitude, setLatitude] = useState(22.22);
    const [longitude, setLongitude] = useState(22.22);

    const GetWeather = () => {
        return fetch(`{https//api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=05f222c0b775a252d1b0fd722b28b0c8}`)
            .then(response => response.json())
            .then(json => {
                setData(json.weather)
                return json.weather;
            })
            .catch(error => {
                console.log(error)
            })
    }
    useEffect(() => {
        GetWeather()
    }, [])
    Geolocation.getCurrentPosition(info => console.log(info));

    return (
        <View>
            <Text>
                {props.current}

            </Text>
            <Text>
                {props.description}
            </Text>
        </View>
    )
}


export default Weather