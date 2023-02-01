import React from "react";

function onDarkModeClick(event) {
    setIsDarkMode(event.target.value);
  }

function Header ({isDarkMode, onDarkModeClick}) {
    return (
        <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    )
}
export default Header