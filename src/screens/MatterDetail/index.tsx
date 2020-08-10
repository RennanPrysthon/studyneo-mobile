import React, { useEffect, useState } from 'react';
import { RefreshControl, FlatList } from 'react-native';

import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import api from '~/api';

import { Container, Scroll, Item, Name } from './styles';

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

  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0)
  const [last, setLast] = useState(2);

  const [loading, setLoading] = useState(false);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const routes = useRoute<RouteProp<ParamsList, 'ID'>>();
  const navigation = useNavigation();

  const { id } = routes.params;

  async function refreshList() {
    await loadPage(1, true);
  }

  async function loadPage(pageNumber = page, shouldRefresh = false) {
    if (pageNumber >= last) return;
    if (loading) return;
    setLoading(true);
    try {

      const { data } = await api.get(`subjects?&matter_id=${id}&page=${pageNumber}&perPage=15`)
      console.log({ page: data.page, last: data.lastPage, total: data.total })

      setLoading(false);
      setLast(data.lastPage)
      setTotal(data.total);
      setPage(data.page + 1);

      setSubjects(shouldRefresh ? data.data : [...subjects, ...data.data]);

    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    loadPage();
  }, []);

  return (
    <Container>
      <FlatList
        onRefresh={refreshList}
        data={subjects}
        keyExtractor={({ id }) => `${id}`}
        refreshing={loading}
        onEndReachedThreshold={0.2}
        onEndReached={() => loadPage()}
        renderItem={({ item }) => (
          <Item onPress={() => navigation.navigate('subjectsDetail', { id: item.id, title: item.title })}>
            <Name>
              {item.title}
            </Name>
          </Item>
        )}
      />
    </Container>
  )
}

export default MatterDetail;
