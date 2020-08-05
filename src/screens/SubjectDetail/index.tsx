import React, { useState, useEffect } from 'react';

import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';

import api from '~/api';

import Loading from '~/components/Loading';

import {
  Container,
  Details,
  Header,
  Key,
  Value,
  KeyList,
  Title,
  Divider,
  List,
  Button,
  ButtonTitle,
  Icon,
  TitleArea
} from './styles';

type ParamsList = {
  ID: {
    id: number;
    title: string;
  }
}

interface Subject {
  id: number;
  overview_counts: number;
  questions_counts: number;
  title: string;
  matter_id: number;
}

const SubjectDetail: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [subject, setSubject] = useState<Subject>({} as Subject)
  const { params } = useRoute<RouteProp<ParamsList, 'ID'>>();
  const { id } = params;

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get<Subject>(`subjects/view/${id}`)
        setSubject(data);
        setLoading(false)
      } catch (error) { }
    })();
  }, [id])

  if (loading) return <Loading />

  const { title, overview_counts, questions_counts } = subject;

  return (
    <Container>
      <Header>
        <TitleArea>
          <Title
            style={{
              textAlign: 'left'
            }}
          >{title}</Title>
        </TitleArea>
        <Details>
          <KeyList>
            <Key>
              {questions_counts}
            </Key>
            <Key>
              {overview_counts}
            </Key>
          </KeyList>
          <Divider />
          <KeyList>
            <Value>
              Questões
            </Value>
            <Value>
              Resumos
            </Value>
          </KeyList>
        </Details>
      </Header>
      <List>
        <Button
          onPress={() => {
            if (questions_counts > 0) {
              navigation.navigate('questionList', { id })
            }
          }}
        >
          <Icon name="book" />
          <ButtonTitle>
            Questões
            </ButtonTitle>
        </Button>
        <Button
          onPress={() => {
            if (overview_counts > 0) {
              navigation.navigate('overviewDetail', { id })
            }
          }}
        >
          <Icon name="filetext1" />
          <ButtonTitle>
            Resumos
            </ButtonTitle>
        </Button>
      </List>

    </Container>
  );
}

export default SubjectDetail;
