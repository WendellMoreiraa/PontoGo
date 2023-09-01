import Button from "@mui/material/Button";
import logoWhite from "../../../../assets/images/iconWhite.png";
import { ContainerBar, LogoHeader, NavBar, TextBar } from "../Header/styles";

export default function Header() {
  return (
    <>
      <NavBar>
        <LogoHeader src={logoWhite} />
        <ContainerBar>
          <TextBar>Início</TextBar>
          <TextBar>Planos</TextBar>
          <Button
            variant="contained"
            style={{
              color: "rgba(51, 6, 147, 1)",
              backgroundColor: "#ffffff",
              width: "160px",
              height: "50px",
              borderRadius: "5px",
              textTransform: "none",
            }}
          >
            Fazer login
          </Button>
        </ContainerBar>
      </NavBar>
    </>
  );
}
