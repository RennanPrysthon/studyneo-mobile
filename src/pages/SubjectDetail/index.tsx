import React, { useEffect, useState } from 'react';

import { Container, Item, Name } from './styles';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import api from '../../services/api';

type ParamsList = {
  ID: {
    id: number;
    title: string;
  }
}

interface Subject {
  id: number;
  title: string;
  matter_id: number;
}

const SubjectDetail: React.FC = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const routes = useRoute<RouteProp<ParamsList, 'ID'>>();
  const navigation = useNavigation();

  const { id, title = '' } = routes.params;

  useEffect(() => {
    async function loadMatter() {
      try {
        const { data } = await api.get(`subjects?&matter_id=${id}`)
        setSubjects(data.data)
      } catch (error) {
        console.log(error.response)
      }
    }

    loadMatter();
  }, [routes])

  return (
    <Container>
      {subjects?.map(item => (
        <Item key={item.id} onPress={() => navigation.navigate('questionList', { id: item.id, title: item.title })}>
          <Name>
            {item.title}
          </Name>
        </Item>
      ))}
    </Container>
  )
}

export default SubjectDetail;