import { Button } from "@mui/material";
import Header from "./components/Header";
import Slide from "./components/Slide";
import "./components/Slide/styles.css";
import imageHomeRigth from "../../assets/images/imageHomeRight.png";

import Company from "./components/Company/index";
import { SwiperSlide, SwiperProps } from "swiper/react";
import {
  BodyHome,
  Container,
  ContainerButton,
  ContainerInfos,
  Description,
  SubTitle,
  Title,
  Image,
  TitlePuple,
  TitleCard,
  DescriptionCard,
  InfoCard,
  Rights,
  Text,
  BorderedTextOne,
  BorderedTextTwo,
  SmokeOne,
  SmokeTwo,
  SmokeThird,
} from "./styles";
import { Cards } from "./components/Cards";
import Footer from "./components/Footer";

export default function Home() {
  const settings: SwiperProps = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    breakpoints: {
      1164: {
        slidesPerView: 3,
      },
      600: {
        slidesPerView: 2,
      },
    },
    slidesPerView: 1,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    spaceBetween: 100,
  };
  return (
    <BodyHome>
      <SmokeOne />
      <SmokeTwo />
      <SmokeThird />
      <Header />
      <Container>
        <ContainerInfos>
          <SubTitle>Esquece o ponto manual</SubTitle>
          <Title>
            Chegou a nova realidade para
            <TitlePuple>Controle de Pontos</TitlePuple>
          </Title>
          <Description>
            Com o PontoGo seus colaboradores poderão bater seus pontos de forma
            fácil e rápida, possuindo também uma Dashboard intuitiva.
          </Description>
          <ContainerButton>
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
            <Button
              variant="outlined"
              style={{
                borderRadius: "5px",
                borderColor: "#FFFFFF",
                color: "#ffffff",
                width: "160px",
                height: "50px",
                textTransform: "none",
              }}
            >
              Ver planos
            </Button>
          </ContainerButton>
        </ContainerInfos>
        <Image src={imageHomeRigth} />
      </Container>
      <Company />

      <InfoCard>
        <TitleCard>Encontre o plano perfeito</TitleCard>
        <DescriptionCard>
          Escolha o plano que melhor se encaixa na sua empresa e faça sua
          assinatura, dentro de 72h iremos liberar seus acessos.
        </DescriptionCard>
      </InfoCard>
      <div style={{ paddingTop: "70px" }}>
        <Slide settings={settings}>
          <SwiperSlide>
            <Cards
              title="Plano Prata"
              price="R$ 50"
              users="Uso de 10 colaboradores"
              recordsArea="Área de meus registros"
              dashboard="Dashboard"
              access="Acesso de 10 colaboradores"
              support="Suporte exclusivo"
              email="Email corporativo"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Cards
              title="Plano Bronze"
              price="R$ 30"
              users="Uso de 5 colaboradores"
              recordsArea="Área de meus registros"
              dashboard="Dashboard"
              access="Acesso de 10 colaboradores"
              support="Suporte exclusivo"
              email="Email corporativo"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Cards
              title="Plano Ouro"
              price="R$ 100"
              users="Uso de 20 colaboradores"
              recordsArea="Área de meus registros"
              dashboard="Dashboard"
              access="Acesso de 10 colaboradores"
              support="Suporte exclusivo"
              email="Email corporativo"
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <Cards
              title="Plano Platina"
              price="R$ R$ 200"
              users="Acessos ilimitados"
              recordsArea="Área de meus registros"
              dashboard="Dashboard"
              access="Acesso de 10 colaboradores"
              support="Suporte exclusivo"
              email="Email corporativo"
            />
          </SwiperSlide>
        </Slide>
      </div>

      <Footer />

      <Rights>
        <BorderedTextOne></BorderedTextOne>
        <Text>Pontogo - Todos os direitos reservados</Text>
        <BorderedTextTwo> </BorderedTextTwo>
      </Rights>
    </BodyHome>
  );
}
