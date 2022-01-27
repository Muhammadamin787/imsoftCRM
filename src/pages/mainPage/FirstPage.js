import React from 'react';
import "./firstPageStyles.scss";
import {DiagrammIcon} from "../../components/functions/icons";

const FirstPage = ({page}) => {
	return (
		<div className="first-page">
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
	);
};

export default FirstPage;