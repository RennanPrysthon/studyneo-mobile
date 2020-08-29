import React, {
  useMemo
} from 'react';

import { TouchableOpacity } from 'react-native';

import { randomize } from '~/utils';

import {
  Container,
  Title,
  MatterList,
  Matter,
  MatterTitle,
} from './styles';

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

interface Color { c1: string, c2: string }

interface Props {
  item: Area;
  cores: Color[];
  onPress: (id: number, title: string) => void;
}

const Area: React.FC<Props> = ({ item, cores, onPress }) => {

  function getColors(cores: Color[], index: number) {
    if (index >= cores.length) {
      return cores[index - cores.length];
    }
    return cores[index];
  }

  const colors = useMemo(() => randomize(cores), [cores]);

  return (
    <Container>
      <Title>{item.title}</Title>
      <MatterList>
        {item.matters.map((item, index) => {
          const { c1, c2 } = getColors(colors, index);
          return (
            <TouchableOpacity
              onPress={() => onPress(item.id, item.title)}
              key={item.id}
            >
              <Matter
                colors={[c1, c2]}
              >
                <MatterTitle>
                  {item.title}
                </MatterTitle>
              </Matter>
            </TouchableOpacity>
          )
        })}
      </MatterList>
    </Container >
  );
};

export default Area;
