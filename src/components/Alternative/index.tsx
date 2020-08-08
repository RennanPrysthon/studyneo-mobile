import React, { useMemo, useContext } from 'react';
import MarkdownText from '~/components/Markdown';
import { Container } from './styles';
import ThemeContext from '~/contexts/themes';

interface Alternative { id: number; body: string; isCorrect: boolean; }

interface Props { isSelected: boolean, canFinish: boolean, onPress: () => void, data: Alternative }

const Alternative: React.FC<Props> = ({ isSelected, canFinish, onPress, data, }) => {

  const { theme } = useContext(ThemeContext);
  const backgroundColor = theme.background;
  const textColor = theme.texts;

  const color = useMemo(() => {
    if (!canFinish) return backgroundColor;
    if (data.isCorrect) {
      return '#1ca56e';
    } else if (isSelected) {
      return '#f44336'
    }
    return backgroundColor;
  }, [canFinish, backgroundColor]);

  const borderColor = useMemo(() => {
    if (theme.themeName === 'dark') {
      if (isSelected) return '#FFFFFF';
    } else {
      if (isSelected) return '#333333';
    }
    return theme.line;
  }, [isSelected, theme])

  return (
    <Container
      borderColor={borderColor}
      onPress={onPress}
      backgroundColor={color}
    >
      <MarkdownText
        style={{
          text: (canFinish === true && (data.isCorrect || isSelected)) ? '#fff' : textColor
        }}
      >
        {data.body}
      </MarkdownText>
    </Container >
  )
}

export default Alternative;
