import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingList from "../components/ShoppingList";

const testData = [
  { id: 1, name: "Yogurt", category: "Dairy" },
  { id: 2, name: "Pomegranate", category: "Produce" },
  { id: 3, name: "Lettuce", category: "Produce" },
  { id: 4, name: "String Cheese", category: "Dairy" },
  { id: 5, name: "Cookies", category: "Dessert" },
];

test("displays all items when initially rendered with 'All' category selected", () => {
  const { container } = render(<ShoppingList items={testData} selectedCategory="All" />);
  expect(container.querySelector(".Items").children).toHaveLength(
    testData.length
  );
});

test("displays only items that match the selected category passed as prop", () => {
  const { container: containerDairy } = render(<ShoppingList items={testData} selectedCategory="Dairy" />);
  expect(containerDairy.querySelector(".Items").children).toHaveLength(2);

  const { container: containerDessert } = render(<ShoppingList items={testData} selectedCategory="Dessert" />);
  expect(containerDessert.querySelector(".Items").children).toHaveLength(1);
});
