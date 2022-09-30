import TodoMainComponent from "../components/TodoMain";
import { Row } from "antd";

export default function Home() {
  return (
    <Row justify="center" align="top">
      <TodoMainComponent />
    </Row>
  );
}
