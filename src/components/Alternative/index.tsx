import React, { useMemo } from 'react';
import MarkdownText from '~/components/Markdown';
import { Container } from './styles';

interface Alternative { id: number; body: string; isCorrect: boolean; }

interface Props { isSelected: boolean, canFinish: boolean, onPress: () => void, data: Alternative }

const Alternative: React.FC<Props> = ({ isSelected, canFinish, onPress, data, }) => {
  const color = useMemo(() => {
    if (!canFinish) return '#FFFFFF';
    if (data.isCorrect) {
      return '#1ca56e';
    } else if (isSelected) {
      return '#f44336'
    }

  }, [canFinish])

  return (
    <Container
      showBorder={isSelected && !canFinish}
      onPress={onPress}
      backgroundColor={color}
    >
      <MarkdownText
        style={{
          text: (canFinish === true && (data.isCorrect || isSelected)) ? '#fff' : '#333'
        }}
      >
        {data.body}
      </MarkdownText>
    </Container >
  )
}

export default Alternative;
