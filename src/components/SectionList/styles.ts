import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 10px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: ${props => props.theme.texts}
`;

export const MatterList = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingRight: 40 },
  showsHorizontalScrollIndicator: false,
})
  `
  padding-top: 10px;
  padding-left: 15px;
`;
