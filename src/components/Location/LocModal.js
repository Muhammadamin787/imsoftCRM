import { useState, useEffect } from "react";
import { Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentLocation,
  setCurrentLocationIsOpen,
} from "../../redux/stored_reducer";

import { YMaps, Map, Placemark } from "react-yandex-maps";
const LocModal = () => {
  const { currentLocationIsOpen, currentLocation } = useSelector(
    (s) => s.tabs_reducer
  );
  const [loc, setLoc] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoc(currentLocation);
  }, [currentLocation]);
  return (
    <Modal
      style={{ width: "1200px" }}
      visible={currentLocationIsOpen}
      onOk={() => dispatch(setCurrentLocationIsOpen())}
      onCancel={() => dispatch(setCurrentLocationIsOpen())}
      className={"location"}
    >
      <YMaps>
        <Map
          modules={["Placemark", "geocode", "geoObject.addon.balloon"]}
          state={{
            center: loc,
            zoom: 15,
          }}
          style={{
            width: "100%",
            height: "500px",
          }}
        >
          {loc ? <Placemark geometry={loc} /> : null}
          {/* <FullscreenControl /> */}
        </Map>
      </YMaps>
    </Modal>
  );
};

export default LocModal;
