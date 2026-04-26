import { type FC } from "react";
import CategoryForm from "../components/forms/CategoryForm";
import Category from "../components/category/Category";
import { observer } from "mobx-react";
import { useCategories } from "../queries/fetchCategories";
import { useAddCategory } from "../queries/addCategory";

const CategoriesPage: FC = observer(() => {

  const { data, isLoading, error } = useCategories();
  const addCategoryMutation = useAddCategory();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading categories</div>;
  if (!data) return <div>Empty!</div>

  const handleSubmit = (newCategoryName: string) => {
    addCategoryMutation.mutate({ name: newCategoryName, color: "#FFF"})
  }

  return (
    <>
      <h1>Categories</h1>
      {data.map((category) => (
        <Category key={category.id} name={category.name} amount={category.amount} />
      ))}
      <CategoryForm onSubmit={handleSubmit} />
    </>
  );
});

export default CategoriesPage;
