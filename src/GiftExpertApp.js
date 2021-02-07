import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

export const GiftExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>Expert Gift</h2>
      <AddCategory setCategories={setCategories} />
      <hr></hr>

      <ol>
        {categories.map((category) => (
          <GiftGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
