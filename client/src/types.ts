export interface Category {
    id: number;
    name: string;
    amount: number;
}

export interface Transaction {
    id: number;
    categoryId: number;
    name?: string;
    amount: number;
}