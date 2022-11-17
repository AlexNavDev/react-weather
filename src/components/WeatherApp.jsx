import React, { useEffect, useState } from 'react'
import { Container } from '../assets/Styles/StyleWeatherApp';
import MessageError from './MessageError';
import WeatherForm from './WeatherForm'
import WeatherMainInfo from './WeatherMainInfo';

const WeatherApp = () => {
    const [weather, setWeather] = useState([]);
    const [errorData, setErrorData] = useState(false);
    const [messageErrorData, setMessageErrorData] = useState(null);
    const [loading, setLoading] = useState(true);

    const hour = new Date().getHours();

    useEffect(() => {
        searchCity()
    }, []);

    useEffect(() => {
        document.title = `Clima | ${weather?.name ?? ""}`
    }, [weather]);

    async function searchCity(city = "naucalpan") {
        try {
            setLoading(true);

            const url = `${import.meta.env.VITE_APP_URL}?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_KEY}`;

            const request = await fetch(url);
            const data = await request.json();

            if (!request.ok) throw { statusTex: request.statusText || "Ocurrió un error" }

            if (data.message === "city not found") {
                setErrorData(true);
                setMessageErrorData("Ciudad y/o país no encontrado");
                return
            }

            setWeather(data);

        } catch (error) {
            console.error(error.statusTex)
        } finally {
            setLoading(false)
        }
    }

    function onChangeCity(city) {
        setWeather(null);
        searchCity(city);
    }

    return (
        <Container hour={hour}>
            <WeatherForm onChangeCity={onChangeCity} />

            {errorData
                ? <MessageError message={messageErrorData} errorData={errorData} setErrorData={setErrorData} onChangeCity={onChangeCity} />
                : (
                    <WeatherMainInfo weather={weather} loading={loading} />
                )
            }

        </Container>
    )
}

export default WeatherApp;