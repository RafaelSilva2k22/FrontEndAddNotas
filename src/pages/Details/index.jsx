import { Container, Profile } from "./style";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { HeaderSecondary } from "../../components/headerSecondary";

import { api } from "../../service/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.png";
import { useAuth } from "../../hooks/auth";

import { SectionDetails } from "../../components/SectionDetails";

export function Details() {

  const navigate = useNavigate()
  const returnToHome = () => {
    navigate(-1)
  }

  const { user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <HeaderSecondary>
        <Link onClick={() => returnToHome()}>
          <FiArrowLeft />
        </Link>
        <Profile to="/profile">
          <img src={avatarUrl} alt="Imagem do usuário" />
        </Profile>
      </HeaderSecondary>
      <main>
        <SectionDetails></SectionDetails>
      </main>
    </Container>
  );
}
