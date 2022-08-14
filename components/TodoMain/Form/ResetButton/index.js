import React from 'react';
import 'antd/dist/antd.css';
import {Form, Input, Space, Row, Col, Button} from 'antd';
import {PlusOutlined} from "@ant-design/icons";

const { Search } = Input;
const onSearch = (value) => console.log(value);


const ResetButton = () => {
    const [form] = Form.useForm();


    const onReset = () => {
        form.resetFields();
        console.log("tetiklendi")
    };


    return(
            <Form.Item >
                <Button htmlType="button" onClick={onReset} >
                    Reset
                </Button>
            </Form.Item>

        )



}



export default ResetButton;