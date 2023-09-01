import { Button } from "@mui/material";
import {
  ContainerCard,
  FlatCard,
  ValueCard,
  CollaboratorsCard,
  DescriptionCard,
} from "./styles";

interface ContainerCardProps {
  title: string;
  price: string;
  users: string;
  recordsArea: string;
  dashboard: string;
  access: string;
  support: string;
  email: string;
}
export const Cards: React.FC<ContainerCardProps> = (props) => {
  return (
    <ContainerCard>
      <FlatCard>{props.title}</FlatCard>
      <ValueCard>{props.price}</ValueCard>
      <CollaboratorsCard>{props.users}</CollaboratorsCard>
      <DescriptionCard>{props.recordsArea}</DescriptionCard>
      <DescriptionCard>{props.dashboard}</DescriptionCard>
      <DescriptionCard>{props.access}</DescriptionCard>
      <DescriptionCard>{props.support}</DescriptionCard>
      <DescriptionCard>{props.email}</DescriptionCard>
      <Button
        style={{
          backgroundColor: "#8A53FF",
          borderRadius: "5px",
          width: "160px",
          height: "50px",
          color: "#FFFFFF",
          marginRight: "15px",
          textTransform: "none",
        }}
      >
        Assinar agora
      </Button>
    </ContainerCard>
  );
};
