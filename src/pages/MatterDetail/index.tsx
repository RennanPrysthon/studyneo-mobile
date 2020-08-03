import React, { useEffect, useState } from 'react';

import { Container, Item, Name } from './styles';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { RefreshControl } from 'react-native';

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

const MatterDetail: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const routes = useRoute<RouteProp<ParamsList, 'ID'>>();
  const navigation = useNavigation();

  const { id } = routes.params;

  async function refresh() {
    setLoading(true);
    try {
      const { data } = await api.get(`subjects?&matter_id=${id}`)
      setSubjects(data.data)

    } catch (error) {
      console.log(error.response)
    }
    setLoading(false);
  }

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(`subjects?&matter_id=${id}&perPage=16`)
        setSubjects(data.data)

      } catch (error) {
        console.log(error.response)
      }
      setLoading(false);
    })();
  }, [routes]);

  return (
    <Container
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={refresh} />
      }
    >
      {subjects?.map(item => (
        <Item key={item.id} onPress={() => navigation.navigate('subjectsDetail', { id: item.id, title: item.title })}>
          <Name>
            {item.title}
          </Name>
        </Item>
      ))}
    </Container>
  )
}

export default MatterDetail;
