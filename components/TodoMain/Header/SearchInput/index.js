import React, {useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import CustomInput from "../../../Custom/CustomInput"
const onSearch = (value) => console.log(value);
import {Form,Input} from "antd";
import {useCollection} from "../../../../Hooks/useCollection";
import {collection, onSnapshot} from "firebase/firestore";
import {db} from "../../../../firebase/config";


const SearchComp =  ({handleChange}) => {

    return(
        <Form.Item
            name="Search"
            rules={[
                {
                    required: true
                }]}>
            < Input  allowClear
                     placeholder={"Search"}
                     onChange={(e)=>handleChange(e.target.value) }
            />
        </Form.Item>

)

}

export default SearchComp;