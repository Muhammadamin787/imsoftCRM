import { Link, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Layout, Menu, Select } from "antd";
import "./mainPage.scss";
import BottomTabs from "../../components/tabs/BottomTabs";
import { Footer } from "antd/es/layout/layout";
import {
  CompanyLogo,
  GlobusIcon2,
  TelegramIcon,
} from "../../assets/icons/icons";
import moment from "moment";
import { AllPages, AllServiceChildPages } from "../../pageTemplates";
import { PageController } from "../PageController";
import AccountPNG from "../../assets/images/Ellipse 3.png";
import GlobalModal from "../../components/Modal/GlobalModal";
import { useDispatch } from "react-redux";
import { setCurrentPage, addNewTab } from "../../redux/tabs_reducer";
import SearchInput from "../../components/SearchInput/SearchInput";

// Bismillahir rohmanyir rohiym!

const MainPage = () => {
  const [currentTime, setCurrentTime] = useState(
    moment(new Date()).format("DD.MM.YYYY hh:mm:ss")
  );

  const { Header, Content } = Layout;
  const { Option } = Select;
  const { SubMenu, Item } = Menu;
  const dispatch = useDispatch();

  const pathname = window.location.pathname; // hozirgi(joriy) uril
  const allPages = [...AllServiceChildPages, ...AllPages]; // barcha templatelar (pagelar)
  const currentPage = allPages.find((allPage) => allPage.path === pathname); // hamma templatelardan urilga teng bulgan templatni topib olish

  const handleChangeSelect = () =>{

  }
  useEffect(() => {
    dispatch(setCurrentPage(currentPage)); // // brovser yangilanganda reducerdagi currentPagega hozirgi urilga teng bo'lgan templateni qushadi
    console.log(currentPage);
    dispatch(addNewTab(currentPage)); // brovser yangilanganda reducerdagi Pannse massiviga hozirgi urilga teng bo'lgan templateni qushadi
  }, []); // [] 👈 qachonki brovser yangilanganda

  return (
    <Layout className="site-container">
      <Header className="site-header">
        <div className="header__logo">
          <CompanyLogo />
        </div>
        <Menu
          className="header__navigation"
          mode="horizontal"
          defaultSelectedKeys={["0"]}
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
          <SearchInput />
          <img
            className="user-profile-image"
            src={AccountPNG}
            alt="Foydalanuvchi rasmi"
          />
          <Select onChange={handleChangeSelect} bordered={false}>
            <Option value="Jack">Jack</Option>
          </Select>
        </div>
      </Header>
      <Content className="site-layout" style={{ marginTop: 64 }}>
        <div
        >
          <Routes>
            {[...AllPages, ...AllServiceChildPages].map((page, i) =>
              page.submenus ? (
                page.submenus.map((sub, k) => (
                  <Route
                    path={sub.path}
                    element={<PageController page={sub} key={sub?.path} />}
                  />
                ))
              ) : (
                <Route
                  path={page.path}
                  element={<PageController page={page} key={page?.path} />}
                />
              )
            )}
          </Routes>
        </div>
        <GlobalModal />
      </Content>
      <Footer className="site-footer">
        <BottomTabs />
        <div className="site-footer__content">
          <div className="site-footer__icons">
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
