import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Content, Form, Title, Profile } from "./style";
import { HeaderSecondary } from "../../components/headerSecondary";
import { FiArrowLeft } from "react-icons/fi";
import { Input } from "../../components/input";
import { Link } from "react-router-dom";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/button/index";
import EditorTyni from "../../components/tyniMCE";

import { api } from "../../service/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.png";
import { useAuth } from "../../hooks/auth";

export function NewNote() {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [Tags, setTags] = useState([]);
  const [newTags, setNewTags] = useState("");

  const [title, setTitle] = useState("");
  const [editorContent, setEditorContent] = useState("");

  const navigate = useNavigate();

  async function handleSubmitNewNote() {
    if (!title) {
      alert("Defina um título para sua nota");
      return;
    }
    if (!editorContent) {
      alert("Defina o conteúdo para sua nota");
      return;
    }
    if (Tags.length === 0) {
      alert("Defina uma Tag para sua nota");
      return;
    }
    if (links.length === 0) {
      alert("Defina um link de referência para sua nota");
      return;
    }

    try {
      await api.post("/notes", {
        title,
        description: editorContent,  // Armazena o conteúdo como string HTML
        tags: Tags,
        links: links,
      });
      alert("Nota cadastrada com sucesso!");
      navigate(-1);
    } catch (error) {
      console.error(
        "Erro ao criar nota:",
        error.response ? error.response.data : error.message
      );
    }
  }

  const handleAddTags = () => {
    if (newTags) {
      setTags(() => [...Tags, newTags]);
      setNewTags("");
    }
  };

  const handleAddLink = () => {
    if (newLink) {
      setLinks(() => [...links, newLink]);
      setNewLink("");
    }
  };

  const handleRemoveLink = (deleted) => {
    setLinks((prevState) => prevState.filter((link) => link !== deleted));
  };

  const handleRemoveTag = (deleted) => {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  };

  const returnToHome = () => {
    navigate(-1);
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
      <Content>
        <Form>
          <Title>
            <h1>Criar Nota</h1>
          </Title>
          <Input
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />
          <EditorTyni onEditorChange={(content) => setEditorContent(content)} />
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
          <Button title="Salvar" onClick={() => handleSubmitNewNote()} />
        </Form>
      </Content>
    </Container>
  );
}
