import React from 'react';
import 'antd/dist/antd.css';
import { Input} from 'antd';


const CustomInput = () => (
            <Input
                placeholder="input search text"
                allowClear
                enterButton
            />

);

export default CustomInput;