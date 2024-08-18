import React from "react";
import { Text, TextProps, TextStyle } from "react-native";

type Props = {
  children: React.ReactNode;
} & TextProps;

export default function Typography({ children, ...props }: Props): JSX.Element {
  return (
    <Text {...props} style={[props.style]}>
      {children}
    </Text>
  );
}
