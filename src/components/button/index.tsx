import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Text, Wrapper } from "./styles";

type Props = {
  text: string;
  onPressItem(): void;
} & TouchableOpacityProps;

const Button = ({ text, onPressItem, ...props }: Props) => {
  return (
    <Wrapper onPress={onPressItem} {...props}>
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default Button;
