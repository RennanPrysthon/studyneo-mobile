import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 0px;
  background-color: #fefefe;
`;

export const AreaTitle = styled.Text`
  font-size: 22px;
  font-weight: 600;
  padding-left: 20px;
`;

export const Item = styled.View`
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const List = styled.ScrollView`
  padding-top: 10px;
`;

export const ListItem = styled.TouchableOpacity`
  width: 88px;
  height: 88px;
  margin-right: 8px;
  margin-left: 20px;
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
