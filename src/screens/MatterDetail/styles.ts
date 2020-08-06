import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.background};
`;

export const Scroll = styled.ScrollView`
  padding-top: 10px;
  padding-horizontal: 5px;
  padding-bottom: 5px;
`;

export const Item = styled.TouchableOpacity`
  width: 100%;
  padding: 10px;
  border: 2px;
  margin-bottom: 8px;
  border-radius: 10px;
  border-color: ${props => props.theme.line};
`;

export const Name = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.texts}
`;
