import React from 'react';

import { Linking, StyleSheet } from 'react-native';

import Markdown from 'react-native-markdown-display';

import { Container } from './styles';
import { showMessage } from 'react-native-flash-message';

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

const Resume: React.FC<Props> = ({ text = '' }) => {
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
        {text}
      </Markdown>
    </Container >
  )
}

export default Resume;
