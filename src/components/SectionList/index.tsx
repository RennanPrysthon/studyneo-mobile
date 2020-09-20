import React, {
  useMemo,
} from 'react';

import { randomize } from '~/utils';

import {
  Container,
  Title,
  MatterList,
} from './styles';

import Area from '../Area';

interface Matter {
  id: number;
  area_id: number;
  title: string;
}

interface AreaData {
  id: number;
  title: string;
  matters: Matter[];
}

interface Color { c1: string, c2: string }

interface Props {
  item: AreaData;
  cores: Color[];
  onPress: (id: number, title: string) => void;
}

const SectionList: React.FC<Props> = ({ item, cores, onPress }) => {

  const colors = useMemo(() => randomize(cores), [cores]);

  function getColors(cores: Color[], index: number) {
    if (index >= cores.length) {
      return cores[index - cores.length];
    }
    return cores[index];
  }

  return (
    <Container>
      <Title>{item.title}</Title>
      <MatterList>
        {item.matters.map((item, index) => (
          <Area
            key={index}
            color={getColors(colors, index)}
            item={item}
            onPress={onPress}
          />
        ))}
      </MatterList>
    </Container >
  );
};

export default SectionList;
