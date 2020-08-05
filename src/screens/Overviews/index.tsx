import React, { useState } from 'react';

import { Linking, StyleSheet } from 'react-native';

import { useRoute, RouteProp } from '@react-navigation/native';

import Markdown from 'react-native-markdown-display';

import api from '~/api';

import { showError } from '~/utils';

import Loading from '~/components/Loading';

import { Container } from './styles';

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
          Linking.openURL(str).catch(err =>
            showError(`Endereço ${str} não pode ser encontrado`, "Erro ao abrir pagina web")
          );
          return false;
        }}
      >
        {resume.content}
      </Markdown>
    </Container >
  )
}

export default Resume;
