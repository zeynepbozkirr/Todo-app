import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Col, Form, Input, Radio } from "antd";
import styles from "../../TodoMain.module.css";

const SearchComp = ({ handleChange }) => {
  return (
    <Col className={styles.formItem}>
      <Form.Item
        name="Search"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          className={styles.searchInput}
          placeholder={"Search"}
          onChange={(e) => handleChange(e.target.value)}
        />
      </Form.Item>
    </Col>
  );
};

export default SearchComp;
