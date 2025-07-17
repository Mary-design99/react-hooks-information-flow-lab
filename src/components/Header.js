import React from "react";

function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {/* Button text indicates the mode it will switch to */}
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

export default Header;
