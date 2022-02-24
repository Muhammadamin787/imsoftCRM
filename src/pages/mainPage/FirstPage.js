import React from "react";
import "./firstPageStyles.scss";
import {useSelector} from 'react-redux';

const FirstPage = ({ page }) => {
  const {Panes} = useSelector(state => state.tabs_reducer);

  return (
    <div className="first-page">
      <div className="site-layout__body">
        {Panes?.map((item, i) => <h1>{item?.text}</h1>)}
        {/* <Button className="site-layout__body-items">
          <div className="body-item-meaning">
            <Group />
            <span>Савдо реестери</span>
          </div>
          <Arrow />
        </Button> */}
      </div>
    </div>
  );
};

export default FirstPage;
