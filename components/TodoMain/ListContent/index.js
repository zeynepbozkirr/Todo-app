import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { useCollection } from "../../../Hooks/useCollection";
import { doc, deleteDoc, updateDoc } from "@firebase/firestore";
import { db } from "../../../firebase/config";
import { Button, Col, Popconfirm, Row, Tooltip } from "antd";
import styles from "../TodoMain.module.css";
import DeleteIcon from "../../../public/deleteIcon.svg";
import UpdateIcon from "../../../public/updateIcon.svg";
import { Typography } from "antd";

const { Text } = Typography;

const ListContent = ({ setGetId, searchData, InputFill }) => {
  const text = "\n";
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
  console.log(`aa${text}aa `, "aa");

  return (
    <Row justify="center" align="top" className={styles.container}>
      <ul className={styles.listContentList}>
        {searchData?.map((todo) => (
          <Col
            className={styles.listContentListElement}
            style={{
              border:
                todo.status === "urgent"
                  ? "3px solid #F37878"
                  : todo.status === "normal"
                  ? "3px solid #94B49F"
                  : todo.status === "easy"
                  ? "3px solid #F5F0BB"
                  : null,
            }}
          >
            <Tooltip
              placement="topLeft"
              title={`Your Todo : ${todo.title} 
                       Detail : ${todo.content}`}
              color="rgba(255, 222, 222, 0.3)"
              overlayInnerStyle={{
                width: "150%",
                height: "50% ",
                whiteSpace: "pre-line",
              }}
              mouseEnterDelay={0.5}
            >
              <li className={styles.listContentListElementli} key={todo.id}>
                <Col className={styles.listText}>
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
                  <Popconfirm
                    placement="top"
                    onConfirm={() => handleClick(todo.id)}
                    okText={"Yes"}
                    cancelText={"No"}
                    icon={null}
                    okType={"danger"}
                    overlayInnerStyle={{
                      // height: "50px",
                      background: "rgba(255, 222, 222, 0.4)",
                      borderRadius: "10px",
                      paddingBottom: "10px",
                    }}
                  >
                    <DeleteIcon className={styles.deleteIcon} />
                  </Popconfirm>

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
