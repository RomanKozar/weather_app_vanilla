import React from "react";
import logo from "../../assets/images/logo.png";
import weather_icon from "../../assets/images/weather_icons/01d.png";
import month from "../../assets/images/weather_icons/01n.png";
import direc from "../../assets/images/weather_icons/direction.png";
import openweather from "../../assets/images/openweather.png";
import "../../css/style.css";

function Header() {
  return (
    <div>
      <div className="header">
        <div className="container">
          <div href="#" className="logo">
            <img src={logo} width={364} height={58} alt="logo" />
          </div>
          <div className="search-view" data-search-view>
            <div className="search-wrapper">
              <input
                type="search"
                name="search"
                placeholder="Search city..."
                autoComplete="off"
                className="search-field"
                data-search-field
              />
              <span className="m-icon">search</span>
              <button
                className="icon-btn leading-icon has-state"
                aria-label="close search"
                data-search-toggler
              >
                <span className="m-icon">arrow_back</span>
              </button>
            </div>

            <div className="search-result" data-search-result>
              <div className="view-list" data-search-list>
                <li className="view-item">
                  <span className="m-icon">location_on</span>
                  <div>
                    <p className="item-title">London</p>
                    <p className="Label-2 item-subtitle">State of London, GB</p>
                  </div>
                  <div
                    href="#"
                    className="item-link has-state"
                    data-search-toggler
                  ></div>
                </li>
              </div>
            </div>
          </div>

          <div className="header-actions">
            <button
              className="icon-btn has-state"
              aria-label="open search"
              data-search-toggler
            >
              <span className="m-icon icon">search</span>
            </button>
            <a
              href="#/current-location"
              className="btn-primary has-state"
              data-current-location-btn
            >
              <span className="m-icon">my_location</span>

              <span className="span">Current Location</span>
            </a>
          </div>
        </div>
      </div>

      <main>
        <article className="container">
          <div className="content-left">
            <section
              className="section current-weather"
              aria-label="current weather"
              data-current-weather
            >
              <div className="card card-lg current-weather-card">
                <h2 className="title-2 card-title">Now</h2>
                <div className="weapper">
                  <p className="heading">
                    25&deg;<sup>c</sup>
                  </p>
                  <img
                    src={weather_icon}
                    width={64}
                    height={64}
                    alt="Overvast Clouds"
                    className="weather-icon"
                  />
                </div>

                <p className="body-3">Overcast Clouds</p>
                <div className="meta-list">
                  <li className="meta-item">
                    <span className="m-icon">calendar_today</span>

                    <p className="title-3 meta-text">Thursday 16, Feb</p>
                  </li>

                  <li className="meta-item">
                    <span className="m-icon">location_on</span>

                    <p className="title-3 meta-text">London, GB</p>
                  </li>
                </div>
              </div>
            </section>

            <section
              className="section forecast"
              aria-labelledby="forecast-label"
              data-5-day-forecast
            >
              <h2 className="title-2" id="forecast-label">
                5 Days Forecast
              </h2>
              <div className="card card-lg forecast-card">
                <div>
                  <li className="card-item">
                    <div className="icon-wrapper">
                      <img
                        src={month}
                        width={36}
                        height={36}
                        alt="Overcast Clouds"
                        className="weather-icon"
                      />
                      <span className="span">
                        <p className="title-2">25</p>
                      </span>
                    </div>

                    <p className="label-1">17 Feb</p>
                    <p className="label-1">Friday</p>
                  </li>
                  <li className="card-item">
                    <div className="icon-wrapper">
                      <img
                        src={month}
                        width={36}
                        height={36}
                        alt="Overcast Clouds"
                        className="weather-icon"
                      />
                      <span className="span">
                        <p className="title-2">25</p>
                      </span>
                    </div>

                    <p className="label-1">17 Feb</p>
                    <p className="label-1">Friday</p>
                  </li>
                  <li className="card-item">
                    <div className="icon-wrapper">
                      <img
                        src={month}
                        width={36}
                        height={36}
                        alt="Overcast Clouds"
                        className="weather-icon"
                      />
                      <span className="span">
                        <p className="title-2">25</p>
                      </span>
                    </div>

                    <p className="label-1">17 Feb</p>
                    <p className="label-1">Friday</p>
                  </li>
                  <li className="card-item">
                    <div className="icon-wrapper">
                      <img
                        src={month}
                        width={36}
                        height={36}
                        alt="Overcast Clouds"
                        className="weather-icon"
                      />
                      <span className="span">
                        <p className="title-2">25</p>
                      </span>
                    </div>

                    <p className="label-1">17 Feb</p>
                    <p className="label-1">Friday</p>
                  </li>
                  <li className="card-item">
                    <div className="icon-wrapper">
                      <img
                        src={month}
                        width={36}
                        height={36}
                        alt="Overcast Clouds"
                        className="weather-icon"
                      />
                      <span className="span">
                        <p className="title-2">25</p>
                      </span>
                    </div>

                    <p className="label-1">17 Feb</p>
                    <p className="label-1">Friday</p>
                  </li>
                </div>
              </div>
            </section>
          </div>

          <div className="content-right">
            <section
              className="section highlights"
              aria-labelledby="highlights-label"
              data-highlights
            >
              <div className="card card-lg">
                <h2 className="title-2" id="highlights-label">
                  Todays Highlights
                </h2>

                <div className="highlight-list">
                  <div className="card card-sm highlight-card one">
                    <h3 className="title-3">Air Quality Index</h3>
                    <div className="wrapper">
                      <span className="m-icon">air</span>

                      <div className="card-list">
                        <li className="card-item">
                          <p className="title-1">23.3</p>
                          <p className="label-1">
                            PM <sub>2.5</sub>
                          </p>
                        </li>
                        <li className="card-item">
                          <p className="title-1">23.3</p>
                          <p className="label-1">
                            PM <sub>2.5</sub>
                          </p>
                        </li>
                        <li className="card-item">
                          <p className="title-1">23.3</p>
                          <p className="label-1">
                            PM <sub>2.5</sub>
                          </p>
                        </li>
                        <li className="card-item">
                          <p className="title-1">23.3</p>
                          <p className="label-1">
                            PM <sub>2.5</sub>
                          </p>
                        </li>
                      </div>
                    </div>

                    <span className="badge aqi-1 label-1" title="aqi message">
                      Good
                    </span>
                  </div>

                  <div className="card card-sm highlight-card two">
                    <h3 className="title-3">Sunrise & Sunset</h3>
                    <div className="card-list">
                      <div className="card-item">
                        <span className="m-icon">clear_day</span>
                        <div>
                          <p className="label-1">Sunrise</p>
                          <p className="title-1">6:30 AM</p>
                        </div>
                      </div>
                      <div className="card-item">
                        <span className="m-icon">clear_night</span>
                        <div>
                          <p className="label-1">Sunset</p>
                          <p className="title-1">5:54 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card card-sm highlight-card">
                    <h3 className="title-3">Humidity</h3>
                    <div className="wrapper">
                      <span className="m-icon">humidity_percentage</span>
                      <p className="title-1">
                        35<sub>%</sub>
                      </p>
                    </div>
                  </div>

                  <div className="card card-sm highlight-card">
                    <h3 className="title-3">Pressure</h3>
                    <div className="wrapper">
                      <span className="m-icon">airwave</span>
                      <p className="title-1">
                        1052<sub>hPa</sub>
                      </p>
                    </div>
                  </div>

                  <div className="card card-sm highlight-card">
                    <h3 className="title-3">Visibility</h3>
                    <div className="wrapper">
                      <span className="m-icon">visibillity</span>
                      <p className="title-1">
                        10<sub>km</sub>
                      </p>
                    </div>
                  </div>

                  <div className="card card-sm highlight-card">
                    <h3 className="title-3">Feels Like</h3>
                    <div className="wrapper">
                      <span className="m-icon">thermostat</span>
                      <p className="title-1">
                        25&deg;<sup>c</sup>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div
              className="section hourly-forecast"
              aria-label="hourly forecast"
              data-hourly-forecast
            >
              <h2 className="title-2">Today at</h2>
              <div className="slider-container">
                <div className="slider-list" data-temp>
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">03 PM</p>
                      <img
                        src={month}
                        width={48}
                        height={48}
                        loading="lazy"
                        alt=""
                        className="weather-icon"
                        title=""
                      />
                      <p className="body-3">25&deg;</p>
                    </div>
                  </li>
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">03 PM</p>
                      <img
                        src={month}
                        width={48}
                        height={48}
                        loading="lazy"
                        alt=""
                        className="weather-icon"
                        title=""
                      />
                      <p className="body-3">25&deg;</p>
                    </div>
                  </li>
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">03 PM</p>
                      <img
                        src={month}
                        width={48}
                        height={48}
                        loading="lazy"
                        alt=""
                        className="weather-icon"
                        title=""
                      />
                      <p className="body-3">25&deg;</p>
                    </div>
                  </li>
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">03 PM</p>
                      <img
                        src={month}
                        width={48}
                        height={48}
                        loading="lazy"
                        alt=""
                        className="weather-icon"
                        title=""
                      />
                      <p className="body-3">25&deg;</p>
                    </div>
                  </li>
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">03 PM</p>
                      <img
                        src={month}
                        width={48}
                        height={48}
                        loading="lazy"
                        alt=""
                        className="weather-icon"
                        title=""
                      />
                      <p className="body-3">25&deg;</p>
                    </div>
                  </li>
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">03 PM</p>
                      <img
                        src={month}
                        width={48}
                        height={48}
                        loading="lazy"
                        alt=""
                        className="weather-icon"
                        title=""
                      />
                      <p className="body-3">25&deg;</p>
                    </div>
                  </li>
                </div>

                <div className="slider-list" data-wind>
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">03 PM</p>
                      <img
                        src={direc}
                        width={48}
                        height={48}
                        loading="lazy"
                        alt=""
                        className="weather-icon"
                        title=""
                      />
                      <p className="body-3">12 km/h;</p>
                    </div>
                  </li>
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">03 PM</p>
                      <img
                        src={direc}
                        width={48}
                        height={48}
                        loading="lazy"
                        alt=""
                        className="weather-icon"
                        title=""
                      />
                      <p className="body-3">12 km/h;</p>
                    </div>
                  </li>
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">03 PM</p>
                      <img
                        src={direc}
                        width={48}
                        height={48}
                        loading="lazy"
                        alt=""
                        className="weather-icon"
                        title=""
                      />
                      <p className="body-3">12 km/h;</p>
                    </div>
                  </li>
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">03 PM</p>
                      <img
                        src={direc}
                        width={48}
                        height={48}
                        loading="lazy"
                        alt=""
                        className="weather-icon"
                        title=""
                      />
                      <p className="body-3">12 km/h;</p>
                    </div>
                  </li>
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">03 PM</p>
                      <img
                        src={direc}
                        width={48}
                        height={48}
                        loading="lazy"
                        alt=""
                        className="weather-icon"
                        title=""
                      />
                      <p className="body-3">12 km/h;</p>
                    </div>
                  </li>
                  <li className="slider-item">
                    <div className="card card-sm slider-card">
                      <p className="body-3">03 PM</p>
                      <img
                        src={direc}
                        width={48}
                        height={48}
                        loading="lazy"
                        alt=""
                        className="weather-icon"
                        title=""
                      />
                      <p className="body-3">12 km/h;</p>
                    </div>
                  </li>
                </div>
              </div>
            </div>

            <footer className="footer">
              <p className="body-3">
                Copyright 2023 codewithsadee. All Rights Reserved.
              </p>
              <p className="body-3">
                Powered By{" "}
                <a
                  href="https://openweathermap.org/api"
                  title="Free OpenWeather Api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={openweather}
                    width={150}
                    height={30}
                    loading="lazy"
                    alt="OpenWeather"
                  />
                </a>
              </p>
            </footer>
          </div>

          <div className="loading" data-loading></div>
        </article>
      </main>

      <section className="error-content" data-error-content>
        <h2 className="heading">404</h2>
        <p className="body-1">Page not found!</p>
        <div href="#" className="btn-primary">
          <span className="span">Go Home</span>
        </div>
      </section>
    </div>
  );
}

export default Header;
