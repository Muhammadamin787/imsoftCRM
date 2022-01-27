import {Link} from "react-router-dom";
import React, {useState} from "react";
import {Layout, Menu} from 'antd';
import "./mainPage.scss";
import MainTemplate from "../../pageTemplates/MainTemplate";
import {Footer} from "antd/es/layout/layout";
import {
	CloseIconSmall,
	CompanyLogo,
	DiagrammIcon,
	GlobusIcon2,
	ServiceIcon,
	TelegramIcon
} from "../../components/functions/icons";
import moment from "moment";

// Bismillahir rohmanyir rohiym!

const MainPage = () => {
	const [currentTime, setCurrentTime] = useState(moment(new Date()).format("DD.MM.YYYY hh:mm:ss"));
	setInterval(() => setCurrentTime(moment(new Date()).format("DD.MM.YYYY hh:mm:ss")), 1000)

	const {Header, Content} = Layout;
	const {SubMenu, Item} = Menu;

	const AllPages = [
		MainTemplate,
	];

	return (
		<Layout className="site-container">
			<Header className="site-header">
				<div className="header__logo"><CompanyLogo/></div>
				<Menu className="header__navigation" mode="horizontal" defaultSelectedKeys={['1']}>
					{AllPages.map((menu, i) =>
						menu.submenus ?
							<SubMenu key={i} icon={menu.icon} title={menu.text}>
								{menu.submenus.map((sub, k) =>
									<Item key={"sub" + k}>
										<Link to={sub.path}>
											{sub.text}
										</Link>
									</Item>
								)}
							</SubMenu> :
							<Item key={i} icon={menu.icon}>
								<Link to={menu.path}>
									{menu.text}
								</Link>
							</Item>
					)}
					{/*<Menu.Item className="header__navigation__item" key="1"><MainIcon/>Бош меню</Menu.Item>*/}
					{/*<Menu.Item key="2">Янгиликлар</Menu.Item>*/}
					{/*<Menu.Item key="3">Ёрдам</Menu.Item>*/}
					{/* hello world */}
				</Menu>
				<div className="header__user-profile">
					Search input
				</div>
			</Header>
			<Content className="site-layout" style={{padding: '0 50px', marginTop: 64}}>
				<div className="site-layout__content" style={{padding: 24, minHeight: 380}}>
					<div className="site-layout__body">
						<div className="site-layout__body-items">
							<h2>Ҳисоботлар</h2>
							<div><DiagrammIcon/>Савдо реестери</div>
							<div><DiagrammIcon/>Кирим реестери</div>
							<div><DiagrammIcon/>Маҳсулот қолдиғи</div>
							<div><DiagrammIcon/>Маҳсулот айланмаси</div>
							<div><DiagrammIcon/>Бошқа ҳисоботлар</div>
						</div>
					</div>
					<div className="site-layout__body">
						<div className="site-layout__body-items">
							<h2>Хужжатлар</h2>
							<div><DiagrammIcon/>Савдо реестери</div>
							<div><DiagrammIcon/>Кирим реестери</div>
							<div><DiagrammIcon/>Маҳсулот қолдиғи</div>
							<div><DiagrammIcon/>Маҳсулот айланмаси</div>
							<div><DiagrammIcon/>Бошқа ҳисоботлар</div>
						</div>
					</div>
					<div className="site-layout__body">
						<div className="site-layout__body-items">
							<h2>Маълумотлар</h2>
							<div><DiagrammIcon/>Савдо реестери</div>
							<div><DiagrammIcon/>Кирим реестери</div>
							<div><DiagrammIcon/>Маҳсулот қолдиғи</div>
							<div><DiagrammIcon/>Маҳсулот айланмаси</div>
							<div><DiagrammIcon/>Бошқа ҳисоботлар</div>
						</div>
					</div>
				</div>
			</Content>
			<Footer className="site-footer">
				<div className="site-footer__tabs">
					<div className="site-footer__tab"><ServiceIcon/>Сервис<CloseIconSmall/></div>
					<div className="site-footer__tab"><ServiceIcon/>Сервис<CloseIconSmall/></div>
				</div>
				<div className="site-footer__content">
					<div>
						<GlobusIcon2/>
						<TelegramIcon/>
					</div>
					<div className="site-footer__text">© 2021 - Барча ҳуқуқлар ҳимояланган</div>
					<div className="site-footer-clock">
						{
							currentTime
						}
					</div>
				</div>
			</Footer>
		</Layout>
	);
};

export default MainPage;