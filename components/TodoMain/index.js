import React, {useEffect, useState} from 'react';
import FormComp from "./Form"
import {Button, Select, Row, Col} from 'antd';
import styles from "./TodoMain.module.css"
import SearchInput from "./Header/SearchInput";
import OpenFormButton from "./Header/OpenFormButton";
import ListContent from "./ListContent";
import { observer } from "mobx-react-lite";
import {useCollection} from "../../Hooks/useCollection";

import StoreProvider from "../../utils/store-provider";
import StartMission from "../StarMission/StarMission";
// const UserStore = StoreProvider.getStore('UserStore');
// const TodoStore = StoreProvider.getStore('TodoStore');


const TodoMainComponent = () => {
    const [click,setClick] = useState(false);
    const [getId,setGetId] = useState();
    const [searchData, setSearchData] = useState([]);


    const {documents:todos}=useCollection('todos');

    useEffect  ( () => {
        setSearchData(todos)
    }, [todos])
    const handleChange=async(e)=>{
        const  filterSearchData=  todos?.filter((x) => x.title.toLowerCase().includes(e) ||
            x.content.toLowerCase() .includes(e))
        setSearchData(filterSearchData)
    }


    const onClickButton=()=>{
        setClick (!click)
        console.log(click)
        if(!click){
            setGetId(null)
        }

    }
    return(
        <div className={styles.container}>
            <div  >
                <div className={styles.search}>
                    <SearchInput handleChange={(e)=>handleChange(e)}/>
                    <OpenFormButton onClickButton={()=>onClickButton()} />
                </div>

                {click &&
                    <FormComp editId={getId} setFormValues={(value)=>setFormValues(value)}/>
                }

                {/*<OpenFormButton onClickButton={() => testBakalim()}/>*/}
                <ListContent onClick={() => setClick(prevState => !prevState)}
                             setGetId={(value)=>setGetId(value)}
                             searchData={searchData}
                />
                {/*<StartMission/>*/}
            </div>

        </div>
    )
}
export default observer(TodoMainComponent);


