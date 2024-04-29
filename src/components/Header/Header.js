import React from "react";
import logo from "../../assets/images/logo.png";
import weather_icon from "../../assets/images/weather_icons/01d.png";
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
          </div>
        </article>
      </main>
    </div>
  );
}

export default Header;
