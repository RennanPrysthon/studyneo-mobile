import React, { useContext } from 'react';

import {
  Container,
  WrapperItem,
  Title,
} from './styles';

import OverviewContext from '~/screens/Resume/overview_context';

const ResumeList: React.FC = () => {
  const { resumes, selectId } = useContext(OverviewContext);

  return (
    <Container>
      {resumes.map((item, index) => (
        <WrapperItem key={item.id} onPress={() => selectId(item.id)}>
          <Title>{`# ${index + 1}`}</Title>
        </WrapperItem>
      ))}
    </Container>
  );
};

export default ResumeList;
