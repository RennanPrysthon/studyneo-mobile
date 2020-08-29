import React, { useEffect, useState, useCallback } from 'react';

import { RefreshControl, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { getAreas } from '~/api/area';

import Loading from '~/components/Loading';

import { randomize } from '~/utils';

import {
  Scroll,
  Container,
  Item,
  AreaTitle,
  List,
  ListItem,
  MatterText,
} from './styles';

interface Color { c1: string, c2: string }

const colors: Color[] = [
  { c1: '#fbc602', c2: '#fee176' },
  { c1: '#38b5e2', c2: '#a0dcf1' },
  { c1: '#3fbf6f', c2: '#98ddb2' },
  { c1: '#f89300', c2: '#ffc570' },
  { c1: '#EF4B81', c2: '#f9b8cd' },
  { c1: '#BB16A3', c2: '#ec5cd7' },
];

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

const AreasList: React.FC = () => {
  const [feed, setFeed] = useState<Area[]>([] as Area[]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const fetchAreasFromApi = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getAreas();
      setFeed(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, []);

  function refresh() {
    fetchAreasFromApi();
  }

  useEffect(() => {
    fetchAreasFromApi();
  }, [fetchAreasFromApi]);

  const embaralha = useCallback((colorsArray) => randomize(colorsArray), []);

  if (loading) {
    return <Loading />;
  }

  function getColors(cores: Color[], index: number) {
    if (index >= cores.length) {
      return cores[index - cores.length];
    }
    return cores[index];
  }

  return (
    <Scroll
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={refresh} />
      }>
      <Container>
        {feed?.map((item) => {
          const cores = embaralha(colors);
          return (
            <Item key={item.id}>
              <AreaTitle>{item?.title}</AreaTitle>
              <List>
                {item.matters.map((matter, index) => {
                  const { c1, c2 } = getColors(cores, index);
                  return (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('matterDetail', {
                          id: matter.id,
                          title: matter.title,
                        })
                      }

                    >
                      <ListItem
                        start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }}
                        colors={[c1, c2]}
                        key={matter.id}
                      >
                        <MatterText>{matter.title}</MatterText>
                      </ListItem>
                    </TouchableOpacity>
                  )
                })}
              </List>
            </Item>
          );
        })}
      </Container>
    </Scroll>
  );
};

export default AreasList;
