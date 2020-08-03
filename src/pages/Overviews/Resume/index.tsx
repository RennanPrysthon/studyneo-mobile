import React, { useState } from 'react';

import { Linking, StyleSheet } from 'react-native';

import Markdown from 'react-native-markdown-display';

import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';

import { Container } from './styles';
import { showMessage } from 'react-native-flash-message';
import Loading from '../../../components/Loading';
import api from '../../../services/api';

const style = StyleSheet.create({
  heading1: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'Rubik-Medium'
  },
})

interface Props {
  text?: string;
}

type ParamsList = {
  ID: {
    id: number;
    title: string;
  }
}

interface Resume {
  content: string;
  id: number;
}

const Resume: React.FC<Props> = ({ text = '' }) => {
  const [loading, setLoading] = useState(true);
  const [resume, setResume] = useState<Resume>({} as Resume);
  const { params } = useRoute<RouteProp<ParamsList, 'ID'>>();
  const { id } = params;

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get(`overviews/${id}`);
        setResume(data.data[0])
        setLoading(false)
      } catch (error) {

      }

    })()

  }, [id])

  if (loading) return <Loading />

  return (
    <Container
      contentInsetAdjustmentBehavior="automatic"
    >
      <Markdown
        style={style}
        onLinkPress={str => {
          Linking.openURL(str).catch(err => {
            showMessage({
              message: "Erro ao abrir pagina web",
              description: `Endereço ${str} não pode ser encontrado`,
              type: "danger"
            })
          });
          return false;
        }}
      >
        {resume.content}
      </Markdown>
    </Container >
  )
}

export default Resume;
