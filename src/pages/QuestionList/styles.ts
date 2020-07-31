import styled from 'styled-components/native';

import { StyleSheet } from 'react-native'

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: #ffffff;
`;

export const Item = styled.TouchableOpacity`
  border-bottom-width:  ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #666;
  padding: 2px;
`;

export const Question = styled.Text`
`;


export const Footer = styled.View`
  align-items: flex-end;
`;

export const CreatedAt = styled.Text`

`;
