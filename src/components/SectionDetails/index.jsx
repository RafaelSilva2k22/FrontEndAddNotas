import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../service/api.js";
import { Container } from "./style";
import { Section } from "../Section";
import { Tags } from "../marcadores";
import { ButtonText } from "../buttontext";
import { Button } from "../button";

export function SectionDetails() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const params = useParams();

  const returnHomePage = () => {
    navigate(-1);
  };

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);
  return (
    <Container>
      {data && (
        <main className="container-post">
          <ButtonText title="Excluir Nota" isRed></ButtonText>
          <h1>{data.title}</h1>
          <p>{data.description}</p>

          <Section title="Links uteis">
            {data.links.map((link) => (
              <li key={String(link.id)}>
                <a href={link.url} target="_blank">
                  {link.url}
                </a>
              </li>
            ))}
          </Section>
          <Section title="tags">
            {data.tags.map((tag) => (
              <Tags key={String(tag.id)} title={tag.name}></Tags>
            ))}
          </Section>

          <Button title="Voltar" onClick={() => returnHomePage()} />
        </main>
      )}
    </Container>
  );
}
