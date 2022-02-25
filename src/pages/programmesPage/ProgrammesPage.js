import "./programmesPage.scss";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import ProgrammesPageChild from "./programmesPageChild/ProgrammesPageChild";

const ProgrammesPage = ({ page }) => {
  const dispatch = useDispatch();

  return (
    <div className="">
      <Layout>
        <ProgrammesPageChild activeKey={page.key} />
      </Layout>
    </div>
  );
};

export default ProgrammesPage;
