import React, {useState} from 'react';
import 'antd/dist/antd.css';
import {Form, Input, Space, Row, Col, Button} from 'antd';
import {PlusOutlined} from "@ant-design/icons";
import CustomButton from "../../../Custom/CustomButton";
import styles from "../../TodoMain.module.css"
const OpenFormButton = ({onClickButton}) =>{
    return(
            < CustomButton
                onClickButton={onClickButton}
                shapes={"circle"}
            />
)

}

export default OpenFormButton;