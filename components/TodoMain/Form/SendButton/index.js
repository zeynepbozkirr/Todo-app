import React from 'react';
import 'antd/dist/antd.css';
import {Form, Input, Space, Row, Col, Button} from 'antd';
import {PlusOutlined} from "@ant-design/icons";

const { Search } = Input;
const onSearch = (value) => console.log(value);


const SendButton = () =>{


    return(
            <Form.Item >
                <Button type="primary" htmlType="submit"  >
                    Send
                </Button>
            </Form.Item>
        )


}


export default SendButton;