import React, {useState} from 'react';
import 'antd/dist/antd.css';
import {Form, Input, Space, Row, Col, Button} from 'antd';
import {PlusOutlined} from "@ant-design/icons";
import CustomButton from "../../../Custom/CustomButton";

const OpenFormButton = ({onClickButton}) =>{
    return(
        <div>
            < CustomButton
                icons={<PlusOutlined />}
                onClickButton={onClickButton}
                shapes={"circle"}
            />
</div>
    )

}

export default OpenFormButton;