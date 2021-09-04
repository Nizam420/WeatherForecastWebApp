import React, { useEffect, useState } from 'react';
//43afb82df31e46b0c5f65c1d9fcb65af
import "./Css/style.css"

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Kolkata");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=43afb82df31e46b0c5f65c1d9fcb65af`
            const response = await fetch(url);
            const resjson = await response.json();
            setCity(resjson.main);
        }
        fetchApi();
    }, [search])

    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" value={search} className="inputField" onChange={(event) => {
                        setSearch(event.target.value)
                    }}></input>
                </div>

                {
                    !city ? (
                        <p className="errorMsg">No Data Found </p>
                    ) : (
                        <div>
                            <div className="info">
                                <h2 className="location">
                                    <i className="fa fa-street-view" aria-hidden="true">{search}</i>
                                </h2>
                                <h1 className="temp">{city.temp}°cel</h1>
                                <h3 className="tempmin_max"> Min : {city.temp_min}°cel | Max : {city.temp_max}°cel </h3>
                                <h3>Nizam</h3>
                            </div>
                            <div className="wave"></div>
                            <div className="waveTwo"></div>
                            <div className="waveThree"></div>
                        </div>
                    )}

            </div>
        </>

    );
};

export default Tempapp;