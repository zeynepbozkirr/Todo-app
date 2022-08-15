import React ,{useState} from "react";
import "antd/dist/antd.css";
import {Form, Select, Col, Button} from "antd";
import CustomInput from "../../Custom/CustomInput";
import CustomButton from "../../Custom/CustomButton";
import {values} from "mobx";


const FormComp = () => {
    const [inpValues,setInpValues]=useState({
        title:"title",
        content:"content"
    })
    const [form] = Form.useForm();

    onchange=(val)=>
    console.log(inpValues, "val")

    const onFinish = async (e) => {
        e.preventDefault()
        console.log(values,"form");
    }

    return (
        <Form form={form} name="control-hooks" onSubmit={onFinish}>
            <Form.Item

                name="Search"
                rules={[
                    {required: true
                    }
                ]}
            >
                <CustomInput inpValues={inpValues.title} placeholder={"Title"}  onchangeInput={(e)=> {
                    setInpValues((prevState) => ({
                        ...prevState,
                        title: e.target.value,
                    }));


                }} />
            </Form.Item>
            <Form.Item
                name="Search"
                rules={[
                    {required: true
                    }
                ]}
            >
                <CustomInput inpValues={inpValues.content} placeholder={"Content"} onchangeInput={(e)=> {
                    setInpValues((prevState) => ({
                        ...prevState,
                        content: e.target.value,
                    }));}}
                />
            </Form.Item>

            <Form.Item >
                <CustomButton htmlType={"submit"} texts={"Send"} />
            </Form.Item>
        </Form>
    );
};

export default FormComp;
