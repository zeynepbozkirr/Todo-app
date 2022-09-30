import React, { useEffect, useState } from "react";
import FormComp from "./Form";
import { Row, Col } from "antd";
import styles from "./TodoMain.module.css";
import SearchInput from "./Header/SearchInput";
import OpenFormButton from "./Header/OpenFormButton";
import ListContent from "./ListContent";
import { observer } from "mobx-react-lite";
import { useCollection } from "../../Hooks/useCollection";
import { Typography } from "antd";

const { Paragraph } = Typography;

const TodoMainComponent = () => {
  const [click, setClick] = useState(false);
  const [getId, setGetId] = useState(null);
  const [searchData, setSearchData] = useState([]);
  const [fillInputValue, setFillInputVal] = useState([]);

  const { documents: todos } = useCollection("todos");

  useEffect(() => {
    setSearchData(todos);
  }, [todos]);

  const handleChange = async (e) => {
    const filterSearchData = todos?.filter(
      (x) =>
        x.title.toLowerCase().includes(e) || x.content.toLowerCase().includes(e)
    );
    setSearchData(filterSearchData);
  };

  const InputFill = (selectedId) => {
    const filterFillInputVal = searchData?.find((x) => x.id === selectedId);
    setFillInputVal(filterFillInputVal);
    setClick((prevState) => !prevState);
  };

  const onClickButton = () => {
    setClick(!click);
    console.log(click);
    if (!click) {
      setGetId(null);
    }
  };
  console.log(searchData, "serchhh");
  return (
    <Row className={styles.container}>
      <Col span={16} className={styles.headerCol}>
        <Paragraph className={styles.headerParagraph}>MY TODO</Paragraph>
        <Col className={styles.search}>
          <SearchInput handleChange={(e) => handleChange(e)} />
          <OpenFormButton onClickButton={() => onClickButton()} />
        </Col>
      </Col>
      <Col span={16} className={styles.formCol}>
        {click && <FormComp editId={getId} fillInputValue={fillInputValue} />}
      </Col>
      <Col span={16} className={styles.container}>
        {!searchData?.length == 0 ? (
          <ListContent
            setGetId={(value) => setGetId(value)}
            searchData={searchData}
            getId={getId}
            InputFill={(val) => InputFill(val)}
          />
        ) : null}
      </Col>
    </Row>
  );
};
export default observer(TodoMainComponent);
