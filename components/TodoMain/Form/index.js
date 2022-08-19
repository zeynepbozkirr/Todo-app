import React ,{useState,createRef } from "react";
import "antd/dist/antd.css";
import {Form, Select, Col,Radio, Button,Input} from "antd";
import CustomInput from "../../Custom/CustomInput";
import CustomButton from "../../Custom/CustomButton";
import {values} from "mobx";

const FormComp = () => {
    const [form] = Form.useForm();
    const formRef = createRef();


    const onFinish = (values) => {
        console.log(values);
        formRef.current.resetFields();
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form   ref={formRef}
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
            <Form.Item
                name="Title"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item

                name="Content"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item  name="Status"
                        rules={[
                            {required: true
                            }
                        ]}>

                <Radio.Group>
                <Radio value="urgent">urgent </Radio>
                <Radio value="normal">normal </Radio>
                <Radio value="easy"> easy</Radio>
,               </Radio.Group>
            </Form.Item>

            <Form.Item>
                <Button  type="primary" htmlType="submit" texts="submit">
                    Submit
                </Button>

            </Form.Item>

        </Form>
    );
};

export default FormComp;
