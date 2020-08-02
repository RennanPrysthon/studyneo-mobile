import styled from 'styled-components/native';

export const Scroll = styled.ScrollView`
  flex: 1;
  padding: 20px 0;
  background-color: #fefefe;
`;

export const Container = styled.View`
  flex: 1;
  margin-bottom: 40px;
`;

export const AreaTitle = styled.Text`
  font-size: 22px;
  font-weight: 600;
  padding-left: 20px;
  color: #3d3d3d;
  font-family: 'Rubik-Medium';
`;

export const Item = styled.View`
  margin-bottom: 5px;
  margin-top: 5px;
`;

export const List = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingRight: 40 },
  showsHorizontalScrollIndicator: false,
})
  `
  padding-top: 10px;
  padding-left: 25px;
`;

export const ListItem = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  margin-left: 10px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5px;
  margin-right: 10px;
`;

export const MatterText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #fff;
  font-family: 'Rubik-Regular';
`;
