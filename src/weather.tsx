import React, { useState } from "react"
import { View, Text } from "react-native"
import { useEffect } from "react"
import Geolocation from '@react-native-community/geolocation'
import { WeatherDto } from "./types/weather.types"
import { ActivityIndicator } from "react-native"

const Weather = () => {
    const [current, setCurrent] = useState<[]>([])
    const [forecast, setForecast] = useState<[]>([])

    const [data, setData] = useState<[]>();

    const [latitude, setLatitude] = useState(22.22);
    const [longitude, setLongitude] = useState(22.22);

    const GetWeatherToday = () => {
        return fetch("https://api.openweathermap.org/data/2.5/weather?lat=22&lon=22&appid=05f222c0b775a252d1b0fd722b28b0c8")
            .then(response => response.json())
            .then(json => {
                console.log(json.weather)
                setCurrent(json.current)
                return json.weather;
            })
            .catch(error => {
                console.log(error)
            })
    }

    const GetWeatherForecast = () => {
        return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=22&lon=22&appid=05f222c0b775a252d1b0fd722b28b0c8`)
            .then(response => response.json())
            .then(json => {
                console.log(json.forecast)
                setForecast(json.forecast)
                return json.forecast
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        GetWeatherToday()
        GetWeatherForecast()
    }, [])

    Geolocation.getCurrentPosition(info => console.log(info));

    return (
        <View>
            {data ?
                data.map((item: WeatherDto, index) => (

                    <View key={index} style={{ padding: 20 }}>
                        <Text> погода {item.conditions} </Text>
                        <Text> погода {item.datetime} </Text>
                        <Text> погода {item.sunset} </Text>
                        <Text> погода {item.temp} </Text>
                    </View>
                ))
                :
                <ActivityIndicator size="large" color="#0000ff" />
            }
        </View>

    )
}


export default Weather