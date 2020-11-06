import React from "react";
import RecipeList from "./component/RecipeList";
import "./css/app.css";

function App() {
  return <RecipeList recipes={sampleRecipe} />;
}

const sampleRecipe = [
  {
    id: 1,
    name: "Plain Chicken",
    servings: 3,
    cookTime: "1:45",
    instructions: ["Put salt on chicken", "Put chicken in oven", "Eat chicken"],
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 pound",
      },
      {
        id: 2,
        name: "Onion",
        amount: "200 gram",
      },
    ],
  },
  {
    id: 2,
    name: "Plain Pork",
    servings: 2,
    cookTime: "2:30",
    instructions: ["Put salt on pork", "Put pork in oven", "Eat pork"],
    ingredients: [
      {
        id: 1,
        name: "Pork",
        amount: "2.5 pound",
      },
      {
        id: 2,
        name: "Onion",
        amount: "200 gram",
      },
      {
        id: 3,
        name: "Salt",
        amount: "2 tea spoon",
      },
    ],
  },
];

export default App;