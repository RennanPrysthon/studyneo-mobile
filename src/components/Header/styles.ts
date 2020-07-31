import styled from 'styled-components/native';

export const Container = styled.View`
  height: 30px;
  padding: 25px 20px;
  align-items: center;
  flex-direction: row;
  text-align: center;
  background-color: #00B5E2;
`;

export const Top = styled.View`
  height: 100%;
  flex: 15;
  justify-content: center;
  align-items: center;
`;

export const Tap = styled.TouchableOpacity`
  flex: 1;
  padding: 10px 0;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 16px;
  color: #ffffff;
  font-weight: bold;
`;
