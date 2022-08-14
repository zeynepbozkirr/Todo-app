import React, {useState} from 'react';
import 'antd/dist/antd.css';
import {Form, Input, Space, Row, Col, Button} from 'antd';
import {PlusOutlined} from "@ant-design/icons";

const OpenFormButton = ({onClickButton}) =>{
    return(
        <div>
            <Button type="primary"
                    htmlType="button"
                    shape="circle"
                    icon={<PlusOutlined />}
                    onClick={onClickButton}
            >
            </Button>
</div>
    )

}

export default OpenFormButton;