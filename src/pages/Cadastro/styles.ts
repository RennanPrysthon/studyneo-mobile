import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

interface Props {
  desabilitado?: boolean;
}

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
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
  color: #6A6A6A;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const Input = styled.TextInput`
  background-color: #F4F4F4;
  width: 100%;
  border-radius: 10px;
  padding: 7px;

  margin-bottom: 10px;
`;

export const Footer = styled.View`
  padding: 20px;
`;

export const Submit = styled(TouchableOpacity) <Props>`
  /* background-color: #00B5E2; */
  background-color: ${({ desabilitado }) => desabilitado === true ? '#00B5E2' : '#a0a0a0'};
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









