import React, {useState} from 'react';
import FormComp from "./Form"
import {Button, Select, Row, Col} from 'antd';
import SearchInput from "./Header/SearchInput";
import OpenFormButton from "./Header/OpenFormButton";

const TodoMainComponent = () => {
    const [click,setClick] = useState(false)

    const onClickButton=()=>{
        setClick (!click)
        console.log(click)
    }
    return(
            <Row>
                <Col span={12} offset={6}>
                    <SearchInput/>
                </Col>
                <Col>
                    <OpenFormButton onClickButton={()=>onClickButton()} />
                </Col>
                {
                    click &&    <Col>
                        <FormComp/>
                    </Col>

                }

            </Row>
    )
}

export default TodoMainComponent;

