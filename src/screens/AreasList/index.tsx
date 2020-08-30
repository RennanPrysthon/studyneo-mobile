import React, { useEffect, useState, useCallback } from 'react';

import { RefreshControl } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { getAreas } from '~/api/area';

import Loading from '~/components/Loading';
import SectionList from '~/components/SectionList';

import {
  Scroll,
  Container
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

interface Areas {
  id: number;
  title: string;
  matters: Matter[];
}

const AreasList: React.FC = () => {
  const [feed, setFeed] = useState<Areas[]>([] as Areas[]);
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


  if (loading) {
    return <Loading />;
  }

  return (
    <Scroll
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={refresh} />
      }>
      <Container>
        {feed?.map((item) => (
          <SectionList
            key={item.id}
            onPress={(id, title) =>
              navigation.navigate('matterDetail', {
                id: id,
                title: title,
              })
            }
            item={item}
            cores={colors}
          />
        )
        )}
      </Container>
    </Scroll>
  );
};

export default AreasList;
