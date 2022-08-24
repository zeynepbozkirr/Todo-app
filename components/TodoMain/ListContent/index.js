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
                {todos?.map(todo => (

                        <li className={styles.listContentListElement} key={todo.id}>
                            <Checkbox  className={styles.checkbox}
                                       onChange={() => CheckOnChange(todo.id)}></Checkbox>
                            <div className={styles.titletext}> {todo.title} </div>
                            <div  className={styles.Icons}>

                                <DeleteOutlined  className={styles.deleteOutlined}onClick={() => handleClick(todo.id)}/>
                                <EditOutlined  className={styles.checkbox}
                                    onClick={() => handleUpdate(todo.id)}/>

                            </div>
                    </li>


                ))}

            </ul>

        </div>
    )
}

export default ListContent;
