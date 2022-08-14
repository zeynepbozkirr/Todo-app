import React from "react";
import "antd/dist/antd.css";
import {  Form, Select ,Col} from "antd";
import SendButton from "./SendButton";
import ResetButton from "./ResetButton";
import FormInputComp from "./FormInput";

const { Option } = Select;

const FormComp = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <Form form={form} name="control-hooks" onFinish={onFinish}>
            <FormInputComp/>
            <FormInputComp/>
            <SendButton/>
        </Form>
    );
};

export default FormComp;
