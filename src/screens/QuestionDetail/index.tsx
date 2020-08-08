import React, { useState, useEffect, useContext } from 'react';

import SubmitQuestion from '~/components/SubmitQuestion';

import MarkdownText from '~/components/Markdown';
import api from '~/api';
import Loading from '~/components/Loading';

import { Scroll, Container, Texts, Alternatives } from './styles';
import Alternative from '~/components/Alternative';
import { randomize } from '~/utils';
import ThemeContext from '~/contexts/themes';

interface Texto {
  content: string;
  title: string;
}

interface AlternativeData {
  id: number;
  body: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  enunciado: string;
  key: string;
  question: string;
  texts: Texto[];
  alternatives: Alternative[];
}

const QuestionDetail: React.FC<{ id: number, refreshing: boolean }> = ({ id, refreshing }) => {
  const [question, setQuestion] = useState<Question>({} as Question);
  const [alternatives, setAlternatives] = useState<AlternativeData[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [end, setEnd] = useState(false);
  const [canShow, setCanShow] = useState(false);

  const [loading, setLoading] = useState(true);
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data } = await api.get(`questions/view/${id}`);
        setQuestion(data);
        setAlternatives(randomize(data.alternatives));
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    })();
  }, [id])

  useEffect(() => {
    setCanShow(false);
    setSelected(null);
    setEnd(false);
    return () => {
      console.log('saiu')
      setCanShow(false);
      setSelected(null);
      setEnd(false);
    };
  }, [question])

  function select(id: number) {
    if (canShow) return;
    setSelected(id)
  }

  const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }: any) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };

  if (loading || refreshing) return <Loading />;

  return (
    <Container>
      <Scroll
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        onScroll={({ nativeEvent }) => setEnd(!!isCloseToBottom(nativeEvent) ? true : false)}
        contentInsetAdjustmentBehavior="automatic"
      >
        <MarkdownText
          style={{ text: theme.texts }}
        >
          {question?.enunciado}
        </MarkdownText>
        <Texts>
          {question.texts?.map(({ content }, index) => (
            <MarkdownText
              key={index}
              style={{ text: theme.texts }}
            >
              {content}
            </MarkdownText>
          ))}
        </Texts>
        <MarkdownText
          style={{ text: theme.texts }}
        >
          {question.question}
        </MarkdownText>
        <Alternatives>
          {alternatives.map(alt => (
            <Alternative
              key={alt.id}
              data={alt}
              isSelected={alt.id === selected}
              canFinish={canShow && !!selected}
              onPress={() => select(alt.id)}
            />
          ))}
        </Alternatives>
      </Scroll>
      <SubmitQuestion canShow={!!selected} fill={end} onPress={() => setCanShow(true)} />
    </Container>
  )
}

export default QuestionDetail;
