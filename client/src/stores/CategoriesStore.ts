import { makeAutoObservable, runInAction } from "mobx";
import type { Category } from "../types";

let mockCurrentId = 3;

export class CategoriesStore {
    private _categories: Category[] = [];

    public constructor() {
        makeAutoObservable(this);
    }

    public fetchCategories = async () => {
      const response = await fetch('http://localhost:3000/categories');
      const categories = await response.json();
      runInAction(() => {
        this._categories = categories;
      });
    }

    public get categories(): Category[] {
        return this._categories;
    }

    public addNewCategory(name: string): void {
        this._categories.push({ name: name, amount: 0, id: mockCurrentId++} satisfies Category);
    }
}
