import React from 'react';

import { Container, Link, Text } from './styles';
import { useNavigation } from '@react-navigation/native';

const ResumeList: React.FC = () => {

  const navigation = useNavigation();

  return (

    <Container>
      {/* <Link
        onPress={() => navigation.navigate("resume")}
      >
        <Text>
          Open resume
        </Text>
      </Link> */}
    </Container>

  )
}

export default ResumeList;
