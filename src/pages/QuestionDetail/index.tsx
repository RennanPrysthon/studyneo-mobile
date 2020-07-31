import React, { useState, useEffect } from 'react';

import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import Loading from '../../components/Loading';
import SubmitQuestion from '../../components/SubmitQuestion';

import { Container, Header, Enunciado, Texts, Text, Question, Alternatives, AlternativeItem, Value } from './styles';

type ParamsList = {
  ID: {
    id: number;
  }
}

interface Texto {
  content: string;
  title: string;
}

interface Alternative {
  id: number;
  body: string;
  isCorrect: boolean;
}

interface Question {
  id: number;
  enunciado: string;
  key: string;
  question: string;
  texts: Texto[];
  alternatives: Alternative[];
}

const QuestionDetail: React.FC = () => {
  const [question, setQuestion] = useState<Question>({} as Question);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<any>(null);
  const [end, setEnd] = useState(false);

  const routes = useRoute<RouteProp<ParamsList, 'ID'>>();

  const { id } = routes.params;
  useEffect(() => {
    async function loadMatter() {
      try {
        const { data } = await api.get(`questions/view/${id}`);
        setQuestion(data)
      } catch (error) {
        console.log(error.response)
      }
      setLoading(false);
    }

    loadMatter();
  }, [routes])

  if (loading) return <Loading />

  const { alternatives } = question;

  function select(id: number) {
    setSelected(id)
  }

  const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }: any) => {
    const paddingToBottom = 20;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };

  return (
    <>
      <Container
        scrollEventThrottle={400}
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            setEnd(true);
          } else {
            setEnd(false);
          }
        }}
      >
        <Header>
          <Enunciado>
            {question.enunciado}
          </Enunciado>
          <Texts>
            {question.texts.map(t => (
              <Text>
                {t.content}
              </Text>
            ))}
          </Texts>
          <Question>
            {question.question}
          </Question>
        </Header>
        <Alternatives>
          {alternatives.map(alt => (
            <AlternativeItem
              isSelected={alt.id === selected}
              onPress={() => select(alt.id)}
              key={alt.id}
            >
              <Value>
                {alt.body}
              </Value>
            </AlternativeItem>
          ))}
        </Alternatives>
      </Container>
      {!!selected && <SubmitQuestion
        onPress={() => console.log('finish')} />}
    </>
  )
}

export default QuestionDetail;
