import { makeAutoObservable } from "mobx"


class TodoStore{
    constructor() {
        makeAutoObservable(this)
    }

    addTodo(){

    }
    editTodo(){

    }

    removeTodo(){

    }
}

export default new TodoStore();