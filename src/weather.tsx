import React, { useState } from "react"
import { View, Text, Image } from "react-native"
import { useEffect } from "react"
import Geolocation from '@react-native-community/geolocation'
import { WeatherDto } from "./types/weather.types"
import { ActivityIndicator } from "react-native"

const Weather = () => {
    const apiKey = '05f222c0b775a252d1b0fd722b28b0c8';
    const unitGroup = 'metric';
    const contentType = 'json';
    const includeOptions = 'current,days';

    const [location, setLocation] = useState('moscow');

    const [data, setData] = useState<[]>();

    const [current, setCurrent] = useState<[]>([])
    const [forecast, setForecast] = useState<[]>([])

    const [latitude, setLatitude] = useState(22.22);
    const [longitude, setLongitude] = useState(22.22);

    const getDayOfWeek = (date = new Date()) => {
        const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        return days[date.getDay()];
    };

    console.log(getDayOfWeek(new Date('2024-01-01')));

    /*
    const weatherIcons = (conditions: string) => {
        switch (conditions) {
            case "Partially cloudy":
                return <Image
                    source={require('../assets/images/PartiallyCloudy.png')}
                    style={{ width: 50, height: 50 }}
                />;
            case "Rain":
                return <Image
                    source={require('../assets/images/Rain.png')}
                    style={{ width: 50, height: 50 }}
                />;
            case "Overcast":
                return <Image
                    source={require('../assets/images/Overcast.png')}
                    style={{ width: 50, height: 50 }}
                />;
            case "Rain, Partially cloudy":
                return <Image
                    source={require('../assets/images/RainPartiallyCloudy.svg')}
                    style={{ width: 50, height: 50 }}
                />;
            case "Rain, Overcast":
                return <Image
                    source={require('../assets/images/RainOvercast.svg')}
                    style={{ width: 50, height: 50 }}
                />;
        }
    }
        */

    useEffect(() => {
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=22.22&lon=22.22&appid=05f222c0b775a252d1b0fd722b28b0c8", {
            method: 'GET'
        })

            .then(response => response.json())
            .then(data => {
                console.log('Forecast days:', data.days);
                setData(data.days)
            })
            .catch(async errorResponse => {
                if (errorResponse.text) {
                    const errorMessage = await errorResponse.text();
                    console.error('Error message:', errorMessage);
                } else {
                    console.error('Error occurred:', errorResponse);
                }
            })
    });

    useEffect(() => {
        fetch("https://api.openweathermap.org/data/2.5/forecast?lat=22.22&lon=22.22&appid=05f222c0b775a252d1b0fd722b28b0c8", {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                console.log('Forecast days:', data.days);
                setData(data.days)
            })
            .catch(async errorResponse => {
                if (errorResponse.text) {
                    const errorMessage = await errorResponse.text();
                    console.error('Error message:', errorMessage);
                } else {
                    console.error('Error occurred:', errorResponse);
                }
            })
    });

    Geolocation.getCurrentPosition(info => console.log(info));

    return (
        <View>
            {
                data ? 
            data.map((item: WeatherDto, index) => (

                <View key={index} style={{
                    padding: 20,
                }}>
                    <Text style={{
                        fontWeight: "bold"
                    }}> {(getDayOfWeek(new Date(item.datetime)))} </Text>
                    <Text> время {item.sunset} </Text>
                    <Text style={{ color: "blue", fontWeight: "bold", fontSize: 20 }}> {item.temp} °C </Text>
                </View>
            ))
        : <ActivityIndicator></ActivityIndicator>
        }
        </View>

    )
}


export default Weather