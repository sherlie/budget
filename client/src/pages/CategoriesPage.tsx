import { type FC } from "react";
import CategoryForm from "../components/forms/CategoryForm";
import Category from "../components/category/Category";
import { observer } from "mobx-react";
import { fetchCategories } from "../queries/fetchCategories";
import { useQuery } from "@tanstack/react-query";

const CategoriesPage: FC = observer(() => {

  function handleSumbit(newCategoryName: string) {
    // todo
    console.log("add category: ", newCategoryName)
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading categories</div>;
  if (!data) return <div>Empty!</div>

  return (
    <>
      <h1>Categories</h1>
      {data.map((category) => (
        <Category key={category.id} name={category.name} amount={category.amount} />
      ))}
      <CategoryForm onSubmit={handleSumbit} />
    </>
  );
});

export default CategoriesPage;
