import React, {useState} from 'react';
import 'antd/dist/antd.css';
import {Form, Input, Space, Row, Col, Button} from 'antd';
import {PlusOutlined} from "@ant-design/icons";

const OpenFormButton = ({onClickButton,icons,types,htmlTypes,shapes,texts}) =>{
    return(
        <div>
            <Button type={types? types :"primary"}
                    htmlType={htmlTypes ? htmlTypes:"button"}
                    shape={shapes }
                    icon={icons}
                    onClick={onClickButton}
            >
                {texts}
            </Button>


        </div>
    )

}

export default OpenFormButton;