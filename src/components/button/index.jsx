import { Container } from "./style.js";

export function Button({ title, ...rest }) {
  return <Container {...rest}>{title}</Container>;
}
