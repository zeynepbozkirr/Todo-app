import React, {useEffect, useState} from "react";
import "antd/dist/antd.css";
import StoreProvider from "../../../utils/store-provider"
import {useCollection} from "../../../Hooks/useCollection";
import {doc, deleteDoc, updateDoc} from '@firebase/firestore'
import {db} from '../../../firebase/config'
import { EditOutlined,DeleteOutlined} from '@ant-design/icons';
const TodoStore = StoreProvider.getStore("TodoStore");
import {Checkbox, Input} from "antd";
import styles from "../TodoMain.module.css"
import Blur from 'react-blur'

const ListContent = ({onClick,setGetId,searchData}) => {
    const {documents:todos}=useCollection('todos');

    const handleClick = async (id) => {
        const ref = doc(db,"todos",id)
        await deleteDoc(ref)
    }

    const CheckOnChange = async (e,id) => {
        const ref=doc(db,'todos',id);

        await updateDoc (ref,{
             start: e
        })

    };
    console.log(todos)

    const handleUpdate = async (id) => {
        onClick();
        setGetId(id)
    }

    return(
        <div>


            <ul  className={styles.listContentList}>
                {searchData?.map(todo => (
                    <div className={styles.listContentListElement}>
                    <li className={styles.listContentListElementli} key={todo.id}>
                            <Checkbox  className={styles.checkbox}
                                       onChange={(e) => CheckOnChange(e.target.checked,todo.id)}></Checkbox>
                            <div className={styles.titleText}> {todo.title} </div>
                            <div  className={styles.Icons}>

                                <DeleteOutlined  className={styles.deleteOutlined}onClick={() => handleClick(todo.id)}/>
                                <EditOutlined  className={styles.checkbox}
                                    onClick={() => handleUpdate(todo.id)}/>

                            </div>
                    </li>

                    </div>
                ))}

            </ul>

        </div>
    )
}

export default ListContent;
