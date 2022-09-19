import React, {useEffect, useState} from "react";
import "antd/dist/antd.css";
import {useCollection} from "../../Hooks/useCollection";

// const TodoStore = StoreProvider.getStore("TodoStore");


const StartMission = ({onClick,setGetId,searchData}) => {
    const {documents:todos}=useCollection('todos');


    return(
        <div>

            <ul >
                {todos?.map(todo => (
                    <li key={todo.id}>
                        {todo.star? null: todo.title }

                    </li>


                ))}

            </ul>

        </div>
    )
}

export default StartMission;
