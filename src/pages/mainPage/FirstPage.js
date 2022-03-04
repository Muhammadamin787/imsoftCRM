import "./firstPageStyles.scss";
import {useSelector} from 'react-redux';
import { findIcon } from "../../assets/icons/icons";
// import {Button, Group, Arrow} from 'antd'

const FirstPage = () => {
  const {Panes} = useSelector(state => state.tabs_reducer);

  return (
    <div className="first-page">
      {findIcon("CompanyLogo")}
      {/* <div className="site-layout__body">
        {Panes?.map((item, i) => <h1>{item?.text}</h1>)}
        <Button className="site-layout__body-items">
          <div className="body-item-meaning">
            <Group />
            <span>Савдо реестери</span>
          </div>
          <Arrow />
        </Button>
      </div> */}
    </div>
  );
};

export default FirstPage;
