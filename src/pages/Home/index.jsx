import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../service/api.js";
import { Container, Menu, Content, Sidebar, NewNote } from "./style";
import { Filters } from "./style";
import { Header } from "../../components/header/index";
import { Post } from "../../components/posts/index.jsx";
import { ButtonText } from "../../components/buttontext/index.jsx";
import {
  SearchContainer,
  SearchInput,
  SearchButton,
  SearchIcon,
} from "./style";


import { FiPlus } from "react-icons/fi";

export function Home() {


  const navigate = useNavigate();

  const [tags, setTags] = useState([]);
  const [tagSelected, setTagSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  function handleTagSelected(tagName) {
    setTagSelected(tagName === "All" ? [] : [tagName]);
  }

  function handleNoteSelected(note_id) {
    navigate(`/details/${note_id}`);
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }
    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(
        `/notes?title=${search}&tags=${tagSelected}`
      );
      setNotes(response.data);
    }
    fetchNotes();
  }, [tagSelected, search]);

  return (
    <Container>
      <Header />
      <Sidebar>
        <Menu>
          <li>
            <ButtonText
              title="All"
              onClick={() => handleTagSelected("All")}
              isActive={tagSelected.length === 0}
            />
          </li>

          {tags &&
            tags.map((tag) => (
              <li key={String(tag.id)}>
                <ButtonText
                  title={tag.name}
                  onClick={() => handleTagSelected(tag.name)}
                  isActive={tagSelected.includes(tag.name)}
                />
              </li>
            ))}
        </Menu>
      </Sidebar>
      <Filters>
        <h2>Notas</h2>
        <SearchContainer>
          <NewNote to="/new"><FiPlus /></NewNote>
          <SearchInput
            type="text"
            placeholder="Search"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchButton>
            <SearchIcon aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </SearchIcon>
          </SearchButton>
        </SearchContainer>
      </Filters>
      <Content>
        {notes &&
          notes.map((note) => (
            <Post
              key={String(note.id)}
              data={note}
              onClick={() => handleNoteSelected(note.id)}
            />
          ))}
      </Content>
    </Container>
  );
}
