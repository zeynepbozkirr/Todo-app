import React, {useState} from 'react';
import 'antd/dist/antd.css';
import {Form, Input, Space, Row, Col, Button} from 'antd';
import {PlusOutlined} from "@ant-design/icons";
import styles from "../../TodoMain/TodoMain.module.css";
import {  Typography } from 'antd';

const { Paragraph } = Typography;
const OpenFormButton = ({onClickButton,icons,types,htmlTypes,shapes,texts}) =>{


    return(
            <Button

                   className={styles.addButton}
                    type={types? types :"primary"}
                    htmlType={htmlTypes ? htmlTypes:"button"}
                    shape={shapes }
                    icon={icons}
                    onClick={onClickButton}

            >
                <Paragraph  className={styles.addButtonParagraph}
                >
                    {texts}
                </Paragraph>


            </Button>


    )

}

export default OpenFormButton;