import React from "react";
import { Button } from "antd";
import { Arrow } from "../../components/functions/icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewTab } from "../../redux/tabs_reducer";

const ServicePage = ({ page }) => {
  const sections = page?.sections;

  const dispatch = useDispatch();
  const handleTab = (section) => {
    dispatch(addNewTab(section));
  };

  return (
    <div className="first-page">
      <div className="site-layout__body">
        {sections.map((section) => (
          <Link to={section.path}>
            <Button
              className="site-layout__body-items"
              onClick={() => handleTab(section)}
            >
              <div className="body-item-meaning">
                {section.icon}
                <span>{section.title}</span>
              </div>
              <Arrow />
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;

// const current_url = window.location.href.split("/")[3];
