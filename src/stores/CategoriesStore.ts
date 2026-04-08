import { makeAutoObservable } from "mobx";
import type { Category } from "../types";

const mockBudgetCategories: Category[] = [
  { id: 0, name: "Food", amount: 200 },
  { id: 1, name: "House", amount: 600 },
  { id: 2, name: "Leisure", amount: 150 },
];

let mockCurrentId = 3;

export class CategoriesStore {
    private _categories: Category[] = mockBudgetCategories;

    public constructor() {
        makeAutoObservable(this);
    }

    public get categories(): Category[] {
        return this._categories;
    }

    public addNewCategory(name: string): void {
        this._categories.push({ name: name, amount: 0, id: mockCurrentId++} satisfies Category);
    }
}
