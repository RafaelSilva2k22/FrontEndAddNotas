import { useState } from "react";
import { Container, Form } from "./style";
import { Input } from "../../components/input";
import { Button } from "../../components/button/index";
import { PiUser, PiLock } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  function handleSignIn(event) {
    signIn({ email, password });
  }

  return (
    <Container>
      <div className="signIn">
        <h1>Notas Da Profe</h1>
        <span>Entre para gerenciar suas notas</span>

        <h2>Faça seu login</h2>
        <Form>
          <Input
            placeholder="Digite seu email"
            icon={PiUser}
            type="email"
            aria-label="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
          <Input
            placeholder="Digite a senha"
            icon={PiLock}
            type="password"
            aria-label="Senha"
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <Button title="Entrar" onClick={handleSignIn}></Button>
        </Form>

        <Link to="/register">Cadastre-se</Link>
      </div>
      <div className="image"></div>
    </Container>
  );
}
