import Company1 from "./../../../../assets/images/brainnyIcon.png";
import Company2 from "./../../../../assets/images/amoPetIcon.png";
import Company3 from "./../../../../assets/images/busIcon.png";
import Company4 from "./../../../../assets/images/studyIcon.png";
import { Img1, Img2, Img3, Img4, Container } from "./styles";

export default function Company() {
  return (
    <Container>
      <Img1 src={Company1} />
      <Img2 src={Company2} />
      <Img3 src={Company3} />
      <Img4 src={Company4} />
    </Container>
  );
}
