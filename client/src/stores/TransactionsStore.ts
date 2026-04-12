import { makeAutoObservable } from "mobx";
import type { Transaction } from "../types";

const mockTransactions: Transaction[] = [
  { id: 0, categoryId: 0, name: "Lunch", amount: 10 },
  { id: 1, categoryId: 0, name: "Groceries", amount: 60.3 },
  { id: 2, categoryId: 0, name: "Lunch #2", amount: 12 },
];

let mockCurrentId = 3;

export class TransactionsStore {
    private _transactions: Transaction[] = mockTransactions;

    public constructor() {
        makeAutoObservable(this);
    }

    public get transactions(): Transaction[] {
        return this._transactions;
    }

    public addNewTransaction(name: string, amount: number, categoryId: number): void {
        this._transactions.push({
            name: name,
            categoryId: categoryId,
            amount: amount,
            id: mockCurrentId++
        } satisfies Transaction);
    }
}
