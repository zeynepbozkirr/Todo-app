import React from "react";
import "antd/dist/antd.css";
import styles from "../../TodoMain.module.css";
import { Button, Typography } from "antd";
const { Paragraph } = Typography;

const OpenFormButton = ({ onClickButton }) => {
  return (
    <Button className={styles.addButton} shape="circle" onClick={onClickButton}>
      <Paragraph className={styles.addButtonParagraph}>ADD</Paragraph>
    </Button>
  );
};

export default OpenFormButton;
