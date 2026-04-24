import { CategoriesStore } from "./CategoriesStore";

export class RootStore {
   categoriesStore: CategoriesStore;

    constructor() {
        this.categoriesStore = new CategoriesStore();
        this.categoriesStore.fetchCategories();
    }
}

export function createRootStore() {
    return new RootStore();
}