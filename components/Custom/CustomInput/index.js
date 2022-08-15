import React from 'react';
import 'antd/dist/antd.css';
import { Input} from 'antd';


const CustomInput = ({placeholder,inpValues,onchangeInput}) => (
            <Input

                placeholder={placeholder}
                value={inpValues}
                size="large"
                onchange={onchangeInput}
            />


);

export default CustomInput;