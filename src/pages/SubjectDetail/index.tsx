import React, { useState, useEffect } from 'react';

import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import Loading from '../../components/Loading';
import api from '../../services/api';

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
  ListContainer,
  Button,
  ButtonTitle,
  Icon
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

  const { title, matter_id, overview_counts, questions_counts } = subject;

  return (
    <Container>
      <Header>
        <Title>
          {title}
        </Title>
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
      <ListContainer>
        <List>
          <Button
            onPress={() => navigation.navigate('questionList', { id })}
          >
            <Icon name="book" />
            <ButtonTitle>
              Questões
            </ButtonTitle>
          </Button>
          <Button>
            <Icon name="filetext1" />
            <ButtonTitle>
              Resumos
            </ButtonTitle>
          </Button>
        </List>
      </ListContainer>
    </Container>
  );
}

export default SubjectDetail;
