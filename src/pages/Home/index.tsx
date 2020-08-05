import React, {useEffect, useState, useCallback} from 'react';

import {
  Scroll,
  Container,
  Item,
  AreaTitle,
  List,
  ListItem,
  MatterText,
} from './styles';

import {useNavigation} from '@react-navigation/native';
import {RefreshControl} from 'react-native';
import Api from '../../api/area';
import randomize from '../../utils/randomize';
const colors = [
  '#fbc602',
  '#38b5e2',
  '#3fbf6f',
  '#f89300',
  '#EF4B81',
  '#BB16A3',
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

const Home: React.FC = () => {
  const [feed, setFeed] = useState<Area[]>([] as Area[]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const fetchAreasFromApi = useCallback(async () => {
    setLoading(true);
    try {
      const data = await Api.getAreas();
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

  const embaralha = useCallback((colorsArray) => {
    return randomize(colorsArray);
  }, []);

  if (loading) {
    return null;
  }

  function getColors(cores: string[], index: number) {
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
                {item.matters.map((matter, index) => (
                  <ListItem
                    onPress={() =>
                      navigation.navigate('matterDetail', {
                        id: matter.id,
                        title: matter.title,
                      })
                    }
                    key={matter.id}
                    style={{
                      backgroundColor: getColors(cores, index),
                    }}>
                    <MatterText>{matter.title}</MatterText>
                  </ListItem>
                ))}
              </List>
            </Item>
          );
        })}
      </Container>
    </Scroll>
  );
};

export default Home;
