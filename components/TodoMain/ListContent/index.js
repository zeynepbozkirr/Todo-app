import React ,{useState} from "react";
import "antd/dist/antd.css";
import StoreProvider from "../../../utils/store-provider"
import {useCollection} from "../../../Hooks/useCollection";
import {doc, deleteDoc, updateDoc, collection, addDoc} from 'firebase/firestore'
import {db} from '../../../firebase/config'
import { EditOutlined,DeleteOutlined} from '@ant-design/icons';
const TodoStore = StoreProvider.getStore("TodoStore");
import {Checkbox} from "antd";
import styles from "../TodoMain.module.css"
import {values} from "mobx";
import Form from "../Form";

const ListContent = ({onClick,setGetId,searchData}) => {
    const {documents:todos }=useCollection('todos');

    const handleClick = async (id) => {
        const ref = doc(db,"todos",id)
        await deleteDoc(ref)
    }

    const CheckOnChange = async (e) => {
        // console.log(e.target.checked,"c")
        //    // const ref=collection(db,"todos" )
        //    //  await addDoc(ref,{
        //    //      star:e.target.checked
        //    //x  })

    };

    const handleUpdate = async (id) => {
        onClick();
        setGetId(id)

    }


    return(
        <div>

            <ul className={styles.listContentList}>
                {searchData? searchData.map(todo => (
                    <li className={styles.listContentListElement} key={todo.id} >
                        {todo.title} - {todo.content} - {todo.status}
                        <DeleteOutlined onClick={() => handleClick(todo.id)}/>
                        <EditOutlined onClick={() => handleUpdate(todo.id)}/>
                        <Checkbox onChange={() => CheckOnChange(todo.id)}>Checkbox</Checkbox>

                    </li>
                ))
                    :todos.map(todo => (
                        <li className={styles.listContentListElement} key={todo.id} >
                            {todo.title} - {todo.content} - {todo.status}
                            <DeleteOutlined onClick={() => handleClick(todo.id)}/>
                            <EditOutlined onClick={() => handleUpdate(todo.id)}/>
                            <Checkbox onChange={() => CheckOnChange(todo.id)}>Checkbox</Checkbox>

                        </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default ListContent;
