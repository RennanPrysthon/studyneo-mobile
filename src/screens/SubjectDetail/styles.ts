import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.background};
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
  text-transform: capitalize;
  margin-right: 5px;
  flex-wrap: wrap;
  color: ${props => props.theme.texts};
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
  color: ${props => props.theme.texts};
`;

export const Value = styled.Text`
  font-size: 15px;
  color: ${props => props.theme.texts};
`;

export const Divider = styled.View`
  margin: 0 10px;
  width: 2px;
  background-color: ${props => props.theme.texts};
`;

export const List = styled.View`
  background-color: ${props => props.theme.line};
  padding: 20px;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const Button = styled.TouchableOpacity`
  width: 43%;
  height: 33%;
  background-color: ${props => props.theme.background};

  border-radius: 10px;
  margin: 10px;

  justify-content: center;
  align-items: center;
`;

export const ButtonTitle = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  color: ${props => props.theme.texts};
`;

export const Icon = styled(AntDesign).attrs({

})`
  font-size: 35px;
  color: ${props => props.theme.texts}
`;

export const TitleArea = styled.View`
  flex: 1;
  padding: 15px;
  text-align: center;
`;
