import styled from 'styled-components/native';

export const Container = styled.View`
  align-self: center;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background-color: ${props => props.theme.primary};
  width: 20%;
  padding: 5px;
  border-radius: 50px;
  position: absolute;
  z-index: 100;
  margin-top: 5px;
`;
