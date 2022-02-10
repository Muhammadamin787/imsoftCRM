import { Link, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Layout, Menu, Select } from "antd";
import "./mainPage.scss";
import { Footer } from "antd/es/layout/layout";
import {
  CompanyLogo,
  findIcon,
  GlobusIcon2,
  TelegramIcon,
} from "../../assets/icons/icons";
import moment from "moment";
import {
  AllPages,
  AllServiceChildPages,
  AllCustomerChildPages,
} from "../../Templates/pageTemplates/index";
import { PageController } from "../PageController";
import AccountPNG from "../../assets/images/Ellipse 3.png";
import GlobalModal from "../../components/Modal/GlobalModal";
import { useDispatch } from "react-redux";
import { setCurrentPage, addNewTab } from "../../redux/tabs_reducer";
import SearchInput from "../../components/SearchInput/SearchInput";
import BottomTabs from "../../components/tabs/BottomTabs";

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

  const handleChangeSelect = () => {};

  const onChangePage = () => {};

  useEffect(() => {
    dispatch(setCurrentPage(currentPage)); // // brovser yangilanganda reducerdagi currentPagega hozirgi urilga teng bo'lgan templateni qushadi
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
              <SubMenu key={i} title={menu.text}>
                {menu.submenus.map((sub, k) => (
                  <Item key={"sub" + k}>
                    <Link to={sub.path}>
                      {sub.text}
                      {findIcon(menu?.icon)}
                    </Link>
                  </Item>
                ))}
              </SubMenu>
            ) : (
              <Item key={i} onClick={onChangePage}>
                <Link to={menu.path}>
                  <span style={{ marginRight: "10px", marginTop: "10px" }}>
                    {findIcon(menu?.icon)}
                  </span>
                  <span>{menu.text}</span>
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
        <div>
          <Routes>
            {[
              ...AllPages,
              ...AllServiceChildPages,
              ...AllCustomerChildPages,
            ].map((page, i) =>
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
