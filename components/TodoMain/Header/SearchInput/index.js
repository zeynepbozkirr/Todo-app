import React from 'react';
import 'antd/dist/antd.css';
import CustomInput from "../../../Custom/CustomInput"
const onSearch = (value) => console.log(value);
import {Form,Input} from "antd";
import {useCollection} from "../../../../Hooks/useCollection";


const SearchComp = () => {
    const {documents:todos }=useCollection('todos');

    const handleChange=(e)=>{
        console.log(todos)
        const result =[]
        result.push(todos.title.filter(({ title }) => title === e.target.value))
        console.log(result,"rrrrr")

    }




       return(
        <Form.Item
            name="Search"
            rules={[
                {
                    required: true
                }]}>
           < Input  allowClear
                          enterButton
                         placeholder={"Search"}
                          onChange={(e)=>handleChange(e) }
           />
        </Form.Item>

)

}

export default SearchComp;