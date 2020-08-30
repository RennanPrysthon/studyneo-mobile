import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';

export const Matter = styled(LinearGradient)`
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

export const MatterTitle = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #fff;
  font-family: 'Rubik-Regular';
`;
