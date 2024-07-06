import React from "react";
import { Container } from "./style";

export function ButtonText({ title, isActive = false, isRed, icon, ...rest }) {
  return (
    <Container type="button" $isActive={isActive} {...rest} $isRed={isRed}>
      {icon}
      {title}
    </Container>
  );
}
