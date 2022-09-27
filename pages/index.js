import TodoMainComponent from "../components/TodoMain";
import { Row } from "antd";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Row justify="center" align="top" className={styles.TodoPages}>
      <TodoMainComponent />
    </Row>
  );
}
