import styled from 'styled-components/native';
const SIZE = 35;

export const Container = styled.TouchableOpacity`
  flex: 1;
  position: absolute;
  width: ${SIZE}px;
  height: ${SIZE}px;
  border-radius: ${SIZE / 2}px;
  background-color: ${props => props.theme.primary};
  z-index: 100;
  margin-left: 5px;
  margin-top: 5px;
  justify-content: center;
  align-items: center;
`;
