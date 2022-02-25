import {
  Link,
  Route,
  Routes,
  NavLink,
  useLocation,
  useHistory,
  useNavigate,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Layout, Menu, Popover, Button } from "antd";
import "./mainPage.scss";
import { Footer } from "antd/es/layout/layout";
import { CompanyLogo, findIcon } from "../../assets/icons/icons";
import moment from "moment";
import { AllPages } from "../../Templates/pageTemplates/index";
import { PageController } from "../PageController";
import AccountPNG from "../../assets/images/Ellipse 3.png";
import { useDispatch } from "react-redux";
import {
  setCurrentPage,
  setTableItem,
  startLoading,
  stopLoading,
} from "../../redux/stored_reducer";

import { setData ,setAllData} from "../../redux/unsaved_reducer";

import BottomTabs from "../../components/Tabs/BottomTabs";
import ClientTemplate from "../../Templates/pageTemplates/ClientTemplate";
import ProgrammsTemplate from "../../Templates/pageTemplates/ProgrammesTemplate";
import ServiceTemplate from "../../Templates/pageTemplates/ServiceTemplate";
import { useSelector } from "react-redux";
import axios from "../../functions/axios";
import GlobalModal from "../../components/Modal/GlobalModal";
import InnerModal from "../../components/Modal/innerModal/InnerModal";
import { removeApiStatusLines } from "../../constant/apiLine/apiLine";
import SearchInput from "../../components/SearchInput/SearchInput";
import LocModal from "../../components/Location/LocModal";
import {GET} from '../../functions/Methods';
// Bismillahir rohmanyir rohiym!
const MainPage = () => {
  const { currentPage, Panes } = useSelector((state) => state.tabs_reducer);
  const [currentTime, setCurrentTime] = useState(
    moment(new Date()).format("DD.MM.YYYY hh:mm:ss")
  );

  const { Header, Content } = Layout;
  // const {Option} = Select;
  const { SubMenu, Item } = Menu;
  const dispatch = useDispatch();

  const handleSetCurrentPage = (currentPage) => {
    dispatch(setCurrentPage(currentPage));
  };

  const { pathname } = useLocation();
  const navigateTo = useNavigate();

  useEffect(() => {
    dispatch(startLoading());
    let currentPage = [
      ...AllPages,
      ...ServiceTemplate?.sections,
      ...ProgrammsTemplate?.tabs,
      ...ClientTemplate?.tabs,
    ].find((page) => page.path === document.location.pathname);
    if (currentPage) {
      dispatch(setCurrentPage(currentPage));
    } else {
      navigateTo("/servis");
    }
    GET(currentPage?.mainUrl).then((res) => {
      dispatch(setData(res.data.data));
      dispatch(stopLoading());
    });
  }, []);

  useEffect(() => {
    // chap tomondagi tanlangan checkbox larni olib tashlaydi
    // dispatch(setTableItem([]));

    const url = currentPage?.mainUrl;
    dispatch(setData([]));
    if (url) {
      dispatch(startLoading());
      const data = axios(
        removeApiStatusLines.includes(url)
          ? `${url}/status/${currentPage?.key}`
          : url
      );
      data
        .then((res) => {
          dispatch(setData(res.data?.data));
        })
        .then((r) => {
          dispatch(stopLoading());
        });
    }
  }, [pathname]);


  useEffect(() => {
    // console.log(Panes);
  }, [Panes])

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
                    <SearchInput/>
                    <Popover
                        placement="bottomRight"
                        title={
                            <div style={{textAlign: "center"}}>
                                <img
                                    className="user-profile-image"
                                    src={AccountPNG}
                                    alt="Foydalanuvchi rasmi"
                                />
                                <h3>Hojiakbar</h3>
                            </div>
                        }
                        content={
                            <div>
                                <Button type={"primary"} danger style={{width: "100%"}}>
                                    Tizimdan chiqish
                                </Button>
                            </div>
                        }
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
            <Content className="site-layout" id="site__loyout" style={{marginTop: 64}}>
                <Routes>
                    {[
                        ...AllPages,
                        ...ServiceTemplate?.sections,
                        ...ProgrammsTemplate?.tabs,
                        ...ClientTemplate?.tabs,
                    ].map((page, i) =>
                        page.submenus ? (
                            page.submenus.map((sub, k) => (
                                <Route key={k}
                                       path={sub.path}
                                       element={<PageController page={sub} key={sub?.path}/>}
                                />
                            ))
                        ) : (
                            <Route key={i}
                                   path={page.path}
                                   element={<PageController page={page} key={page?.path}/>}
                            />
                        )
                    )}
                </Routes>
                <GlobalModal/>
                <InnerModal/>
                <LocModal/>
            </Content>
            <Footer className="site-footer">
                <BottomTabs/>
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
