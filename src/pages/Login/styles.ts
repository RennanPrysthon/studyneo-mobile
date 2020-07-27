import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  background-color: #fff;
  flex: 1;
`;

export const ContainerList = styled.View`
  align-items: center;
  background-color: #fff;
  flex: 1;
`;

export const Form = styled.View`
  width: 100%;
  padding: 10px;

  justify-content: center;
  align-items: center;
`;

export const Esqueci = styled.Text`
  color: #00B5E2;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Input = styled.TextInput`
  background-color: #F4F4F4;
  width: 80%;
  margin-bottom: 15px;
  border-radius: 10px;
  padding: 10px;
`;

export const Submit = styled.TouchableOpacity`
  background-color: #00B5E2;
  width: 80%;
  padding: 15px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin-bottom: 10px;
`;

export const SubmitText = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const Hint = styled.View`
  flex-direction: row;
`;
export const HintText = styled.Text`
  color: #555555;
  margin-right: 4px;
`;
export const HintAction = styled.Text`
  font-weight: bold;
  color: #00B5E2;
`;
export const Link = styled.TouchableOpacity``;
