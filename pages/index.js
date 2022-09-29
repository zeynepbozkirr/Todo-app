import TodoMainComponent from "../components/TodoMain";
import { Button, Modal, Row } from "antd";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";

export default function Home() {
  return (
    <Row justify="center" align="top" className={styles.TodoPages}>
      <TodoMainComponent />
    </Row>
  );
}
