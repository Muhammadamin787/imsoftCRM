import React from "react";
import { Button } from "antd";
import { Arrow } from "../../components/functions/icons";
import { Link } from "react-router-dom";




const ServicePage = ({ page }) => {
  const sections = page?.sections;

  return (
    <div className="first-page">
      <div className="site-layout__body">
        {
		sections.map((section) => (
      <Link to={section.path}>
        <Button className="site-layout__body-items">
          <div className="body-item-meaning">
            {section.icon}
            <span>{section.title}</span>
          </div>
          <Arrow />
        </Button>
      </Link>
        ))
		}
      </div>
    </div>
  );
};

export default ServicePage;


// const current_url = window.location.href.split("/")[3];
