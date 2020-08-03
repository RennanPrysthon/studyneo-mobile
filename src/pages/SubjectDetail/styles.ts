import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';


export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
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

export const ListContainer = styled.View`
  flex: 1;
  background-color: #F6F6F6;
  align-items: center;
`;

export const List = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #F6F6F6;
  flex: 1;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  max-width: 150px;
  height: 150px;
  background-color: #ffffff;
  padding: 5px;
  border-radius: 10px;
  margin: 5px;

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
