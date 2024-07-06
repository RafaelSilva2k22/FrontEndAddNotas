import { useState } from "react";
import { Container, Form, Avatar } from "./style";
import { FiArrowLeft, FiCamera, FiUser, FiLock, FiMail } from "react-icons/fi";
import { Input } from "../../components/input/index";
import { Button } from "../../components/button/index";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.png";
import { api } from "../../service/api";

export function Profile() {
  const { user, updateUser } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordNew, setPasswordNew] = useState("");
  const [passwordOld, setPasswordOld] = useState("");

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleSubmit() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    };
    await updateUser({ user, avatarFile });
  }

  async function handleAvatarChange(e) {
    const file = e.target.files[0];
    setAvatarFile(file);

    const imagepreview = URL.createObjectURL(file);
    setAvatar(imagepreview);
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
        <Avatar>
          <img src={avatar} alt="Imagem do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" onChange={handleAvatarChange} />
          </label>
        </Avatar>
      </header>
      <Form>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled
        />
        <Input
          placeholder="Senha Antiga"
          type="password"
          icon={FiLock}
          value={passwordOld}
          onChange={(e) => setPasswordOld(e.target.value)}
        />
        <Input
          placeholder="Nova Senha"
          type="password"
          icon={FiLock}
          value={passwordNew}
          onChange={(e) => setPasswordNew(e.target.value)}
        />
        <Button title="Salvar" onClick={handleSubmit} />
      </Form>
    </Container>
  );
}
