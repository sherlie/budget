import { useState, type FC } from "react";
import CategoryForm from "../components/forms/CategoryForm";
import Category from "../components/category/Category";

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
        <Category name={category.name} amount={category.amount} />
      ))}
      <CategoryForm onSubmit={handleSumbit} />
    </>
  );
};

export default CategoriesPage;
