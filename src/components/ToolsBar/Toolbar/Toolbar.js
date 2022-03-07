import { useState, useEffect } from "react";
import {
  setTableItem,
  toggleModal,
  setValues,
  stopLoading,
  startLoading,
} from "../../../redux/stored_reducer";
import { setData } from "../../../redux/unsaved_reducer";

import { useDispatch, useSelector } from "react-redux";
import { Button, Popconfirm, Tooltip } from "antd";
import MacActions from "../MacActions/MacActions";
import "./toolBar.scss";
import { findIcon } from "../../../assets/icons/icons";
import { DELETE, GET, POST } from "../../../functions/Methods";
import {
  JARAYONDAGI,
  BEKOR_QILINGAN,
  TOPSHIRILGAN,
  OQITILAYOTGAN,
} from "../../../pages/pageConstants/PageRoutes";
import { removeApiStatusLines } from "../../../constant/apiLine/apiLine";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const addButtonIsDisabled = [
  JARAYONDAGI,
  BEKOR_QILINGAN,
  TOPSHIRILGAN,
  OQITILAYOTGAN,
];

const Toolbar = () => {
  const [currentPagePath, setCurrentPagePath] = useState("");
  const dispatch = useDispatch();
  const { currentPage, tableItem, values } = useSelector(
    (state) => state.tabs_reducer
  );

  const handleModalClick = () => {
    dispatch(toggleModal(true));
  };

  const onRemove = async () => {
    const url = currentPage?.mainUrl;
    let ids = tableItem.map((row) => {
      return row.id;
    });

    DELETE(url + "/delete", ids).then((res) => {
      if (res) {
        dispatch(startLoading());
        toast.success("Muvaffaqiyatlik o'chirildi");
        GET(
          removeApiStatusLines.includes(url)
            ? `${url}/status/${currentPage?.key}`
            : url
        ).then((res2) => {
          if (res2) {
            dispatch(setData(res2.data.data));
            dispatch(setValues({}));
            dispatch(setTableItem([]));
            dispatch(stopLoading());
          }
        });
      }
    });
  };

  const onEdit = () => {
    if (tableItem.length > 0 && tableItem.length < 2) {
      dispatch(setValues({ ...tableItem[0] }));
    }
    dispatch(toggleModal(tableItem));
  };

  const currentPageIcon = findIcon(currentPage?.icon);

  const noPopEdit = {
    pop: {
      placement: "top",
      title: "1 ta qatorni belgilng!",
      okText: "tushundim",
      showCancel: false,
    },
  };

  const ToolBarButtons = [
    {
      icon: findIcon("AddItem"),
      onClick: handleModalClick,
      tooltip: {
        placement: "bottom",
        text: "Qo'shish",
        color: "#444",
      },
    },
    {
      icon: findIcon("EditIcon"),
      onClick: tableItem?.length === 1 && onEdit,
      pop: (tableItem?.length > 1 || tableItem?.length === 0) && noPopEdit?.pop,
      tooltip: {
        placement: "bottom",
        text: "Taxrirlash",
        color: "#444",
      },
    },
    {
      icon: findIcon("DeleteIcon"),
      pop:
        tableItem.length > 0
          ? {
              placement: "top",
              title: "Malumotni o'chirmoqchimisiz!",
              cancelText: "Yo'q",
              okText: "Ha",
              onConfirm: onRemove,
            }
          : noPopEdit.pop,
      // pop: {
      //   placement: "top",
      //   title: "Malumotni o'chirmoqchimisiz!",
      //   cancelText: "Yo'q",
      //   okText: "Ha",
      //   onConfirm: onRemove,
      // },
      tooltip: {
        placement: "bottom",
        text: "O'chirish",
        color: "#444",
      },
    },
  ];

  useEffect(() => {
    setCurrentPagePath(currentPage.path);
  }, [currentPage]);

  return (
    <div className="toolbar">
      <div className="toolbar__title">
        <span>{currentPageIcon}</span>
        <span className="toolbar__title-text">{currentPage?.text}</span>
      </div>
      <div className="toolbar__tools">
        {ToolBarButtons?.map((button, i) =>
          button.pop ? (
            <Popconfirm {...button.pop}>
              <Tooltip
                placement={button?.tooltip?.placement}
                title={button?.tooltip?.text}
              >
                <Button>{button.icon}</Button>
              </Tooltip>
            </Popconfirm>
          ) : (
            <Tooltip
              placement={button?.tooltip?.placement}
              color={button?.tooltip?.color}
              key={i}
              title={button?.tooltip?.text}
            >
              <Button
                onClick={() => button.onClick()}
                disabled={
                  addButtonIsDisabled.includes(currentPagePath) &&
                  button?.tooltip?.text !== "Taxrirlash"
                }
              >
                {button.icon}
              </Button>
            </Tooltip>
          )
        )}
      </div>
      <MacActions />
    </div>
  );
};

export default Toolbar;
