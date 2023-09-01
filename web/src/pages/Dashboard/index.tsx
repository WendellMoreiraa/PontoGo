import {
  BodyDashboard,
  Img,
  SideNav,
  Register,
  ContaineLogout,
  TextLogout,
} from "./styles";
import Logo from "./../../assets/images/iconPuple.png";
import Logout from "./../../assets/images/ant-design_logout-outlined.png";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import DashboardList from "./components/ListItem";
export interface DataItem {
  id: number;
  name: string;
  data: string;
  hora: string;
}
const UsersRegister: DataItem[] = [
  {
    id: 1,
    name: "Alice",
    data: "2023-08-30",
    hora: "10:00",
  },
  {
    id: 2,
    name: "Bob",
    data: "2023-08-31",
    hora: "14:30",
  },

  { id: 3, name: "Charlie", data: "2023-09-01", hora: "16:45" },

  { id: 4, name: "David", data: "2023-09-02", hora: "09:00" },

  { id: 5, name: "Emily", data: "2023-09-03", hora: "13:15" },

  { id: 6, name: "Fiona", data: "2023-09-04", hora: "18:30" },
  { id: 7, name: "George", data: "2023-09-05", hora: "11:45" },
  { id: 8, name: "Hannah", data: "2023-09-06", hora: "16:00" },
  { id: 9, name: "Isaac", data: "2023-09-07", hora: "10:30" },
  { id: 10, name: "Jane", data: "2023-09-08", hora: "15:45" },
  { id: 11, name: "Kevin", data: "2023-09-09", hora: "12:00" },
  { id: 12, name: "Laura", data: "2023-09-10", hora: "09:30" },
  { id: 13, name: "Michael", data: "2023-09-11", hora: "14:15" },
  { id: 14, name: "Nancy", data: "2023-09-12", hora: "17:30" },
  { id: 15, name: "Oliver", data: "2023-09-13", hora: "10:45" },
  { id: 16, name: "Pamela", data: "2023-09-14", hora: "15:00" },
  { id: 17, name: "Quincy", data: "2023-09-15", hora: "11:15" },
  { id: 18, name: "Rachel", data: "2023-09-16", hora: "16:30" },
  { id: 19, name: "Samuel", data: "2023-09-17", hora: "09:45" },
  { id: 20, name: "Tina", data: "2023-09-18", hora: "14:00" },
  { id: 21, name: "Uma", data: "2023-09-19", hora: "17:15" },
  { id: 22, name: "Victor", data: "2023-09-20", hora: "12:30" },
  { id: 23, name: "Wendy", data: "2023-09-21", hora: "10:15" },
];
export default function Dashboard() {
  return (
    <BodyDashboard>
      <SideNav>
        <Img src={Logo} alt="" />
        <Register>
          <EventNoteOutlinedIcon
            style={{ color: "#330693", width: "24", height: "24" }}
          />
          <span>Meus Registros</span>
        </Register>
        <ContaineLogout>
          <img src={Logout} />
          <TextLogout>Sair</TextLogout>
        </ContaineLogout>
      </SideNav>
      <DashboardList UsersRegister={UsersRegister} />
    </BodyDashboard>
  );
}
