import React from 'react';

import { Container, Scroll } from './styles';

import Markdown from 'react-native-markdown-display';

const politicaTexts = `
O StudyNeo é a mais nova alternativa de educação online, com principal objetivo em preparar os usuários para o Exame Nacional do Ensino Médio (ENEM) e outros vestibulares de forma gratuita. Nossa "Política de Privacidade” que dispõe sobre nosso Aplicativo está definida abaixo e poderá ser acessada através do próprio aplicativo a qualquer tempo.

Aqui no StudyNeo, respeitamos a segurança das suas informações e o seu direito à privacidade. Por isso, nossa Política de Privacidade está alinhada a Lei Geral de Proteção de Dados (LGPD) mesmo antes da lei entrar em vigência. Periodicamente, visando sempre melhorar os nossos serviços e adequar nossos termos de uso e política de privacidade, poderemos realizar alterações, todas que serão devidamente informadas aos usuários para nossa autorização. Ao baixar, instalar e utilizar nosso aplicativo e os nossos serviços, você concorda de forma expressa e voluntária com todas as cláusulas desta política de privacidade, conforme descrito abaixo, tal como com nossos termos de uso. Se você discorda de qualquer um dos pontos abaixo, não utilize dos nossos serviços.

A Política de Privacidade é válida para todos os usuários de nossa plataforma, sem exceções ou diferenças de tratamento que não sejam as aplicadas aos menores de idade.

  1. Informações coletadas:
    1.1. Nosso aplicativo não coleta ou capta automaticamente nenhuma informação pessoal dos usuários.
    1.2. Coletamos o endereço de e-mail e número de telefone dos visitantes do nosso aplicativo somente quando informado por eles de forma voluntária. Além disso, coletamos também as informações voluntariamente prestadas pelos usuários, como nome, endereço, além das informações da nossa pesquisa de perfil, que questiona principalmente em que tipo de escola o usuário estudou e qual seu objetivo de estudo, informações estas somente para entender nosso público e desenvolver melhores aplicações.
    1.3. Ao fornecer seus dados e informações através do nosso aplicativo o usuário consente com a coleta, uso, armazenamento e divulgação de informações de acordo com os termos desta política de privacidade.
  2. Uso das informações coletadas:
    2.1. As informações que coletamos são usadas com o objetivo de melhorar o conteúdo e as aplicações da nossa plataforma, notificar os usuários sobre as atualizações disponíveis e para ofertas, promoções e campanhas de publicidade de nossos serviços e de parceiros selecionados.
    2.2. Os dados e informações coletados podem vir a ser armazenados em bancos de dados de terceiros, inclusive no exterior, desde que os mesmos respeitem a privacidade e a proteção de dados dos usuários em nível condizente com aquele oferecido pela legislação brasileira e por esta Política de Privacidade, e ofereçam condições adequadas de segurança no armazenamento e processamento desses dados.
    2.3. Ao preencher o cadastro para utilização da plataforma e ao acessar seus conteúdos o usuário concorda com esta Política de Privacidade, fornecendo o seu consentimento livre, expresso e informado de que os dados fornecidos ao StudyNeo poderão ser coletados, armazenados, tratados e compartilhados conforme as condições dispostas nesta política de privacidade.
    2.4. O StudyNeo ressalta o seu comprometimento em respeitar os direitos à proteção dos dados pessoais e à privacidade, e asseguramos que para que os eventuais terceiros com quem referidos dados sejam compartilhados estarão alinhados com os nossos termos de Política de Privacidade.
    2.5. Os dados pessoais coletados poderão ser utilizados para permitir a melhor customização de sua experiência no nosso aplicativo, além de permitir o constante aperfeiçoamento das nossas aplicações e funcionalidades. Deste modo, dados geográficos, demográficos e de perfil de consumo, por exemplo, poderão auxiliar o desenvolvimento dessas novas aplicações.
    2.6. Os dados pessoais, eventualmente, poderão vir a ser compartilhados com os nossos parceiros comerciais selecionados para o oferecimento de serviços ou produtos relacionados a nossa atividade, observando de forma constante a condição de que os mesmos estejam de acordo com os nossos termos de Política de Privacidade. Não compartilharemos os seus dados para qualquer outro fim que esteja em desacordo com a legislação vigente ou que não sejam os mencionados nesta Política de Privacidade.
    2.7. Os usuários que nos fornecerem seus números de telefone poderão eventualmente, ser contatados pela equipe do StudyNeo através de chamada ou mensagem SMS, com informações a respeito de novidades relevantes e serviços ou eventos próximos. Se você não deseja receber esses contatos, nos informe através da seção de Contato/Fale Conosco.
    2.8. O StudyNeo poderá ainda vir a compartilhar informações pessoais com pessoas e entidades externas à empresa caso isso seja necessário para: (i) cumprir determinações legais, regulatórias ou judiciais; (ii) cumprir os Termos de Uso da plataforma, inclusive para apuração de eventuais violações; ou (iii) proteger direitos dos usuários, do StyNeo ou do público em geral, conforme previsão legal.
  3. Links para outros sites:
    3.1. Nosso aplicativo poderá conter links para outros aplicativos, sites externos, parceiros e/ou patrocinadores, que podem ter políticas de privacidade diferentes das nossas, estando assim sujeitas às suas próprias práticas de obtenção e uso de dados. Lembre-se de que ao acessar novos sites, estará sujeito a outras regras, termos de uso e políticas de privacidade. Ao fornecer informações pessoais em outros aplicativos, sites, ou similares alheios as nossas regras, tais informações poderão ser recolhidas e utilizadas indevidamente por terceiros. Somente em nosso aplicativo tem validade as nossas regras, termos e políticas de privacidade.
    3.2. O StudyNeo não se responsabiliza pelo conteúdo de outros aplicativos/sites nem pelo manuseio das informações por terceiros. Por isso, recomendamos que nossos usuários sempre leiam as normas de relacionamento e política de privacidade específicas dentro do próprio aplicativo ou site do parceiro ou patrocinador que colete suas informações.
    3.3. A Política de Privacidade do StudyNeo se aplica unicamente aos dados e informações coletados pelo nosso aplicativo, não disciplinando o funcionamento de links e aplicativos alheios, ainda que tenham sido acessados através de link ou publicidade anunciado em nosso aplicativo.
  4. Crianças e Adolescentes:
    4.1. Este site não se destina a menores de 15 anos de idade. Qualquer pessoa que nos preste suas informações pessoais através do aplicativo do StudyNeo declara que tem acima de 15 anos de idade.
    4.2. Caso seu filho tenha enviado dados pessoais e você queira excluir tais dados dos nossos registros, poderá fazê-lo através de contato com nossa seção de Contato/FaleConosco
    4.3. Caso o usuário tenha idade inferior a 18 anos completos, será necessário autorização dos pais/responsáveis para utilização do aplicativo.
    4.4. Ao se registrar no aplicativo, o usuário com idade inferior a 18 anos indicará de forma clara que o(s) seu(s) pai(s) ou responsável(eis) estão cientes e de acordo com todos os termos de uso e política de privacidade do StudyNeo.
  5. Segurança:
    5.1. O StudyNeo utiliza medidas de segurança comercialmente razoáveis para proteger as informações contidas nos servidores utilizados por nós e no banco de dados. Exceto quando expressamente informado nesta Política ou em demais documentos que venham a reger a relação entre as partes, o StudyNeo deixa claro que não oferece nenhuma garantia de infalibilidade dos serviços, por ser impraticável. A plataforma e seus respectivos conteúdos são oferecidos “na forma em que estiverem”.
    5.2. Sua senha é secreta, faça o possível para mantê-la segura e não compartilhe com terceiros. Em caso de esquecimento da senha, uma nova será fornecida, mediante solicitação prévia através do próprio aplicativo. Esta nova senha será enviada para a sua conta de e-mail cadastrada. Sugerimos que você escolha uma senha não óbvia, se possível, utilizando tanto de letras quanto números. Lembramos que você é responsável por manter o sigilo de suas senhas e qualquer outra informação da sua conta.
    5.3. Não solicitaremos sua senha de acesso em nenhuma hipótese, sob nenhuma forma de contato ou pretexto.
    5.4. Recomendamos que você se desconecte de sua conta e feche o aplicativo quando concluir o uso, a fim de evitar o acesso dos seus dados e informações por parte de terceiros.
  6. Atualização e correção das suas informações:
    6.1. Você é responsável por manter suas informações de registro atualizadas. Para a atualização das suas informações de cadastro, acesse a sua conta e faça a alteração desejada para alterar as suas preferências de usuário ou, ainda, cancelar a sua conta.
  7. Exclusão de conta e de dados:
    7.1. Algumas informações são necessárias para fornecer os nossos serviços, assim só excluímos esses dados e informações após a exclusão da sua conta. Ao excluir sua conta, ela será excluída permanentemente do StudyNeo dentro de um prazo de 30 (trinta) dias a partir da solicitação, ressalvadas as hipóteses de guarda obrigatória de registros previstas em lei.
    7.2. Você pode solicitar a exclusão de sua conta através de nossa seção de Contato/Fale Conosco.
  8. Consentimento expresso sobre coleta, uso, armazenamento e tratamento de dados pessoais:
    8.1. Ao utilizar o nosso aplicativo, você se sujeita às regras de coleta, armazenamento e uso detalhados ao longo desta Política de Privacidade.
    8.2. O StudyNeo reserva-se ao direito de alterar esta Política de Privacidade, por qualquer razão e a qualquer tempo, alterações que serão informadas aos nossos Membros por meios razoáveis, inclusive através de informe no próprio aplicativo. Não excluídas outras formas de contato para informar da(s) mudança(s).
  9. Contato:
    9.1. Estamos sempre abertos às criticas, comentários e sugestões. Caso você tenha qualquer manifestação sobre a nossa Política de Privacidade, entre em contato através da nossa seção de contato/fale conosco.
    9.2. O atendimento através da seção de contato/fale conosco será iniciado em até 72h úteis após o registro.
    9.3. A resolução da manifestação será dada no prazo mais curto possível, não possuindo prazo máximo de conclusão.
`;

const Politica: React.FC = () => {
  return (
    <Container>
      <Scroll>
        <Markdown>
          {politicaTexts}
        </Markdown>
      </Scroll>
    </Container>
  )
}

export default Politica;
