import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

interface Props {
  desabilitado?: boolean;
}

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${props => props.theme.background}
`;

export const Header = styled.View`
  align-items: center;
`;

export const TopImage = styled.Image`
  align-self: flex-start;
  width: 100%;
  height: 120px;
`;

export const Form = styled.View`
  flex: 1;
  align-items: flex-start;

  padding: 20px;
`;

export const Label = styled.Text`
  color: ${props => props.theme.label};
  font-weight: 600;
  margin-bottom: 5px;
`;

export const Input = styled.TextInput`
  background-color: ${props => props.theme.inputText};
  color: ${props => props.theme.texts};
  width: 100%;
  border-radius: 10px;
  padding: 7px;
  margin-bottom: 10px;
`;

export const Footer = styled.View`
  padding: 20px;
`;

export const Submit = styled(TouchableOpacity) <Props>`
  background-color: ${props => props.desabilitado === true ? props.theme.primary : "#FFFFFF"};
  background-color: ${props => props.desabilitado === true ? props.theme.primary : (props.theme.themeName === 'dark' ? '#555555' : '#A0A0A0')};
  padding: 10px;
  border-radius: 10px;
  align-items: center;
`;

export const SubmitText = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const BackButon = styled.TouchableOpacity`
  align-items: center;
  padding: 10px;
`;

export const BackText = styled.Text`
  font-size: 14px;
  color: #6A6A6A;
`;

export const Terms = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TermsText = styled.Text`
  font-size: 12px;
  color: ${props => props.theme.texts};
`;

export const Link = styled.TouchableOpacity``;

export const TermsLink = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.theme.primary}
`;
