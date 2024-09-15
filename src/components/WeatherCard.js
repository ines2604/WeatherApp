import React from 'react';

function WeatherCard({ weather }) {
    const categories = {
        clear: {
            descriptions: ["clear sky"],
            image: "/assets/clear.png"
        },
        clouds: {
            descriptions: ["few clouds", "scattered clouds", "broken clouds", "overcast clouds"],
            image: "/assets/clouds.png"
        },
        rain: {
            descriptions: ["light rain", "moderate rain", "heavy intensity rain", "very heavy rain", "extreme rain", "freezing rain", "light intensity shower rain", "shower rain", "heavy intensity shower rain", "ragged shower rain"],
            image: "/assets/rain.png"
        },
        thunderstorm: {
            descriptions: ["thunderstorm with light rain", "thunderstorm with rain", "thunderstorm with heavy rain", "light thunderstorm", "thunderstorm", "heavy thunderstorm", "ragged thunderstorm", "thunderstorm with light drizzle", "thunderstorm with drizzle", "thunderstorm with heavy drizzle"],
            image: "/assets/thunderstorm.png"
        },
        snow: {
            descriptions: ["light snow", "snow", "heavy snow", "sleet", "light shower sleet", "shower sleet", "light rain and snow", "rain and snow", "light shower snow", "shower snow", "heavy shower snow"],
            image: "/assets/snow.png"
        },
        mist: {
            descriptions: ["mist", "smoke", "haze", "fog"],
            image: "/assets/mist.png"
        },
        drizzle: {
            descriptions: ["light intensity drizzle", "drizzle", "heavy intensity drizzle", "light intensity drizzle rain", "drizzle rain", "heavy intensity drizzle rain", "shower drizzle"],
            image: "/assets/drizzle.png"
        },
        hot: {
            descriptions: ["hot"],
            image: "/assets/hot.png"
        },
        cold: {
            descriptions: ["cold"],
            image: "/assets/cold.png"
        },
        windy: {
            descriptions: ["windy"],
            image: "/assets/windy.png"
        },
        hail: {
            descriptions: ["hail"],
            image: "/assets/hail.png"
        },
        tornado: {
            descriptions: ["tornado"],
            image: "/assets/tornado.png"
        }
    };

    const desc = weather.weather[0].description;

    const getCategory = (description) => {
        for (const [category, { descriptions }] of Object.entries(categories)) {
            if (descriptions.includes(description)) {
                return category;
            }
        }
        return null;
    };

    const category = getCategory(desc);
    const imageUrl = category ? categories[category].image : null;

    return (
        <div className="card text-center mx-auto my-4 shadow-sm" style={{ maxWidth: '18rem' }}>
            <div className="card-body">
                <h2 className="card-title text-primary mb-3">
                    {weather.name}, {weather.sys.country}
                </h2>
                <div className="d-flex flex-column align-items-center mb-3">
                    {imageUrl && <img src={imageUrl} alt={category} className="img-fluid mb-2" style={{ maxWidth: '100px' }} />}
                    <div className="display-2 fw-bold text-primary">
                        {Math.round(weather.main.temp)}°C
                    </div>
                    <div className="text-capitalize text-muted mt-2">
                        {desc}
                    </div>
                </div>
                <div className="d-flex justify-content-between pt-2 mt-3 border-top">
                    <p className="card-text text-secondary mb-0">
                        <img src='/assets/humidity.png' alt='humidity' className='img-fluid me-2' style={{maxWidth:'50px'}}/>
                        {weather.main.humidity}%
                    </p>
                    <p className="card-text text-secondary mb-0">
                    <img src='/assets/wind.png' alt='wind speed' className='img-fluid me-2' style={{maxWidth:'50px'}}/>
                        {weather.wind.speed} m/s</p>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;