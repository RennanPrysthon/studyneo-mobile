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
  color: #3d3d3d;
  font-family: 'Rubik-Medium';
`;

export const Item = styled.View`
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const List = styled.ScrollView`
  padding-top: 10px;
`;

export const ListItem = styled.TouchableOpacity`
  width: 90px;
  height: 90px;
  margin-right: 8px;
  margin-left: 20px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5px;
`;

export const MatterText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #fff;
  font-family: 'Rubik-Regular';
`;
