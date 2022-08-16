import React, {useState} from 'react';
import FormComp from "./Form"
import {Button, Select, Row, Col} from 'antd';
import SearchInput from "./Header/SearchInput";
import OpenFormButton from "./Header/OpenFormButton";
import ListContent from "./ListContent";

const TodoMainComponent = () => {
    const [click,setClick] = useState(false)

    const onClickButton=()=>{
        setClick (!click)
        console.log(click)
    }
    return(
            <Row>
                <Col size="large">
                    <SearchInput />


                </Col>
                <Col>
                    <OpenFormButton onClickButton={()=>onClickButton()} />
                </Col>
                {
                    click &&    <Col>
                        <FormComp/>
                    </Col>

                }
                <ListContent/>



            </Row>
    )
}

export default TodoMainComponent;

