import React from "react";
import "./firstPageStyles.scss";
import { Group, ServiceIcon, Arrow } from "../../assets/icons/icons";
import { Button } from "antd";

const FirstPage = ({ page }) => {
  return (
    <div className="first-page">
      <div className="site-layout__body">
        <Button className="site-layout__body-items">
          <div className="body-item-meaning">
            <Group />
            <span>Савдо реестери</span>
          </div>
          <Arrow />
        </Button>
      </div>
    </div>
  );
};

export default FirstPage;
