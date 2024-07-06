import { Container } from "./style";
import { Tags } from "../marcadores";

export function Post({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      {data.tags && data.tags.length > 0 && (
        <footer>
          <ul>
            {data.tags.map((tag) => (
              <li key={tag.id}>
                <Tags title={tag.name} />
              </li>
            ))}
          </ul>
        </footer>
      )}
    </Container>
  );
}
