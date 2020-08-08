import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.background};
`;

export const Header = styled.View`
  padding: 30px;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${props => props.theme.texts};
  font-size: 32px;
`;

export const Username = styled.Text`
  color: ${props => props.theme.texts};
  font-weight: bold;
`;
