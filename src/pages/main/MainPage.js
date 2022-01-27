import {Link} from "react-router-dom";
import React, {useState} from "react";
import {Layout, Menu, Input, Select } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import "./mainPage.scss";
import BottomTabs from "../../components/tabs/Tabs"
import {Footer} from "antd/es/layout/layout";
import {
	CloseIconSmall,
	CompanyLogo,
	DiagrammIcon,
	GlobusIcon2,
	ServiceIcon,
	TelegramIcon,
} from "../../components/functions/icons";
import moment from "moment";
import { AllPages } from "../../pageTemplates";
import AccountPNG from "../../components/functions/Ellipse 3.png"


// Bismillahir rohmanyir rohiym!



const MainPage = () => {
	const [currentTime, setCurrentTime] = useState(moment(new Date()).format("DD.MM.YYYY hh:mm:ss"));
	setInterval(() => setCurrentTime(moment(new Date()).format("DD.MM.YYYY hh:mm:ss")), 1000)

	const {Header, Content} = Layout;
	const { Search } = Input;
	const { Option } = Select;
	const {SubMenu, Item} = Menu;


	const onSearch = value => console.log(value);  
	function handleChangeSelect(value) {
		console.log(`selected ${value}`);
	  }
	
    

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
							<Item key={i} icon={menu.icon} >
								<Link to={menu.path} style={{marginLeft:"10px"}}>
									{menu.text}
								</Link>
							</Item>
					)}
				</Menu>
				<div className="header__user-profile">
					<Search placeholder="Qidiruv" className="user-profile-search"  allowClear onSearch={onSearch} /> 
						<img className="user-profile-image" src={AccountPNG} />
					<Select  onChange={handleChangeSelect} bordered={false} >
						<Option value="Jack">JAck</Option>
					</Select>
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
					<BottomTabs />
					{/* <div className="site-footer__tab"><ServiceIcon/>Сервис<CloseIconSmall/></div>
					<div className="site-footer__tab"><ServiceIcon/>Сервис<CloseIconSmall/></div> */}
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