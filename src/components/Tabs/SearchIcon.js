import {
  CompanyLogo,
  MainIcon,
  DiagrammIcon,
  GlobusIcon,
  GlobusIcon2,
  TelegramIcon,
  ServiceIcon,
  CloseIconSmall,
  CloseIcon,
  ProfileIcon,
  VectorIcon,
  City,
  Arrow,
  Group,
  Faoliyat,
  Yunalishlar,
  Xodimlar,
  Hudud,
  Reklamalar,
  AddItem,
  AddFile,
  AddFolder,
  CopyFolder,
  TransferFolder,
  EditFile,
  Antenna,
  AntennaReceive,
  DeleteItem,
  Circle,
  MacRed,
  MacGreen,
  MacYellow,
  DeleteIcon,
  DashIcon,
  UploadFilePasport,
  UploadFileOilasi,
  FileBlueIcon,
  Plus,
  Location,
  EditIcon,
} from "../../assets/icons/icons.js";
const SearchIcon = ({ icon }) => {
  switch (icon) {
    case "Yunalishlar": {
      return <Yunalishlar />;
    }
    case "Faoliyat": {
      return <Faoliyat />;
    }
    case "Xodimlar": {
      return <Xodimlar />;
    }
    case "Hudud": {
      return <Hudud />;
    }
    default: {
      return <AddFile />;
    }
  }
};

export default SearchIcon;
