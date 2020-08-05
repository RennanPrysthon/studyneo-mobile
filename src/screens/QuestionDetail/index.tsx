import React, { useState, useEffect, useCallback } from 'react';

import SubmitQuestion from '~/components/SubmitQuestion';

import MarkdownText from '~/components/Markdown';
import api from '~/api';
import Loading from '~/components/Loading';

import { Scroll, Container, Texts, Alternatives, AlternativeItem } from './styles';

interface Texto {
  content: string;
  title: string;
}

interface Alternative {
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

interface Props {
  id: number;
}

const QuestionDetail: React.FC<Props> = ({ id }) => {
  const [question, setQuestion] = useState<Question>({} as Question);
  const [alternatives, setAlternatives] = useState<Alternative[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [end, setEnd] = useState(false);
  const [canShow, setCanShow] = useState(false);

  const [loading, setLoading] = useState(true);

  const embaralha = useCallback((array: Alternative[]) => {
    var lista = array;
    for (let indice = lista.length; indice; indice--) {

      const indiceAleatorio = Math.floor(Math.random() * indice);

      // guarda de um índice aleatório da lista
      const elemento = lista[indice - 1];

      lista[indice - 1] = lista[indiceAleatorio];

      lista[indiceAleatorio] = elemento;
    }
    return lista
  }, [question])

  useEffect(() => {
  }, [id])

  useEffect(() => {
    setCanShow(false);
    setEnd(false);
    setSelected(null);

    (async () => {
      setLoading(true);
      try {
        const { data } = await api.get(`questions/view/${id}`);
        setQuestion(data);
        setAlternatives(embaralha(data.alternatives));
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    })();

  }, [id])

  function select(id: number) {
    if (canShow) return;
    setSelected(id)
  }

  const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }: any) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };

  const getColor = useCallback(({ id, isCorrect }: Alternative) => {
    if (!canShow) return { bg: '#ffffff', text: '#333333' };

    if (isCorrect) return { bg: '#52c15b', text: '#ffffff' }
    if (id === selected && !isCorrect) return { bg: '#d42424', text: '#ffffff' };
    return { bg: '#ffffff', text: '#333333' };
  }, [canShow])

  if (loading) return <Loading />;

  return (
    <Container>
      <Scroll
        scrollEventThrottle={400}
        showsVerticalScrollIndicator={false}
        onScroll={({ nativeEvent }) => setEnd(!!isCloseToBottom(nativeEvent) ? true : false)}
        contentInsetAdjustmentBehavior="automatic"
      >
        <MarkdownText>
          {question?.enunciado}
        </MarkdownText>
        <Texts>
          {question.texts?.map(t => (
            <MarkdownText key={t.title}>
              {t.content}
            </MarkdownText>
          ))}
        </Texts>
        <MarkdownText>
          {question.question}
        </MarkdownText>
        <Alternatives>
          {alternatives.map(alt => (
            <AlternativeItem
              key={alt.id}
              isSelected={alt.id === selected}
              bgColor={getColor(alt)}
              onPress={() => select(alt.id)}
            >
              <MarkdownText
                style={{
                  text: getColor(alt).text
                }}
              >
                {alt.body}
              </MarkdownText>
            </AlternativeItem>
          ))}
        </Alternatives>
      </Scroll>
      <SubmitQuestion canShow={!!selected} fill={end} onPress={() => setCanShow(true)} />
    </Container>
  )
}

export default QuestionDetail;
