import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import IconHours from "./../../../../assets/images/hoursIcon.png";
import { styled } from "styled-components";

export default function DialogRegister() {
  const [open, setOpen] = React.useState(false);
  const admin = false;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {!admin ? (
        <Button
          onClick={handleClickOpen}
          style={{
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "24px",
            width: "200px",
            height: "50px",
            backgroundColor: "#330693",
            color: "white",
            textTransform: "none",
            marginTop: "40px",
            marginLeft: "30px",
          }}
        >
          Registrar ponto
        </Button>
      ) : (
        <div />
      )}
      <Dialog open={open} onClose={handleClose}>
        <DialogContent
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            width: "400px",
            height: "477px",
          }}
        >
          <TextTitleModal>Registra Novo Ponto</TextTitleModal>

          <img src={IconHours} alt="" style={{ width: "100px" }} />
          <TextHoursModal>10:30</TextHoursModal>
          <TextDateModal>29/12/2023</TextDateModal>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button
              onClick={handleClose}
              style={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "24px",
                width: "200px",
                height: "50px",
                backgroundColor: "#330693",
                color: "white",
                textTransform: "none",
                marginBottom: "10px",
              }}
            >
              Registrar ponto
            </Button>
            <Button
              onClick={handleClose}
              variant="outlined"
              style={{
                borderRadius: "5px",
                borderColor: "#330693",
                color: "#330693",
                width: "200px",
                height: "50px",
                textTransform: "none",
                marginBottom: "60px",
              }}
            >
              CANCELAR
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

const TextTitleModal = styled.span`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
`;
const TextHoursModal = styled.span`
  font-size: 30px;
  font-weight: 700;
  line-height: 45px;
  color: #330693;
`;
const TextDateModal = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #330693;
`;
