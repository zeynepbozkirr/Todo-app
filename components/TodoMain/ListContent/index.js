import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import StoreProvider from "../../../utils/store-provider";
import { useCollection } from "../../../Hooks/useCollection";
import { doc, deleteDoc, updateDoc } from "@firebase/firestore";
import { db } from "../../../firebase/config";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
const TodoStore = StoreProvider.getStore("TodoStore");
import {
  Button,
  Checkbox,
  Col,
  Alert,
  Row,
  Tooltip,
  Modal,
  notification,
} from "antd";
import styles from "../TodoMain.module.css";
import DeleteIcon from "../../../public/deleteIcon.svg";
import UpdateIcon from "../../../public/updateIcon.svg";

import { Typography } from "antd";

const { Paragraph, Text } = Typography;

const ListContent = ({ setGetId, searchData, InputFill }) => {
  const { documents: todos } = useCollection("todos");

  const handleClick = async (id) => {
    const ref = doc(db, "todos", id);
    await deleteDoc(ref);
  };

  const CheckOnChange = async (e, id) => {
    const ref = doc(db, "todos", id);

    await updateDoc(ref, {
      start: e,
    });
  };
  console.log(todos);

  const handleUpdate = (id) => {
    setGetId(id);
    InputFill(id);
  };
  const onclickk = () => {
    console.log("tıklandı");
  };

  return (
    <Row justify="center" align="top" className={styles.container}>
      <ul className={styles.listContentList}>
        {searchData?.map((todo) => (
          <Col className={styles.listContentListElement}>
            <Tooltip
              title={`Your Todo: ${todo.title}   
              Detail: ${todo.content}`}
              color={"#936286"}
            >
              <li className={styles.listContentListElementli} key={todo.id}>
                <Col>
                  <Checkbox
                    className={styles.checkbox}
                    onChange={(e) => CheckOnChange(e.target.checked, todo.id)}
                  ></Checkbox>
                </Col>
                <Col className={styles.listText}>
                  <Text className={styles.listTitleText}>{todo.title} </Text>
                  <Paragraph className={styles.listContentText}>
                    {todo.content}
                  </Paragraph>
                </Col>
                <Col className={styles.Icons}>
                  <DeleteIcon
                    className={styles.deleteIcon}
                    onClick={() => handleClick(todo.id)}
                  />
                  <UpdateIcon
                    className={styles.updateIcon}
                    onClick={() => handleUpdate(todo.id)}
                  />
                </Col>
              </li>
            </Tooltip>
          </Col>
        ))}
      </ul>
    </Row>
  );
};

export default ListContent;
