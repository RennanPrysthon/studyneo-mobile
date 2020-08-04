import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-content: center;
  justify-content: center;
`;

export const Header = styled.View`
  padding: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-right: 5px;
  flex-wrap: wrap;s
`;
export const Details = styled.View`
  padding: 5px 10px;
  flex-direction: row;
  justify-content: space-between;
`;
export const KeyList = styled.View`

`;

export const Key = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

export const Value = styled.Text`
  font-size: 15px;
`;

export const Divider = styled.View`
  margin: 0 10px;
  width: 1px;
  background-color: #000;
`;

export const List = styled.View`
  background-color: #F6F6F6;
  padding: 20px;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const Button = styled.TouchableOpacity`
  width: 43%;
  height: 33%;
  background-color: #ffffff;

  border-radius: 10px;
  margin: 10px;

  justify-content: center;
  align-items: center;
`;

export const ButtonTitle = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  color: #555555;
`;

export const Icon = styled(AntDesign).attrs({

})`
  font-size: 35px;
  color: #555555;
`;

export const TitleArea = styled.View`
  flex: 1;
  padding: 15px;
  text-align: center;
`;
