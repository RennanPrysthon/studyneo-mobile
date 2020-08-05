import { View, Pressable } from "react-native";
import styled from "styled-components/native";

interface Props {
  showBorder?: boolean;
  backgroundColor?: string;
}

export const Container = styled(Pressable) <Props>`

  border-color: ${({ showBorder }) => showBorder === true ? '#000' : '#ddd'};
  border-width: 2px;

  margin-bottom: 10px;
  border-radius: 10px;
  padding: 5px 10px;
`


