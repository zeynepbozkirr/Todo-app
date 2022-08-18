import {db} from '../firebase/config'
import { collection,onSnapshot } from 'firebase/firestore'
import { action, makeAutoObservable, runInAction } from "mobx";

class TodoStore {
    todo=12;
    firebaseDoc=[]

    constructor() {
        makeAutoObservable(this);
    }


}

export default new TodoStore();