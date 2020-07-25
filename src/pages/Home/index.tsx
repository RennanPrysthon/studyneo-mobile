import React, { useEffect, useState } from 'react';

import { Container, Item, AreaTitle, List, ListItem, MatterText } from './styles';
import api from '../../services/api';

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

  useEffect(() => {

    async function loadData() {
      try {
        const { data } = await api.get<Area[]>('areas');
        setFeed(data)
      } catch (error) {

      }
    }

    loadData();
    setLoading(false);
  }, [])

  if (loading) return null;

  return (
    <Container>
      {feed?.map(item => (
        <Item key={item.id}>
          <AreaTitle>{item?.title}</AreaTitle>
          <List
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {item.matters.map((matter, index) => (
              <ListItem key={matter.id}
                style={{
                  backgroundColor: `${colors[Math.floor(Math.random() * 6)]}`
                }}
              >
                <MatterText>
                  {matter.title}
                </MatterText>
              </ListItem>
            ))}
          </List>
        </Item>
      ))}
    </Container>
  )
}

export default Home;
