import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../service/api.js";
import { Container } from "./style";
import { Section } from "../Section";
import { Tags } from "../marcadores";
import { ButtonText } from "../buttontext";
import { FiTrash } from "react-icons/fi";

export function SectionDetails() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const params = useParams();


  async function handleRemoveNote() {
    const confirm = window.confirm('Deseja mesmo remover esta nota?')

    if (confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }
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
          <div className="trash-container" onClick={() => { handleRemoveNote() }}><FiTrash></FiTrash></div>

          <h1>{data.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.description }} />

          <Section title="tags">
            {data.tags.map((tag) => (
              <Tags key={String(tag.id)} title={tag.name}></Tags>
            ))}
          </Section>
        </main>
      )}
    </Container>
  );
}
