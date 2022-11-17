import React, { useState } from 'react'
import { Form } from '../assets/Styles/StyleWeatherApp';

const WeatherForm = ({ onChangeCity }) => {
    const initialForm = { nameCity: "" }
    const [form, setForm] = useState(initialForm);
    const [errorValidation, setErrorValidation] = useState(false);
    const [messageErrorValidation, setMessageErrorValidation] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({
            [name]: value
        })
    }

    const validation = (e) => {
        const textValue = e.target.value;
        const regex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/

        if (!regex.exec(textValue) && textValue !== "") {
            setErrorValidation(true);
            setMessageErrorValidation("Solo aceptan letras");
            return
        }
        setErrorValidation(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!errorValidation) {
            onChangeCity(form.nameCity);
            setForm(initialForm);
        }
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <input className="input" type="text" name="nameCity" value={form.nameCity} onChange={handleChange} onKeyUp={validation} placeholder="Ingresa una ciudad o país" required />
                {errorValidation && <p>{messageErrorValidation}</p>}
            </Form>
        </>
    )
}

export default WeatherForm;