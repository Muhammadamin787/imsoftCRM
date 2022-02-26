import { useCallback, useEffect } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Base } from "../../BaseUrl";
import { useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
const ImgZoom = ({ src }) => {
  const { currentPage } = useSelector((s) => s.tabs_reducer);
  const { mainData } = useSelector((s) => s.unsaved_reducer);
  const returnImgZoom = useCallback(() => {
    return (
      <Zoom zoomMargin={10}>
        <source media="(max-width: 800px)" srcSet={Base + src} />
        <picture>
          <LazyLoadImage alt={"aa"} effect="blur" src={Base + src} />
          {/* <img
            alt="img"
            src={Base + src}
            width="30"
            height="30"
            style={{ objectFit: "contain" }}
          /> */}
        </picture>
      </Zoom>
    );
  }, [currentPage, mainData]);
  return returnImgZoom();
};

export default ImgZoom;
