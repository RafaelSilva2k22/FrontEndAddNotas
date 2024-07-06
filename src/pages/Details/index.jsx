import { Container } from "./style";

import { Header } from "../../components/header";
import { SectionDetails } from "../../components/SectionDetails";

export function Details() {
  return (
    <Container>
      <Header></Header>
      <main>
        <SectionDetails></SectionDetails>
      </main>
    </Container>
  );
}
