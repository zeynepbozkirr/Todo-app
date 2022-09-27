import React from "react";
import "antd/dist/antd.css";

import CustomButton from "../../../Custom/CustomButton";
const OpenFormButton = ({ onClickButton }) => {
  return (
    <CustomButton
      onClickButton={onClickButton}
      shapes={"circle"}
      texts={"ADD"}
    />
  );
};

export default OpenFormButton;
