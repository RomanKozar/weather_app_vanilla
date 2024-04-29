import React from "react";
import logo from "../../assets/images/logo.png";
import "../../css/style.css";

function Header() {
  return (
    <div>
      <div href="#" className="logo">
        <img src={logo} width={364} height={58} alt="logo" />
      </div>
      <div className="search-view" data-search-view>
        <div className="search-wrapper">
          <input
            type="search"
            name="search"
            placeholder="Search city..."
            autocomplete="off"
            className="search-field"
            data-search-field
          />
          <span className="m-icon"></span>
        </div>
        <button
          className="icon-btn leading-icon has-state"
          aria-label="close search"
          data-search-toggler
        >
          <span className="m-icon">arrow_back</span>
        </button>
      </div>
    </div>
  );
}

export default Header;
