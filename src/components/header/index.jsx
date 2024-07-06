import { Container } from "./style";
import { Profile } from "./style";
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
      <Profile>
        <img src={avatarUrl} alt="Imagem do usuário" />
      </Profile>
    </Container>
  );
}
