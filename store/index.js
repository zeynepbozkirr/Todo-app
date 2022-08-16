import StoreProvider from "../utils/store-provider.js";
import TodoStore from "./todo.store";

export const stores = {

    TodoStore,
};

Object.keys(stores).forEach((store) => {
    StoreProvider.addStore(store, stores[store]);
});