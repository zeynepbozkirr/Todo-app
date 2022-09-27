import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import CustomInput from "../../../Custom/CustomInput";
const onSearch = (value) => console.log(value);
import { Col, Form, Input, Radio } from "antd";
import styles from "../../TodoMain.module.css";

const SearchComp = ({ handleChange }) => {
  return (
    <Col className={styles.formItem}>
      <Input
        className={styles.searchInput}
        placeholder={"Search"}
        onChange={(e) => handleChange(e.target.value)}
      />
    </Col>
    // <Form.Item
    //   className={styles.searchFormItem}
    //   name="Search"
    //   rules={[
    //     {
    //       required: true,
    //     },
    //   ]}
    // ></Form.Item>
  );
};

export default SearchComp;
