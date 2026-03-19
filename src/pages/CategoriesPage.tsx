import type { FC } from "react";

const mockBudgetCategories = [
  { name: "Food", amount: 200 },
  { name: "House", amount: 600 },
  { name: "Leisure", amount: 150 },
]

const CategoriesPage: FC = () => {
  return (
    <>
      <h1>Categories</h1>
      {mockBudgetCategories.map(category => 
        <div
            style={{
            padding: "1em",
            margin: "0.3em",
            borderRadius: "1em",
            backgroundColor: "#b0acac",
          }}
        >
          {category.name} {category.amount}
        </div>
      )}
    </>
  );
};

export default CategoriesPage;
