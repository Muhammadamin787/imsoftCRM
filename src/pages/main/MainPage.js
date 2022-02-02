import { Link, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Layout, Menu, Input, Select } from "antd";
import "./mainPage.scss";
import BottomTabs from "../../components/tabs/BottomTabs";
import { Footer } from "antd/es/layout/layout";
import {
  CompanyLogo,
  GlobusIcon2,
  TelegramIcon,
} from "../../components/functions/icons";
import moment from "moment";
import { AllPages, AllServiceChildPages } from "../../pageTemplates";
import { PageIndex } from "../PageIndex";
import AccountPNG from "../../components/functions/Ellipse 3.png";
import GlobalModal from "../../components/Modal/GlobalModal";
import { useDispatch } from "react-redux";

// Bismillahir rohmanyir rohiym!

const MainPage = () => {
  const [currentTime, setCurrentTime] = useState(
    moment(new Date()).format("DD.MM.YYYY hh:mm:ss")
  );
  // setInterval(
  //   () => setCurrentTime(moment(new Date()).format("DD.MM.YYYY hh:mm:ss")),
  //   1000
  // );

  const { Header, Content } = Layout;
  const { Search } = Input;
  const { Option } = Select;
  const { SubMenu, Item } = Menu;
  const dispatch = useDispatch()

  const onSearch = (value) => console.log(value);
  function handleChangeSelect(value) {
    console.log(`selected ${value}`);
  }

  return (
    <Layout className="site-container">
      <Header className="site-header">
        <div className="header__logo">
          <CompanyLogo />
        </div>
        <Menu
          className="header__navigation"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
        >
          {AllPages.map((menu, i) =>
            menu.submenus ? (
              <SubMenu key={i} icon={menu.icon} title={menu.text}>
                {menu.submenus.map((sub, k) => (
                  <Item key={"sub" + k}>
                    <Link to={sub.path}>{sub.text}</Link>
                  </Item>
                ))}
              </SubMenu>
            ) : (
              <Item key={i} icon={menu.icon}>
                <Link to={menu.path} style={{ marginLeft: "10px" }}>
                  {menu.text}
                </Link>
              </Item>
            )
          )}
        </Menu>
        <div className="header__user-profile">
          <Search
            placeholder="Qidiruv"
            className="user-profile-search"
            allowClear
            onSearch={onSearch}
          />
          <img
            className="user-profile-image"
            src={AccountPNG}
            alt="Foydalanuvchi rasmi"
          />
          <Select onChange={handleChangeSelect} bordered={false}>
            <Option value="Jack">JAck</Option>
          </Select>
        </div>
      </Header>
      <Content className="site-layout" style={{ marginTop: 64 }}>
        <div
        // className="site-layout__content"
        >
          <Routes>
            {[...AllPages, ...AllServiceChildPages].map((page, i) =>
              page.submenus ? (
                page.submenus.map((sub, k) => (
                  <Route path={sub.path} element={<PageIndex page={sub} />} />
                ))
              ) : (
                <Route path={page.path} element={<PageIndex page={page} />} />
              )
            )}
          </Routes>
        </div>
        <GlobalModal />
      </Content>
      <Footer className="site-footer">
        <BottomTabs />
        <div className="site-footer__content">
          <div>
            <GlobusIcon2 />
            <TelegramIcon />
          </div>
          <div className="site-footer__text">
            © 2021 - Барча ҳуқуқлар ҳимояланган
          </div>
          <div className="site-footer-clock">{currentTime}</div>
        </div>
      </Footer>
    </Layout>
  );
};

export default MainPage;
