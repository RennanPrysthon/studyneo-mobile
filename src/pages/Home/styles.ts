import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
  background-color: #FEFEFE;
`;

export const AreaTitle = styled.Text`
  font-size: 22px;
  font-weight: 600;
`

export const Item = styled.View`
  margin-bottom: 20px;
`;

export const List = styled.ScrollView`
  padding: 10px;
`;

export const ListItem = styled.View`
  width: 88px;
  height: 88px;
  margin-right: 20px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const MatterText = styled.Text`
  font-size: 14px;
  text-align: center;
  color: #fff;
`;
