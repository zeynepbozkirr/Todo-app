import React, {useEffect, useState} from 'react';
import FormComp from "./Form"
import {Button, Select, Row, Col} from 'antd';
import styles from "./TodoMain.module.css"
import SearchInput from "./Header/SearchInput";
import OpenFormButton from "./Header/OpenFormButton";
import ListContent from "./ListContent";
import { observer } from "mobx-react-lite";
import StoreProvider from "../../utils/store-provider";
const UserStore = StoreProvider.getStore('UserStore');
const TodoStore = StoreProvider.getStore('TodoStore');



const TodoMainComponent = () => {
    const [click,setClick] = useState(false)

    const testBakalim = () => {
        UserStore.listTodo("todos");
    }


    const onClickButton=()=>{
        setClick (!click)
        console.log(click)
    }
    return(
            <div className={styles.container}>
                  <div>
                     <div className={styles.search}>
                         <SearchInput />
                    <OpenFormButton onClickButton={()=>onClickButton()} />
                  </div>

                {click &&
                    <FormComp/>
                }

              {/*<OpenFormButton onClickButton={() => testBakalim()}/>*/}
           <ListContent onclick={click}/>
                  </div>

            </div>
    )
}
export default observer(TodoMainComponent);


