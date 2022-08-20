import React ,{useState,createRef } from "react";
import "antd/dist/antd.css";
import {Form, Select, Col,Radio, Button,Input} from "antd";
import CustomInput from "../../Custom/CustomInput";
import CustomButton from "../../Custom/CustomButton";
import {values} from "mobx";
import {addDoc,updateDoc,doc, collection} from "firebase/firestore";
import {db} from "../../../firebase/config";
import {useCollection} from "../../../Hooks/useCollection";
import ListContent from "../ListContent";

const FormComp = () => {
    const [form] = Form.useForm();
    const formRef = createRef();
    const {documents:todos}=useCollection('todos');
    const [sendValues,setSendValues]=useState()


    const onFinish = async (values,id) => {
        formRef.current.resetFields();
        if(todos?.hasOwnProperty("id")){
            const ref=doc(db,'todos',todos.id);
            const newTodo={title: values.Title,
                content: values.Content,
                status: values.Status
            }
            updateDoc(ref,newTodo)
        }
        else {
            const ref = collection(db, "todos")
            await addDoc(ref, {
                title: values.Title,
                content: values.Content,
                status: values.Status
            })
        }

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
