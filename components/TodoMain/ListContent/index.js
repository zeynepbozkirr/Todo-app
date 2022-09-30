import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { useCollection } from "../../../Hooks/useCollection";
import { doc, deleteDoc, updateDoc } from "@firebase/firestore";
import { db } from "../../../firebase/config";
import { Col, Row, Tooltip } from "antd";
import styles from "../TodoMain.module.css";
import DeleteIcon from "../../../public/deleteIcon.svg";
import UpdateIcon from "../../../public/updateIcon.svg";
import { Typography } from "antd";

const { Text } = Typography;

const ListContent = ({ setGetId, searchData, InputFill }) => {
  const handleClick = async (id) => {
    const ref = doc(db, "todos", id);
    await deleteDoc(ref);
  };

  const CheckOnChange = async (e, id) => {
    const ref = doc(db, "todos", id);
    await updateDoc(ref, {
      do: e,
    });
  };

  const handleUpdate = (id) => {
    setGetId(id);
    InputFill(id);
  };

  return (
    <Row justify="center" align="top" className={styles.container}>
      <ul className={styles.listContentList}>
        {searchData?.map((todo) => (
          <Col
            className={styles.listContentListElement}
            style={{
              border:
                todo.status === "urgent"
                  ? "3px solid rgba(76, 0, 51, 1)"
                  : todo.status === "normal"
                  ? "3px solid rgba(121, 2, 82, 1)"
                  : todo.status === "easy"
                  ? "3px solid rgba(175, 1, 113, 1)"
                  : null,
            }}
          >
            <Tooltip
              title={`Your Todo: ${todo.title} 
              Detail: ${todo.content}`}
              color={"#936286"}
            >
              <li className={styles.listContentListElementli} key={todo.id}>
                <Col>
                  <label className={styles.listText}>
                    <input
                      type="checkbox"
                      className={styles.listCheckbox}
                      checked={todo.do}
                      onChange={(e) => CheckOnChange(e.target.checked, todo.id)}
                    ></input>
                    <div className={styles.listIcon}></div>
                    <Text className={styles.listTitleText}>{todo.title}</Text>
                  </label>
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
