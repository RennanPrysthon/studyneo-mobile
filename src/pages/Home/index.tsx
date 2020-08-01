import React, { useEffect, useState, useCallback } from 'react';

import { Container, Item, AreaTitle, List, ListItem, MatterText } from './styles';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import { RefreshControl } from 'react-native';

interface Matter {
  id: number;
  area_id: number;
  title: string;
}

interface Area {
  id: number;
  title: string;
  matters: Matter[];
}

const colors = [
  '#fbc602',
  '#38b5e2',
  '#3fbf6f',
  '#f89300',
  '#EF4B81',
  '#BB16A3'
]

const Home: React.FC = () => {
  const [feed, setFeed] = useState<Area[]>([] as Area[]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  async function refresh() {
    setLoading(true);
    try {
      const { data } = await api.get<Area[]>('areas');
      setFeed(data);
    } catch (error) {
      console.log(error)
    }
    setLoading(false);
  }

  useEffect(() => {
    (async () => {
      const { data } = await api.get<Area[]>('areas');
      setFeed(data);
      setLoading(false);
    })()
  }, [])

  const embaralha = useCallback((array: string[]) => {
    var lista = array;
    for (let indice = lista.length; indice; indice--) {

      const indiceAleatorio = Math.floor(Math.random() * indice);

      // guarda de um índice aleatório da lista
      const elemento = lista[indice - 1];

      lista[indice - 1] = lista[indiceAleatorio];

      lista[indiceAleatorio] = elemento;
    }
    return lista
  }, [])

  if (loading) return null;

  return (
    <Container
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={refresh} />
      }
    >
      {feed?.map(item => {
        const cores = embaralha(colors);
        return (
          <Item key={item.id}>
            <AreaTitle>{item?.title}</AreaTitle>
            <List
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {item.matters.map((matter, index) => (
                <ListItem
                  onPress={() => navigation.navigate('subjectsDetail', { id: matter.id, title: matter.title })}
                  key={matter.id}
                  style={{
                    backgroundColor: `${cores[index]}`
                  }}
                >
                  <MatterText>
                    {matter.title}
                  </MatterText>
                </ListItem>
              ))}
            </List>
          </Item>
        )
      })}
    </Container>
  )
}

export default Home;
