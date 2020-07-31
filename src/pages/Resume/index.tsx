import React from 'react';

import { Linking } from 'react-native';

import Markdown from 'react-native-markdown-display';

import { Container } from './styles';
import { showMessage } from 'react-native-flash-message';
import Back from '../../components/Back';

const copy = `

# ÁGUA- H20

_composto inorgânico_
_solvente universal_
#### Estados:
**Sólido:** pontes de hidrogênio rígidas.
**Líquido:** as pontes de hidrogênio se quebram e refazem constantemente.
**Gasoso:** as pontes se quebram .

![formula estrutural](https://s3.static.brasilescola.uol.com.br/img/2013/09/agua.jpg)

#### Água nas reações químicas:
**hidrólise:** água é reagente. Ex:quebrar um aminoácido.
**síntese por desidratação:** água é produto.
Ex: unir dois aminoácidos.

### Adesão: se unem a outras moléculas polares.
___

### Coesão: forte ligação entre moléculas de H2o

> alguns testes

![Frida Kahlo](https://www.cidadaocultura.com.br/wp-content/uploads/2017/08/Frida_Kahlo.jpg)

  Exemplo   | Valor do exemplo
  --------- | ------
  Exemplo 1 | R$ 10
  Exemplo 2 | R$ 8
  Exemplo 3 | R$ 7
  Exemplo 4 | R$ 8

  Emphasis, aka italics, with *asterisks* or _underscores_.

  Strong emphasis, aka bold, with **asterisks** or __underscores__.

  Combined emphasis with **asterisks and _underscores_**.

  Strikethrough uses two tildes. ~~Scratch this.~~

  [I'm an inline-style link](https://www.google.com)

  Unordered

  + Create a list by starting a line with
  + Sub-lists are made by indenting 2 spaces:
    - Marker character change forces new list start:
      * Ac tristique libero volutpat at
      + Facilisis in pretium nisl aliquet
      - Nulla volutpat aliquam velit
  + Very easy!

  Ordered

  1. Lorem ipsum dolor sit amet
  2. Consectetur adipiscing elit
  3. Integer molestie lorem at massa

  Start numbering with offset:

  57. foo
  58. bar

`;

const Resume: React.FC = () => {
  return (
    <>
      <Back />
      <Container
        contentInsetAdjustmentBehavior="automatic"
      >
        <Markdown
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
          {copy}
        </Markdown>
      </Container>
    </>
  )
}

export default Resume;
