import React, { useEffect } from 'react'
import { ContainerMessageErrorData } from '../assets/Styles/StyleWeatherApp';

const MessageError = ({ message, errorData, setErrorData, onChangeCity }) => {

    useEffect(() => {
        let timer;
        timer = setTimeout(() => {
            setErrorData(false)
            onChangeCity("naucalpan")

        }, 3000);

        return () => {
            clearTimeout(timer)
        }
    }, [errorData])


    return (
        <ContainerMessageErrorData>
            <h3>{message}</h3>
        </ContainerMessageErrorData>
    )
}

export default MessageError