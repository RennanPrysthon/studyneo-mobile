import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { ThemeType } from '~/styles/type';

interface Theme {
  theme: ThemeType;
}
interface Props {
  desabilitado?: boolean;
}

export const Container = styled.View<Theme>`
  flex: 1;
  align-items: center;
  background-color: ${(props) => props.theme.background};
`;

export const Content = styled.ScrollView<Theme>`
  flex: 1;
  width: 80%;
`;

export const Header = styled.View<Theme>`
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

export const Label = styled.Text<Theme>`
  color: ${(props) => props.theme.texts};
  font-weight: 600;
  margin-bottom: 5px;
  font-family: 'Rubik-Regular';
`;

export const Input = styled.TextInput<Theme>`
  background-color: ${(props) => {
    return props.theme.inputText;
  }};
  color: ${(props) => props.theme.texts};
  width: 100%;
  height: 50px;
  margin-bottom: 15px;
  border-radius: 10px;
  padding: 10px;
  font-family: 'Rubik-Regular';
  font-size: 15px;
`;

export const Footer = styled.View`
  padding: 20px;
`;

export const Submit = styled(TouchableOpacity) <Props>`
  background-color: ${props => props.desabilitado === true ? props.theme.primary : "#FFFFFF"};
  background-color: ${props => props.desabilitado === true ? props.theme.primary : (props.theme.themeName === 'dark' ? '#555555' : '#A0A0A0')};
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin-bottom: 10px;
  font-family: 'Rubik-Regular';
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
  color: #6a6a6a;
`;

export const Terms = styled.View`
  flex-direction: row;
  align-items: center;
  font-family: 'Rubik-Regular';
`;

export const TermsText = styled.Text`
  font-size: 12px;
  color: ${ (props) => props.theme.texts};
  font-family: 'Rubik-Regular';
`;

export const Link = styled.TouchableOpacity``;

export const TermsLink = styled.Text`
  font-size: 12px;
  font-weight: bold;
  font-family: 'Rubik-Bold';

  color: ${ (props) => props.theme.primary};
`;
