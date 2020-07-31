import styled from 'styled-components/native';
import Markdown from 'react-native-markdown-display';
import { TouchableOpacity } from 'react-native';

interface Props {
  isSelected?: boolean;
  bgColor: {
    text: string;
    bg: string;
  };
}

export const Container = styled.ScrollView`
  flex: 1;
  padding: 10px;
  background-color: #ffffff;
`;

export const Header = styled.View`

`;

export const Enunciado = styled.Text`

`;

export const Texts = styled(Markdown)`

`;

export const Text = styled.Text`

`;

export const Question = styled.Text`

`;

export const Alternatives = styled.View`
  padding: 10px;
`;

export const AlternativeItem = styled(TouchableOpacity) <Props>`
  flex: 1;
  width: 100%;
  padding: 10px;
  border: 2px;
  margin-bottom: 8px;
  border-radius: 10px;
  border-color: ${props => props.isSelected === true ? '#222222' : '#f0f0f0'};
  background-color: ${props => props.bgColor.bg};
`;

export const Value = styled(Text) <Props>`
  color: ${props => props.bgColor.text};
`;
