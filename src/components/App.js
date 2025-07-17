import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";
import Filter from "./Filter";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function onDarkModeClick() {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={onDarkModeClick} />
      <Filter selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
      <ShoppingList items={itemData} selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
