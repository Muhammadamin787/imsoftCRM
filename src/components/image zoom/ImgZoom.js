import { useCallback, useEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Base } from "../../BaseUrl";
import { useSelector } from "react-redux";
import { Skeleton, Switch, List, Avatar } from "antd";
import { StarOutlined, LikeOutlined, MessageOutlined } from "@ant-design/icons";

const ImgZoom = ({ src }) => {
  const [time, setTime] = useState(true);

  const start = (e) => {
    setTimeout(() => {
      setTime(false);
      e.style.width = "30px"
      e.style.height = "30px"
    }, 1000);
  };
  return (
    <div>
      <Zoom zoomMargin={10}>
        <source media="(max-width: 800px)" srcSet={src} />
        <picture>
          <img
            alt=" "
            src={src}
            style={{ objectFit: "contain", width: "0px", height: "0px" }}
            onLoad={(e) => start(e.target)}
          />
        </picture>
        {time && (
          <Skeleton.Avatar
            className="img__skelaton"
            active={true}
            size={"small"}
            shape={"default"}
            width={"100px"}
          />
        )}
      </Zoom>
    </div>
  );
};

export default ImgZoom;
