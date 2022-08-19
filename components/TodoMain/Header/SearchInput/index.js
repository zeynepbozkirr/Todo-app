import React from 'react';
import 'antd/dist/antd.css';
import {Form, Input, Space,Row,Col} from 'antd';
import CustomInput from "../../../Custom/CustomInput"
const { Search } = Input;
const onSearch = (value) => console.log(value);


const SearchComp = () => (

        <Form.Item
            name="Search"
            rules={[
                {
                    required: true
                }]}>
           {/*< CustomInput  allowClear*/}
           {/*               enterButton*/}
           {/*              placeholder={"Search"}*/}
           {/*               onchangeInput={(e)=> {*/}
           {/*                   e.target.value()*/}
           {/*               }*/}

           {/*               }*/}
           {/*/>*/}
        </Form.Item>



);

export default SearchComp;