import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  padding: 5px 10px;
`

export const Scroll = styled.ScrollView`
`;

export const Item = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  padding: 10px;
  border: 2px;
  margin-bottom: 8px;
  border-radius: 10px;
  border-color: #F4F4F4;
`;


export const Name = styled.Text`
  font-size: 16px;
  text-transform: capitalize;
`;
