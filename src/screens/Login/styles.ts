import styled from 'styled-components/native';
import {ThemeType} from '~/styles/type';
export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Scroll = styled.ScrollView<Theme>`
  background-color: ${(props) => props.theme.background};
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
`;

export const Form = styled.View`
  width: 100%;
  padding: 10px;

  justify-content: center;
  align-items: center;
`;

export const Esqueci = styled.Text<Theme>`
  color: ${(props) => props.theme.primary};
  font-weight: bold;
  margin-bottom: 10px;
`;

interface Theme {
  theme: ThemeType;
}
export const Input = styled.TextInput<Theme>`
  background-color: ${(props) => {
    return props.theme.inputText;
  }};
  color: ${(props) => props.theme.texts};
  width: 80%;
  height: 50px;
  margin-bottom: 15px;
  border-radius: 10px;
  padding: 10px;
  font-family: 'Rubik-Regular';
  font-size: 15px;
`;
export const GoogleButton = styled.TouchableOpacity<Theme>`
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => {
    return props.theme.inputText;
  }};
  color: ${(props) => props.theme.texts};
  border-radius: 10px;
  flex-direction: row;
  margin-bottom: 10px;
`;
export const GoogleButtonText = styled.Text<Theme>`
  font-family: 'Rubik-Regular';
  color: ${(props) => props.theme.texts};
  margin-left: 15px;
`;
export const InputGroup = styled.View<Theme>`
  flex-direction: row;
  width: 80%;
`;
export const Password = styled.TextInput<Theme>`
  background-color: ${(props) => {
    return props.theme.inputText;
  }};
  color: ${(props) => props.theme.texts};
  width: 85%;
  margin-bottom: 15px;
  border-radius: 10px;
  height: 50px;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
  padding: 10px;
  font-family: 'Rubik-Regular';
  font-size: 15px;
`;
export const EyeButton = styled.TouchableOpacity<Theme>`
  background-color: ${(props) => {
    return props.theme.inputText;
  }};
  width: 15%;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Submit = styled.TouchableOpacity<Theme>`
  background-color: ${(props) => props.theme.primary};
  width: 80%;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin-bottom: 10px;
`;

export const SubmitText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'Rubik-Regular';
`;

export const Hint = styled.View`
  flex-direction: row;
`;
export const HintText = styled.Text<Theme>`
  color: ${(props) => props.theme.texts};
  margin-right: 4px;
  font-family: 'Rubik-Regular';
`;
export const HintAction = styled.Text<Theme>`
  font-weight: bold;
  color: ${(props) =>
    props.theme.themeName === 'light' ? props.theme.primary : '#888'};
  font-family: 'Rubik-Bold';
`;
export const Link = styled.TouchableOpacity``;
