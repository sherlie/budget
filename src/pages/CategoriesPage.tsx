import { useState, type FC } from "react";
import CategoryForm from "../components/forms/CategoryForm";

const mockBudgetCategories = [
  { name: "Food", amount: 200 },
  { name: "House", amount: 600 },
  { name: "Leisure", amount: 150 },
];

const CategoriesPage: FC = () => {
  const [categories, setCategories] = useState(mockBudgetCategories);

  function handleSumbit(newCategoryName: string) {
    setCategories([...categories, { name: newCategoryName, amount: 0 }]);
  }
  return (
    <>
      <h1>Categories</h1>
      {categories.map((category) => (
        <div
          key={category.name}
          style={{
            padding: "1em",
            margin: "0.3em",
            borderRadius: "1em",
            backgroundColor: "#b0acac",
          }}
        >
          {category.name} {category.amount}
        </div>
      ))}
      <CategoryForm onSubmit={handleSumbit} />
    </>
  );
};

export default CategoriesPage;
