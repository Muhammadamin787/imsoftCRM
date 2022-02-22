import React from "react";
import { Location } from "../../assets/icons/icons";
import { useDispatch } from "react-redux";
import {
  setCurrentLocation,
  setCurrentLocationIsOpen,
} from "../../redux/tabs_reducer";
const GetLocation = ({ record }) => {
  const dispatch = useDispatch();
  const click = () => {
    dispatch(setCurrentLocationIsOpen());
    dispatch(setCurrentLocation([+record.latitude, +record.longitude]));
  };
  return (
    <div style={{ cursor: "pointer" }} onClick={click}>
      <Location />
    </div>
  );
};

export default GetLocation;
