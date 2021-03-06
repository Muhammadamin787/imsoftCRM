import {useState, useEffect} from "react";
import {
  removeTableItem,
  toggleModal,
  changePanesModal,
  setValues,
  setData,
} from "../../../redux/tabs_reducer";
import { useDispatch, useSelector } from "react-redux";
import { Button, message, Popconfirm, Tooltip } from "antd";
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
const addButtonIsDisabled = [
  JARAYONDAGI,
  BEKOR_QILINGAN,
  TOPSHIRILGAN,
  OQITILAYOTGAN,
];

const Toolbar = ({ tableItem }) => {
  const [currentPagePath, setCurrentPagePath] = useState("");
  const dispatch = useDispatch();
  const { currentPage, loading, Panes,MainData } = useSelector(
    (state) => state.tabs_reducer
  );

  const handleModalClick = () => {
    const newPanes = Panes?.map((page) =>
      page?.path === currentPage?.path
        ? { ...page, isOpenModal: !currentPage?.isOpenModal }
        : page
    );
    const newCurrentPage = {
      ...currentPage,
      isOpenModal: !currentPage?.isOpenModal,
    };
    
    dispatch(
      changePanesModal({ panes: newPanes, currentPage: newCurrentPage })
    );
  };

  const onRemove = () => {
    const url = currentPage?.mainUrl;

    let ids = tableItem.map((row) => {
      return row.id;
    });
    
    DELETE(url + "/delete", ids).then((res) => {
      GET(removeApiStatusLines.includes(url)?`${url}/status/${currentPage?.key}`: url).then((res2) => {
        setData(res2.data);
      });
    });
  };

  const onEdit = () => {
    if (tableItem.length === 1) {
      dispatch(setValues(...tableItem));
    }
    dispatch(toggleModal(true));
  };

  const currentPageIcon = findIcon(currentPage?.icon);

  const noPopEdit = {
    pop: {
      placement: "top",
      title: "1 ta qatorni belgilng!",
      okText: "tushundim",
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
      pop: {
        placement: "top",
        title: "Malumotni o'chirmoqchimisiz!",
        onConfirm: onRemove,
        okText: "Ha",
        cancelText: "Yo'q",
      },
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
            <Popconfirm {...button.pop} showCancel={false}>
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
              <Button onClick={() => button.onClick()} disabled={addButtonIsDisabled.includes(currentPagePath)}>{button.icon}</Button>
            </Tooltip>
          )
        )}
      </div>
      <MacActions />
    </div>
  );
};

export default Toolbar;
