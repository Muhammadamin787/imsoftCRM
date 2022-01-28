import React from 'react';
import {useDispatch} from "react-redux"
import GlobalModal from '../../components/Modal/GlobalModal';
import {increment} from "./../../redux/toolket_test"


const ReportPage = () => {
	const dispatch = useDispatch()
	return (
		<div>
			Report Page
			<h1 onClick={() => dispatch(increment())}>dispatch incerment</h1>
			<GlobalModal/>
		</div>
	);
};

export default ReportPage;