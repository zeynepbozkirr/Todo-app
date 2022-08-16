import React ,{useState} from "react";
import "antd/dist/antd.css";
import {values} from "mobx";
import { Card, List } from 'antd';

const ListContent = () => {
    const data = [
        {
            title: 'Title 1',
        },
        {
            title: 'Title 2',
        },
        {
            title: 'Title 3',
        },
        {
            title: 'Title 4',
        },
    ];


    return(
        <div>
        <List
            grid={{
                gutter: 16,
                column: 4,
            }}
            dataSource={data}
            renderItem={(x) => (
                <List.Item>
                    <Card title={x.title}>{x.title}</Card>
                </List.Item>
            )}
        />
        </div>
    )
}

export default ListContent;
