import { CategoriesStore } from "./CategoriesStore";

export class RootStore {
   categoriesStore: CategoriesStore;

    constructor() {
        this.categoriesStore = new CategoriesStore();
    }
}

export function createRootStore() {
    return new RootStore();
}