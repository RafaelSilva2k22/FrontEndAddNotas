import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Content, Form, Title, TextArea } from "./style";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { Link } from "react-router-dom";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { LogoNewPost } from "./style";
import { api } from "../../service/api";

export function NewNote() {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [Tags, setTags] = useState([]);
  const [newTags, setNewTags] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  async function handleSubmitNewNote() {
    if (!title) {
      alert("Defina um título para sua nota");
      return;
    }
    if (!description) {
      alert("Defina o conteúdo para sua nota");
      return;
    }
    if (Tags.length == 0) {
      alert("Defina uma Tag para sua nota");
      return;
    }
    if (links.length == 0) {
      alert("Defina um link de referência para sua nota");
      return;
    }

    try {
      const response = await api.post("/notes", {
        title,
        description,
        tags: Tags,
        links: links,
      });
      alert("Nota cadastrada com sucesso!");
      navigate("/");
    } catch (error) {
      console.error(
        "Erro ao criar nota:",
        error.response ? error.response.data : error.message
      );
    }
  }

  const handleAddTags = () => {
    if (newTags) {
      setTags((prevState) => [...Tags, newTags]);
      setNewTags("");
    }
  };

  const handleAddLink = () => {
    if (newLink) {
      setLinks((prevState) => [...links, newLink]);
      setNewLink("");
    }
  };

  const handleRemoveLink = (deleted) => {
    setLinks((prevState) => prevState.filter((link) => link !== deleted));
  };

  const handleRemoveTag = (deleted) => {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  };

  return (
    <Container>
      <LogoNewPost>
        <Link to="/">Notas da Profe</Link>
      </LogoNewPost>
      <Header />
      <Content>
        <Form>
          <Title>
            <h1>Criar Nota</h1>
            <Link to="/">Voltar</Link>
          </Title>
          <Input
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextArea
            placeholder="Conteúdo"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Section title="Tags" />
          {Tags.map((tag, index) => (
            <NoteItem
              key={String(index)}
              value={tag}
              onClick={() => handleRemoveTag(tag)}
            />
          ))}
          <NoteItem
            isNew
            placeholder="Nova Tag"
            onChange={(e) => setNewTags(e.target.value)}
            value={newTags}
            onClick={handleAddTags}
          />
          <Section title="Links" />
          {links.map((link, index) => (
            <NoteItem
              key={String(index)}
              value={link}
              onClick={() => {
                handleRemoveLink(link);
              }}
            />
          ))}
          <NoteItem
            isNew
            placeholder="Novo Link"
            value={newLink}
            onChange={(e) => setNewLink(e.target.value)}
            onClick={handleAddLink}
          />
        </Form>
        <button onClick={handleSubmitNewNote}>Salvar</button>
      </Content>
    </Container>
  );
}
