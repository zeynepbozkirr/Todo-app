import React from 'react';
import 'antd/dist/antd.css';
import { Input} from 'antd';


const CustomInput = ({placeholder,inpValues,onchangeInput}) => (
            <Input

                placeholder={placeholder}
                size="large"
                onChange={(text) => onchangeInput(text)}
            />


);

export default CustomInput;