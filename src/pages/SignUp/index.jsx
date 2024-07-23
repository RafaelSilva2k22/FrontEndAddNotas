import { Container, Form } from "./style";
import { Input } from "../../components/input";
import { Button } from "../../components/button/index";
import { useNavigate } from "react-router-dom";
import { api } from "../../service/api";
import { PiUser, PiLock } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useState } from "react";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    if (!name || !email || !password) {
      alert("Preencha todos os campos");
      return;
    }

    setIsLoading(true);
    try {
      await api.post("/users", { name, email, password });
      alert("Cadastro realizado com sucesso!");
      navigate(-1);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Ocorreu um erro ao realizar o cadastro");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <div className="signUp">
        <h1>Notas Da Profe</h1>
        <span>Cadastre-se para criar notas</span>

        <h2>Faça seu Cadastro</h2>
        <Form>
          <Input
            placeholder="Digite seu nome"
            icon={PiUser}
            type="text"
            aria-label="text"
            onChange={(e) => setName(e.target.value)}
          ></Input>
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
          <Button title={isLoading ? 'Cadastrando...' : 'Cadastrar'} onClick={handleSubmit}></Button>
        </Form>

        <Link to="/">Voltar</Link>
      </div>
      <div className="image"></div>
    </Container>
  );
}
