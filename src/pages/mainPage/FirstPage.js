import React from 'react';
import "./firstPageStyles.scss";
import {Group, ServiceIcon, Arrow} from "../../components/functions/icons";
import { Button } from 'antd';

const FirstPage = ({page}) => {


	return (
		<div className="first-page">
		<div className="site-layout__body">
			{/* map */}
				<Button className="site-layout__body-items">
					<div className="body-item-meaning">
						<Group/>
						<span>Савдо реестери ghjkl hjkl; hjkl hjkkl</span>
					</div>
						<Arrow/> 
				</Button>
			{/* map */}
		</div>
		
	</div>
	);
};

export default FirstPage;