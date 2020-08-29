import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';


export const Scroll = styled.ScrollView`
  flex: 1;
  padding: 20px 0;
  background-color: ${props => props.theme.background};
`;

export const Container = styled.View`
  flex: 1;
  margin-bottom: 40px;
`;

export const AreaTitle = styled.Text`
  font-size: 22px;
  font-weight: 600;
  padding-left: 20px;
  color:  ${props => props.theme.texts};
  font-family: 'Rubik-Medium';
`;
