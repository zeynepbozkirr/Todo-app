import { makeAutoObservable } from "mobx"
import {useState,useEffect} from 'react'
import {db} from '../firebase/config'
import { doc,deleteDoc } from '@firebase/firestore'

import { collection,onSnapshot } from '@firebase/firestore'
import { useCollection } from '../Hooks/useCollection'


class TodoStore{
    constructor() {

        makeAutoObservable(this)
    }

    listTodo(){

    }
    addTodo(){

    }
    editTodo(){

    }

    removeTodo(){

    }
}

export default new TodoStore();




