import { type FC } from "react";
import CategoryForm from "../components/forms/CategoryForm";
import Category from "../components/category/Category";
import { observer } from "mobx-react";
import { useStore } from "../stores/storeContext";

const CategoriesPage: FC = observer(() => {

  const { categoriesStore } = useStore();

  function handleSumbit(newCategoryName: string) {
    categoriesStore.addNewCategory(newCategoryName);
  }

  return (
    <>
      <h1>Categories</h1>
      {categoriesStore.categories.map((category) => (
        <Category key={category.name} name={category.name} amount={category.amount} />
      ))}
      <CategoryForm onSubmit={handleSumbit} />
    </>
  );
});

export default CategoriesPage;
