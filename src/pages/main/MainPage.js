import { Link, Route, Routes, NavLink, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Layout, Menu, Select, Popover, Button } from "antd";
import "./mainPage.scss";
import { Footer } from "antd/es/layout/layout";
import { CompanyLogo, findIcon } from "../../assets/icons/icons";
import moment from "moment";
<<<<<<< HEAD
import { AllPages } from "../../Templates/pageTemplates/index";
import { PageController } from "../PageController";
import AccountPNG from "../../assets/images/Ellipse 3.png";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../redux/tabs_reducer";
=======
import {
    AllPages,
} from "../../Templates/pageTemplates/index";
import {PageController} from "../PageController";
import AccountPNG from "../../assets/images/Ellipse 3.png";
import {useDispatch} from "react-redux";
import {setCurrentPage, startLoading, stopLoading,} from "../../redux/tabs_reducer";
>>>>>>> 7ef81f39d65110f18b680c5b5df2982141f16bbd
import SearchInput from "../../components/SearchInput/SearchInput";
import BottomTabs from "../../components/Tabs/BottomTabs";
import ClientTemplate from "../../Templates/pageTemplates/ClientTemplate";
import ProgrammsTemplate from "../../Templates/pageTemplates/ProgrammesTemplate";
import ServiceTemplate from "../../Templates/pageTemplates/ServiceTemplate";
<<<<<<< HEAD
import { useSelector } from "react-redux";
import axios from "../../functions/axios";
import GlobalModal from "../../components/Modal/GlobalModal";
import { setData } from "../../redux/tabs_reducer";
=======
import {useSelector} from "react-redux";
import axios from '../../functions/axios';
import GlobalModal from '../../components/Modal/GlobalModal';
import {setData} from "../../redux/tabs_reducer"
>>>>>>> 7ef81f39d65110f18b680c5b5df2982141f16bbd

// Bismillahir rohmanyir rohiym!
const MainPage = ({ setCurrentPage }) => {
  const { currentPage } = useSelector((state) => state.tabs_reducer);

  const [currentTime, setCurrentTime] = useState(
    moment(new Date()).format("DD.MM.YYYY hh:mm:ss")
  );

  const { Header, Content } = Layout;
  const { Option } = Select;
  const { SubMenu, Item } = Menu;
  const dispatch = useDispatch();

  const handleSetCurrentPage = (currentPage) => {
    dispatch(setCurrentPage(currentPage));
  };

  const { pathname } = useLocation();


    useEffect(() => {
        dispatch(setData([]));
        if (currentPage?.allData && currentPage.allData[0]) {
            dispatch(startLoading());
            const data = axios(currentPage?.allData[0]);
            data.then(res => {
                dispatch(setData(res.data.data))
            }).then(r => {
                dispatch(stopLoading());
            })
        }
<<<<<<< HEAD
    }, [currentPage, pathname]);
=======

    }, [pathname]);
>>>>>>> 7ef81f39d65110f18b680c5b5df2982141f16bbd

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
              <Item key={i} onClick={() => handleSetCurrentPage(menu)}>
                <NavLink
                  to={menu.path}
                  key={i}
                  className={({ isActive }) => (isActive ? "activeStyle" : "")}
                >
                  <span style={{ marginRight: "10px", marginTop: "10px" }}>
                    {findIcon(menu?.icon)}
                  </span>
                  <span>{menu.text}</span>
                </NavLink>
              </Item>
            )
          )}
        </Menu>
        <div className="header__user-profile">
          <SearchInput />
          <Popover
            placement="bottomRight"
            title={<div style={{ textAlign: "center" }}>
                <img
                  className="user-profile-image"
                  src={AccountPNG}
                  alt="Foydalanuvchi rasmi"
                />
                <h3>Hojiakbar</h3>
              </div>
            }
            content={<Button color="danger" style={{width: "100%"}}>Log out</Button>}
            trigger="click"
          >
            <img
              className="user-profile-image"
              src={AccountPNG}
              alt="Foydalanuvchi rasmi"
            />
          </Popover>
        </div>
      </Header>
      <Content className="site-layout" style={{ marginTop: 64 }}>
        <div>
          <Routes>
            {[
              ...AllPages,
              ...ServiceTemplate?.sections,
              ...ProgrammsTemplate?.tabs,
              ...ClientTemplate?.tabs,
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
        {/* <GlobalModal2 /> */}
        {/* <AntdHookForm /> */}
      </Content>
      <Footer className="site-footer">
        <BottomTabs />
        {/*<div className="site-footer__content">*/}
        {/*  <div className="site-footer__icons">*/}
        {/*    <GlobusIcon2 />*/}
        {/*    <TelegramIcon />*/}
        {/*  </div>*/}
        {/*  <div className="site-footer__text">*/}
        {/*    © 2021 - Барча ҳуқуқлар ҳимояланган*/}
        {/*  </div>*/}
        {/*  <div className="site-footer-clock">{currentTime}</div>*/}
        {/*</div>*/}
      </Footer>
    </Layout>
  );
};

export default MainPage;
