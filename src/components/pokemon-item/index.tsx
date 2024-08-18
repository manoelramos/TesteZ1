import React from "react";
import { IconArrow, Title, Wrapper } from "./styles";

type Props = {
  name: string;
  url: string;
};

const PokemonItem = React.memo(({ item }: { item: Props }) => {
  return (
    <Wrapper>
      <Title>{item.name}</Title>
      <IconArrow name="arrow-right" size={24} color="black" />
    </Wrapper>
  );
});

export default PokemonItem;
