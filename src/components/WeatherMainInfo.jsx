import React from "react";
import { ContainerCity, ContainerFrame } from "../assets/Styles/StyleWeatherApp";

const WeatherMainInfo = ({ weather, loading }) => {
    const icon = weather?.weather?.[0].icon;

    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const newDate = date.toLocaleDateString('es-ES', options);

    return (
        <ContainerCity>
            {loading
                ?
                <span className="loader"></span>
                : (
                    <>
                        <div className="card">
                            <div className="card__header">
                                <h3>{weather?.name}</h3>
                                <p>{newDate}</p>
                            </div>
                            <div className="card__body">
                                <figure>
                                    <img
                                        src={`http://openweathermap.org/img/w/${icon}.png`}
                                        alt="weather-icon"
                                    />
                                    <figcaption>
                                        <p>{weather?.weather?.[0].description}</p>
                                    </figcaption>
                                </figure>

                            </div>
                            <div className="card__footer">
                                <p>Temperatura <span>{weather?.main?.temp}°</span></p>
                                Máx. <span className="max__tem"> {weather?.main?.temp_max}°</span> | Min. <span className="min__tem">{weather?.main?.temp_min}°</span>
                            </div>
                        </div>

                        <ContainerFrame>
                            <iframe
                                src={`https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d240863.68501219802!2d${weather?.coord?.lon}!3d${weather?.coord?.lat}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1667888339884!5m2!1ses-419!2smx`}
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>

                        </ContainerFrame>
                    </>
                )
            }

        </ContainerCity>
    );
};

export default WeatherMainInfo;
