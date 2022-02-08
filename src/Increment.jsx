import React from 'react';
import { useDispatch , useSelector} from 'react-redux';
import {increment} from "./redux/nimadurReducer"


const Increment = () => {

    const dispatch = useDispatch()
    // const {value} = useSelector( state => state?.count)

    // console.log(value);

  return <div>
      <button onClick={() => dispatch(increment())}>Plus</button>
      {/* <h1>whiteList : {value}</h1> */}
  </div>;
};

export default Increment;
