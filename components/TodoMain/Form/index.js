import React ,{useState} from "react";
import "antd/dist/antd.css";
import {Form, Select, Col,Radio, Button} from "antd";
import CustomInput from "../../Custom/CustomInput";
import CustomButton from "../../Custom/CustomButton";
import {values} from "mobx";

const FormComp = () => {
    const [inpValues,setInpValues]=useState({
        title:"title",
        content:"content",
        status:"urgent normal easy"

    })
    const [form] = Form.useForm();

            console.log(inpValues, "val")

    const onFinish = async (e) => {
        console.log(inpValues,"form");
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form   name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                    Title:inpValues.title,
                    Content:inpValues.content,
                    Status:inpValues.status
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off">
            <Form.Item

                name="Title"
                rules={[
                    {required: true
                    }
                ]}
            >
                <CustomInput name={"Title"} inpValues={inpValues.title} placeholder={"Title"}  onchangeInput={(e)=> {
                    setInpValues((prevState) => ({
                        ...prevState,
                        title: e.target.value,
                    }));


                }} />
            </Form.Item>
            <Form.Item
                name="Content"
                rules={[
                    {required: true
                    }
                ]}
            >
                 <CustomInput name={"Content"} inpValues={inpValues.content} placeholder={"Content"}
                             onchangeInput={(e)=> {

                               setInpValues((prevState) => ({
                                    ...prevState,
                                   content: e.target.value,
                    }));}}
                />
            </Form.Item>


            <Form.Item  name="Status"
                        rules={[
                            {required: true
                            }
                        ]}>
            <Radio.Group onChange={(e)=> {
                setInpValues((prevState) => ({
                    ...prevState,
                    status: e.target.value,
                }));}} >

                <Radio value={"urgent"}>urgent </Radio>
                <Radio value={"normal"}>normal </Radio>
                <Radio value={"easy"}>easy</Radio>
,            </Radio.Group>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button  type="primary" htmlType="submit" texts="submit">
                    Submit
                </Button>
            </Form.Item>

        </Form>
    );
};

export default FormComp;
