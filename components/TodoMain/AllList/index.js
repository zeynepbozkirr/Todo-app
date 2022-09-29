import React, { useEffect, useState } from "react";
import { Button, Select, Row, Col, Radio, Tooltip, Modal } from "antd";
import styles from "../TodoMain.module.css";
import { observer } from "mobx-react-lite";
import { Typography } from "antd";
const { Paragraph } = Typography;

const AllList = ({ fillInputValue }) => {
  console.log(fillInputValue, "jjj");
  return (
    <Row>
      <div> {fillInputValue.title}</div>
    </Row>
  );
};
export default AllList;
