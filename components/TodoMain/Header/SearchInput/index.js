import React, {useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import CustomInput from "../../../Custom/CustomInput"
const onSearch = (value) => console.log(value);
import {Form,Input} from "antd";
import {useCollection} from "../../../../Hooks/useCollection";
import {collection, onSnapshot} from "firebase/firestore";
import {db} from "../../../../firebase/config";
import styles from  "../../TodoMain.module.css"

const SearchComp =  ({handleChange}) => {

    return(
        <Form.Item
            className={styles.searchFormItem}
            name="Search"
            rules={[
                {
                    required: true
                }]}>
            < Input
                   className={styles.searchInput}
                     placeholder={"Search"}
                     onChange={(e)=>handleChange(e.target.value) }
            />
        </Form.Item>
)

}

export default SearchComp;