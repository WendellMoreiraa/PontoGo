import { Button } from "@mui/material";
import {
  BodyLogin,
  FormSigIn,
  ImageLogin,
  ImgIcon,
  InputForm,
  Label,
  ImageSignIn,
  MissingPassword,
  SignIn,
  Title,
  Input,
  TextImage,
  DescripctionImage,
  TitleImage,
} from "./styles";
import Image from "./../../assets/images/view_usp=sharing.png";
import Icon from "./../../assets/images/iconPuple.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  return (
    <BodyLogin>
      <ImageSignIn>
        <ImageLogin src={Image} />

        <TextImage>
          <TitleImage>Bem vindo ao PontoGo</TitleImage>
          <DescripctionImage>
            Aqui você fará toda gestão do seu sistema de pontos.
          </DescripctionImage>
        </TextImage>
      </ImageSignIn>

      <SignIn>
        <ImgIcon src={Icon} />
        <FormSigIn style={{ position: "relative" }}>
          <Title>Faça login</Title>
          <InputForm>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder=" exemplo@email.com"
              onChange={handleEmailChange}
              value={email}
            />
            <Label style={{ marginTop: "30px" }}>Senha</Label>
            <Input
              onChange={handlePasswordChange}
              placeholder=" ************"
              value={password}
              type={showPassword ? "text" : "password"}
            />

            {showPassword ? (
              <VisibilityOffIcon
                style={{
                  position: "absolute",
                  top: "210px",
                  right: "5",
                  color: "#330693",
                }}
                onClick={handleTogglePassword}
              />
            ) : (
              <VisibilityIcon
                style={{
                  position: "absolute",
                  top: "210px",
                  right: "5",
                  color: "#330693",
                }}
                onClick={handleTogglePassword}
              />
            )}

            <MissingPassword>Esqueci minha senha</MissingPassword>
          </InputForm>
          <Button
            style={{
              backgroundColor: "#330693",
              color: "white",
              fontSize: "16px",
              lineHeight: "24px",
              textTransform: "none",
              height: "50px",
              marginTop: "30px",
            }}
          >
            Entrar
          </Button>
        </FormSigIn>
      </SignIn>
    </BodyLogin>
  );
}
