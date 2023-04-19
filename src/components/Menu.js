import React from "react";

function Menu({ toggleDarkMode, darkMode }) {
  return (
    <div className="menu item">
      <div className="ui toggle checkbox">
        <input
          type="checkbox"
          name="public"
          checked={false}
          onChange={() => toggleDarkMode()}
        />
        <label>{darkMode ? "Toggle Light Mode" : "Toggle Dark Mode" }</label>
      </div>
    </div>
  );
}

export default Menu;
