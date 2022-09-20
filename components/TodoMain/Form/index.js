import React ,{useState,createRef } from "react";
import "antd/dist/antd.css";
import {Form, Select, Col,Radio, Button,Input} from "antd";
import {addDoc,updateDoc,doc, collection} from "firebase/firestore";
import {db} from "../../../firebase/config";
import {useCollection} from "../../../Hooks/useCollection";
import styles from "../TodoMain.module.css";
import {  Typography } from 'antd';

const { Paragraph } = Typography;
const FormComp = ({editId,setFormValues}) => {
    const [form] = Form.useForm();
    const formRef = createRef();
    const {documents:todos}=useCollection('todos');


    const onFinish = async (values) => {
        formRef.current.resetFields();
        if(editId){
            console.log("girdi")
            const ref=doc(db,'todos',editId);
            await updateDoc (ref,{
                title: values.Title,
                content: values.Content,
                status: values.Status
            })
        }
        else{
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
        <Form
            className={styles.form}
               ref={formRef}
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>

            {editId}
            <Form.Item

                name="Title"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input className={styles.searchInput}  />
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
                <Input className={styles.searchInput} />
            </Form.Item>
            <Form.Item  name="Status"
                        rules={[
                            {required: true
                            }
                        ]}>

                <Radio.Group className={styles.formRadio}>
                <Radio className={styles.formRadio1} value="urgent">urgent </Radio>
                <Radio  className={styles.formRadio1} value="normal">normal </Radio>
                <Radio className={styles.formRadio1} value="easy"> easy</Radio>
,               </Radio.Group>
            </Form.Item>

            <Form.Item className={styles.formItemButton}  >
                <Button className={styles.formButton} type="primary" htmlType="submit" texts="submit">
                    <Paragraph  className={styles.formButtonParagraph}
                    >
                        SUBMIT
                    </Paragraph>
                </Button>






            </Form.Item>

        </Form>
    );
};

export default FormComp;
