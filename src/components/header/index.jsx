import { Container, Profile, Logo } from "./style";
import logo from "../../assets/note.png"

import { api } from "../../service/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.png";
import { useAuth } from "../../hooks/auth";

export function Header() {
  const { user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <Logo>
        <img src={logo}></img>
      </Logo>
      <Profile to="/profile">
        <img src={avatarUrl} alt="Imagem do usuário" />
      </Profile>
    </Container>
  );
}
