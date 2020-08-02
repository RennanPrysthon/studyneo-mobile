import React from 'react';

import { Container, Scroll } from './styles';

import Markdown from 'react-native-markdown-display';

const termosTexts = `
Ao utilizar o aplicativo StudyNeo, o usuário adere aos termos aqui dispostos e concorda em se submeter integralmente às condições mencionadas a seguir.

1. Sobre o serviço
O StudyNeo é um novo serviço voltado para estudantes que desejam ser aprovados em vestibulares como o Exame Nacional do Ensino Médio (ENEM).
Trata-se de uma plataforma tecnológica onde será possível acessar questões, vídeos e conteúdos em diversos formatos de disponibilização, todos com objetivo de auxiliar no aprendizado do estudante.

2. Definições
  2.1 Para fins deste instrumento considera-se:
    2.1.1 Usuário: qualquer pessoa que utilize os recursos do aplicativo, tendo um perfil cadastrado ou sem cadastro.
    2.1.2 Gestores: pessoas responsáveis pela elaboração, desenvolvimento e gestão da plataforma.
    2.1.3 Plataforma: ambiente virtual do site StudyNeo que viabiliza a utilização dos serviços oferecidos;
    2.1.4 Reclamação ou Demanda: relato sobre problema ocorrido com usuário cadastrado na plataforma, em face do qual, se espera solução;
    2.1.5  Material: todo o conteúdo educacional em todas as suas formas existentes na plataforma;
    2.1.6  Dados cadastrais: dados pessoais fornecidos pelos usuários para realização do cadastro (exemplo: nome completo, telefone, CEP, CPF, gênero, idade, etc);
    2.1.7 Informação sigilosa: dados pessoais ou qualquer outra informação cujo caráter sigiloso derive da lei ou de decisões proferidas por órgão administrativo e/ou judicial.

3. Das modalidades de serviço
  3.1 O StudyNeo disponibiliza o seguinte serviço:
    3.1.1 Acesso a conteúdo digital disponibilizado dentro do ambiente da plataforma.
4. Da utilização do aplicativo
  4.1 O acesso ao StudyNeo permite aos consumidores usuários cadastrados:
  4.2 Acessar todo o conteúdo disponibilizado na plataforma;
  4.3 Utilizar o conteúdo de forma particular para fins não comerciais;

5 DOS DEVERES DOS USUÁRIOS DO APLICATIVO
  5.1 O usuário do aplicativo não poderá:
    5.1.1 Inserir no sistema informações falsas e/ou errôneas; usar endereços de computadores, de rede ou de correio eletrônico falsos; empregar informações parcialmente ou inteiramente falsas, ou ainda informações cuja procedência não possa ser verificada;
    5.1.2  Utilizar os serviços do StudyNeo para fins diversos das finalidades para qual foi criado.
    5.1.3 Alterar, excluir e/ou corromper dados e informações do site com o simples intuito de dificultar ou obstruir suas atividades;
    5.1.4 Difamar, abusar, assediar, perseguir, ameaçar ou violar quaisquer direitos individuais (como a privacidade dos usuários do sistema);
    5.1.5 Promover, oferecer e/ou disseminar publicidade, oferta de produtos ou serviços de qualquer natureza;
    5.1.6  Observação: A prática de alguma das condutas acima listadas pode implicar o cancelamento do cadastro do usuário, bem como acionamento judicial nos casos onde os gestores julgarem prudente;

6. Da Política de Uso de Dados
  6.1 As informações coletadas automaticamente pelo StudyNeo ou fornecidas pelo usuário do aplicativo são registradas e armazenadas observados os necessários padrões de segurança, confidencialidade e integridade.
  6.2  Ao utilizar o Aplicativo o usuário declara ciência de que algumas informações poderão ser públicas, quais sejam: dados cadastrais e outros.
  6.3 Os dados identificativos do usuário, tais como, nome, endereço, CPF, entre outros, somente serão visíveis ao fornecedor reclamado e aos gestores. Os dados de faixa etária, gênero e regionais poderão ser utilizados de forma não individualizada para fins estritamente estatísticos.
  6.4 A solicitação de exclusão/edição de informações prestadas pelo usuário deverá ser demandada por email.

7.  Das penalidades
O descumprimento às condições, termos e observações deste instrumento dará aos gestores o direito de editar, cancelar, suspender, excluir e/ou desativar o cadastro ou a informação empregada pelo usuário, de forma temporária ou definitiva, ao seu único e exclusivo critério, sem prejuízo das cominações legais pertinentes.

8. Da modificação dos Termos de Uso
O StudyNeo se reserva o direito de modificar estes termos e condições a qualquer tempo, observando a comunicação ampla e prévia desta alteração aos usuários do serviço.


9. Disposições Finais
9.1 O presente termo vigorará por tempo indeterminado ou durante o período em que o sistema estiver disponível via internet.
9.2 Fica eleito o Foro do município de Recife, para dirimir quaisquer controvérsias decorrentes deste Instrumento que porventura não tenham sido resolvidas administrativamente.
9.3 O usuário concorda com a  realização obrigatoria da mediação de conflitos em local e por estabelecimento escolhido pelos gestores, para tentar solucionar as questões conflituosas, anteriormente a judicialização.
`;

const Termos: React.FC = () => {
  return (
    <Container>
      <Scroll>
        <Markdown>
          {termosTexts}
        </Markdown>
      </Scroll>
    </Container>
  )
}

export default Termos;
