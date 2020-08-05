import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

interface Props {
  isSelected?: boolean;
  bgColor: {
    text: string;
    bg: string;
  };
}

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  padding: 30px 15px;
  height: 100%;
`;

export const Header = styled.View`

`;

export const Texts = styled.ScrollView`

`;

export const Alternatives = styled.View`
  padding: 10px;
  margin-bottom: 60px;
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
