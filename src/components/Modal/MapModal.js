import { inputDeafultHeght } from "../../constant/deafultStyle";
import React, { Component } from "react";
import { YMaps, Map, FullscreenControl, Placemark } from "react-yandex-maps";

export default class MapModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: this?.props?.value?.length == 2 ? this?.props?.value : [],
      mapState: {
        center: [40.382352644806545, 71.77953969910632],
        zoom: 6,
      },
    };
  }

  
  onMapClick = (e) => {
    const coords = e.get("coords");
    this.setState({ coords: coords });
    const target = {
      [this.props.name]:this.state.coords,
    }

    this.props.handleChangeValue(target);
    
  };

  render() {
    return (
      <YMaps onChange={() => this.onMapClick}>
        <Map
          modules={["Placemark", "geocode", "geoObject.addon.balloon"]}
          onClick={this.onMapClick}
          state={this.state.mapState}
          name={this.props.name}
          style={{
            gridColumn: this.props.gridColumn,
            gridRow: this.props.gridRow,
            height: this.props.height
              ? this.props.height + "px"
              : inputDeafultHeght + "px",
              borderRadius: "7px",
              marginTop: "22px"
          }}
        >
          {this.state.coords ? (
            <Placemark geometry={this.state.coords} />
          ) : null}
           <FullscreenControl />
        </Map>
      </YMaps>
    );
  }
}
