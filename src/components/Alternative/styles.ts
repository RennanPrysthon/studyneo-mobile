import { Pressable } from "react-native";
import styled from "styled-components/native";

interface Props {
  borderColor?: string;
  backgroundColor?: string;
}

export const Container = styled(Pressable) <Props>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-color: ${({ borderColor }) => borderColor};
  border-width: 2px;

  margin-bottom: 10px;
  border-radius: 10px;
  padding: 5px 10px;
`


