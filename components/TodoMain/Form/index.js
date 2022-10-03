import React, { createRef, useEffect } from "react";
import "antd/dist/antd.css";
import { Form, Col, Radio, Button, Input, Row } from "antd";
import { addDoc, updateDoc, doc, collection } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { useCollection } from "../../../Hooks/useCollection";
import styles from "../TodoMain.module.css";
import { Typography } from "antd";

const { Paragraph } = Typography;

const FormComp = ({ editId, fillInputValue }) => {
  useEffect(() => {
    if (editId) {
      form.setFieldsValue({
        Title: fillInputValue?.title,
        Content: fillInputValue?.content,
      });
    }
  }, [editId]);
  const [form] = Form.useForm();
  const formRef = createRef();

  const { documents: todos } = useCollection("todos");

  const onFinish = async (values) => {
    formRef.current.resetFields();
    if (editId) {
      const ref = doc(db, "todos", editId);

      await updateDoc(ref, {
        title: values.Title,
        content: values.Content,
        status: values.Status,
      });
    } else {
      const ref = collection(db, "todos");
      await addDoc(ref, {
        title: values.Title,
        content: values.Content,
        status: values.Status,
      });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row justify="center" className={styles.formContainer}>
      <Form
        className={styles.form}
        ref={formRef}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
      >
        <Col className={styles.formColInput}>
          <Form.Item className={styles.formItemTitle}>Title</Form.Item>
          <Form.Item
            name="Title"
            rules={[
              {
                required: true,
                message: "Please input Title! ",
              },
            ]}
          >
            <Input className={styles.formInputTitle} />
          </Form.Item>
        </Col>

        <Col className={styles.formColInput}>
          <Form.Item className={styles.formItemContent}>Detail</Form.Item>
          <Form.Item
            name="Content"
            rules={[
              {
                required: true,
                message: "Please input Content!",
              },
            ]}
          >
            <Input className={styles.formInputContent} />
          </Form.Item>
        </Col>

        <Col className={styles.formCol}>
          <Form.Item
            rules={[
              {
                required: true,
                message: "Please choose!",
              },
            ]}
            name="Status"
            className={styles.formItem}
          >
            <Radio.Group className={styles.formRadio}>
              <Radio className={styles.formRadio1} value="urgent">
                Urgent
              </Radio>
              <Radio className={styles.formRadio1} value="normal">
                Normal
              </Radio>
              <Radio className={styles.formRadio1} value="easy">
                Easy
              </Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col className={styles.formItemButton}>
          <Form.Item noStyle={true} className={styles.formItemButton}>
            <Button
              className={styles.formButton}
              htmlType="submit"
              texts="submit"
            >
              <Paragraph className={styles.formButtonParagraph}>
                SUBMIT
              </Paragraph>
            </Button>
          </Form.Item>
        </Col>
      </Form>
    </Row>
  );
};

export default FormComp;
