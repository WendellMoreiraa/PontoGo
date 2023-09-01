import React, { useState } from "react";
import {
  Border,
  ContainerText,
  Header,
  List,
  TextDate,
  TextHeaderDate,
  TextHeaderTitle,
  TextId,
  TextName,
} from "./styles";
import { Pagination, Stack } from "@mui/material";
import DialogRegister from "../Dialog";

export interface DataItem {
  id: number;
  name: string;
  data: string;
  hora: string;
}

export default function DashboardList({
  UsersRegister,
}: {
  UsersRegister: DataItem[];
}) {
  const admin = false;
  const itemsPerPage = !admin ? 8 : 9;
  const totalPages = Math.ceil(UsersRegister.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const endIndex = startIndex + itemsPerPage;

  const currentData = UsersRegister.slice(startIndex, endIndex);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <DialogRegister />
      <Header>
        <TextHeaderTitle>Colaborador</TextHeaderTitle>
        <TextHeaderDate style={{ marginLeft: "170px" }}>Data</TextHeaderDate>
        <TextHeaderDate style={{ marginLeft: "205px" }}>Hora</TextHeaderDate>
      </Header>
      <div>
        {currentData.map((user) => (
          <List key={user.id}>
            <Border />
            <ContainerText>
              <TextName>{user.name}</TextName>
              <TextId>{user.id}</TextId>
            </ContainerText>
            <TextDate>{user.data}</TextDate>
            <TextDate>{user.hora}</TextDate>
          </List>
        ))}
      </div>
      <Stack
        spacing={2}
        style={{
          paddingTop: "20px",
          paddingBottom: "79px",
          marginLeft: "30px",
        }}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </div>
  );
}
