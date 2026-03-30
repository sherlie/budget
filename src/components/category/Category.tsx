import type { FC } from "react";
import { category } from "./Category.css";

interface CategoryProps {
  name: string;
  amount: number;
}

const Category: FC<CategoryProps> = ({ name, amount }) => {

  return (
    <div key={name} className={category}>
      <span>{name}</span>
      <span>{amount}</span>
    </div>
  );
};

export default Category;
