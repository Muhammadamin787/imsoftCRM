import React from 'react';
import "./programmesPage.scss"
import GlobalModal from '../../components/Modal/GlobalModal';
import GlobalTable from "../../components/Table/GlobalTable";


const ProgrammesPage = () => {
	return (
		<div className='programmes-page'>
			<h1>Dasturlar</h1>
			<GlobalTable />
		</div>
	);
};

export default ProgrammesPage;
