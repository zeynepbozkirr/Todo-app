import {makeAutoObservable, action, runInAction, observable} from "mobx";
import {db} from '../firebase/config'
import { collection,onSnapshot } from 'firebase/firestore'

class UserStore {
    deneme = 'DENEMEMEMEMEMM'

    firebaseDoc=[]

    constructor() {
        makeAutoObservable(this,{
            deneme: observable,
            testStore: action,
            listTodo: action
        });
    }


    testStore() {
        console.log('NEDEN ÇALIŞMIYON Kİ :/')
    }



    listTodo(c){

        let ref=collection(db,c);

        const unsub=onSnapshot(ref,(snapshot)=>{
            let results=[];
            snapshot.docs.forEach(doc=>{
                results.push({id:doc.id,...doc.data()})
            })
            runInAction(() => {
                this.firebaseDoc = results;
            })
            console.log(results, this.firebaseDoc, 'asd')
        })

        return ()=>unsub()
    }
}

export default new UserStore();
