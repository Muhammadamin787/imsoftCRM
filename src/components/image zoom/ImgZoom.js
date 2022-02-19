import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
const ImgZoom = ({ src }) => {
  return (
    <Zoom zoomMargin={10}>
      <picture>
        <img
          alt="img"
          src={src}
          width="30"
          height="30"
          style={{ objectFit: "contain" }}
        />
      </picture>
    </Zoom>
  );
};

export default ImgZoom;
