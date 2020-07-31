import React, { useState, useEffect } from 'react';

import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';

import { format } from 'date-fns';

import { Container, Item, CreatedAt, Question, Footer } from './styles';
import api from '../../services/api';

type ParamsList = {
  ID: {
    id: number;
  }
}

interface Question {
  id: number;
  enunciado: string;
  question: string;
  created_at: string;
}

const QuestionList: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const routes = useRoute<RouteProp<ParamsList, 'ID'>>();

  const navigation = useNavigation();

  const { id } = routes.params;
  useEffect(() => {
    async function loadMatter() {
      try {
        const { data } = await api.get(`questions/${id}`)
        setQuestions(data.data)
      } catch (error) {
        console.log(error.response)
      }
    }

    loadMatter();
  }, [routes])

  function loadText(str: string) {
    if (str.length > 120)
      return str.substring(0, 100) + '...'

    return str;
  }

  return (
    <Container>
      {questions?.map(item => (
        <Item
          onPress={() => navigation.navigate('questionDetail', { id: item.id, title: item.enunciado })}
          key={item.id}>
          <Question>
            {
              loadText(item.enunciado)
            }
          </Question>
          <Footer>
            <CreatedAt>
              {format(new Date(item.created_at), "dd/MM/yyyy")}
            </CreatedAt>
          </Footer>
        </Item>
      ))}
    </Container>
  )
}

export default QuestionList;
