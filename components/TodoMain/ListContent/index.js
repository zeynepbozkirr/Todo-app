import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import StoreProvider from "../../../utils/store-provider";
import { useCollection } from "../../../Hooks/useCollection";
import { doc, deleteDoc, updateDoc } from "@firebase/firestore";
import { db } from "../../../firebase/config";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
const TodoStore = StoreProvider.getStore("TodoStore");
import { Checkbox, Col, Input, Row } from "antd";
import styles from "../TodoMain.module.css";
import DeleteIcon from "../../../public/deleteIcon.svg";
import UpdateIcon from "../../../public/updateIcon.svg";

import { Typography } from "antd";

const { Paragraph } = Typography;

const ListContent = ({
  fillInputValue,
  setFillInputVal,
  setGetId,
  searchData,
  getId,
  InputFill,
}) => {
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

  return (
    <Row justify="center" align="top" className={styles.container}>
      <ul className={styles.listContentList}>
        {searchData?.map((todo) => (
          <Col className={styles.listContentListElement}>
            <li className={styles.listContentListElementli} key={todo.id}>
              <Checkbox
                className={styles.checkbox}
                onChange={(e) => CheckOnChange(e.target.checked, todo.id)}
              ></Checkbox>
              <Paragraph className={styles.titleText}> {todo.title} </Paragraph>
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
          </Col>
        ))}
      </ul>
    </Row>
  );
};

export default ListContent;
