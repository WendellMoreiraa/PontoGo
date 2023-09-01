import LogoFace from "./../../../../assets/images/logoFace.png";
import LogoInsta from "./../../../../assets/images/logoInsta.png";
import LogoIn from "./../../../../assets/images/logoIn.png";
import {
  ContainerInfos,
  ContainerNets,
  Imgs,
  TextDescripction,
  TextName,
} from "./styles";

export default function Footer() {
  return (
    <ContainerNets>
      <ContainerInfos>
        <TextName>@pontogo</TextName>
        <TextDescripction>Se conecta com a gente</TextDescripction>
      </ContainerInfos>
      <div>
        <Imgs src={LogoInsta} />
        <Imgs src={LogoFace} />
        <Imgs src={LogoIn} />
      </div>
    </ContainerNets>
  );
}
