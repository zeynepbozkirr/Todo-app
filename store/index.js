import StoreProvider from '../utils/store-provider';
import TodoStore from './todo.store';
import UserStore from "./user.store";


export const stores = {
    TodoStore,
    UserStore,
};

Object.keys(stores).forEach((store) => {
    StoreProvider.addStore(store, stores[store]);
});
