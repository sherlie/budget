import { useState, type FC } from "react";
import { form } from "./Form.css";

type CategoryFormProps = {
  onSubmit: (name: string) => void;
};

const CategoryForm: FC<CategoryFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState<string>("");

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(name);
    setName("");
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)} className={form}>
      <input
        name="name"
        placeholder="Category name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <button type="submit">Add Category</button>
    </form>
  );
};

export default CategoryForm;
