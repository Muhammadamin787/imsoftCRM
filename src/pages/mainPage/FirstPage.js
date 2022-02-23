import React from "react";
import "./firstPageStyles.scss";
import {useSelector} from 'react-redux';

const FirstPage = ({ page }) => {
  const panes = useSelector(state => state.stored_reducer.Panes);

  return (
    <div className="first-page">
      <div className="site-layout__body">
        {panes.map((item, i) => <h1>{item?.text}</h1>)}
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
