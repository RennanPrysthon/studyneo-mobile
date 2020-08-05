import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 10px;
  background-color: #ffffff;
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
