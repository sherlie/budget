import { makeAutoObservable } from "mobx";
import type { Category } from "../types";

const mockBudgetCategories: Category[] = [
  { name: "Food", amount: 200 },
  { name: "House", amount: 600 },
  { name: "Leisure", amount: 150 },
];

export class CategoriesStore {
    private _categories: Category[] = mockBudgetCategories;

    public constructor() {
        makeAutoObservable(this);
    }

    public get categories(): Category[] {
        console.log(this._categories);
        return this._categories;
    }

    public addNewCategory(name: string): void {
        console.log(this._categories);
        this._categories.push({ name: name, amount: 0} satisfies Category);
    }
}
