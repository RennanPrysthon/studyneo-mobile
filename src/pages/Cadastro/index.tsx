import React from 'react';

import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import api from '../../services/api';

import {
  Container,
  Header,
  Form,
  Label,
  Input,
  Footer,
  Submit,
  SubmitText,
  BackButon,
  BackText,
  Terms,
  TermsText,
  TermsLink,
  Link
} from './styles';

import Top from '../../assets/top2.svg';
import Logo from '../../assets/imagotipo-horizontal.svg';
import CheckBox from '@react-native-community/checkbox';
import Termos from '../Termos';
interface Cadastro {
  email: string;
  password: string;
  name: string;
}

const Cadastro: React.FC = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [confirmPass, setConfirmPass] = React.useState('');
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const navigation = useNavigation();

  const able = React.useMemo(
    () => acceptedTerms !== false && name !== '' && email !== '' && (pass !== '' && pass === confirmPass)
    , [name, email, pass, confirmPass, acceptedTerms]
  );

  function showFlashError(description: string, message: string = 'Erro') {
    showMessage({
      message,
      description,
      type: 'danger'
    })
  }

  function showErros() {
    if (name === '') { showFlashError('Preencha o nome', 'Nome'); return; }
    if (email === '') { showFlashError('Preencha o email', 'Email'); return; }
    if (pass === '') { showFlashError('Preencha a senha', 'Senha'); return; }
    if (pass !== confirmPass) { showFlashError('Senhas não estão iguais', 'Senha'); return; }
    if (acceptedTerms !== true) { showFlashError('Você precisa aceitar nossos termos', 'Termos'); return; }
  }

  const submitForm = async () => {
    if (!able) return showErros();
    if (loading) return;

    setLoading(true);
    const user: Cadastro = {
      email,
      name,
      password: pass
    }
    try {
      await api.post('users', user);
      showMessage({
        message: `${name} cadastrado!`,
        type: "success",
        duration: 1000
      });

      setLoading(false);
      navigation.goBack();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <Container>
      <Header>
        <Top width={'100%'} />
        <Logo />
      </Header>
      <Form>
        <Label>
          Nome
        </Label>
        <Input value={name} onChangeText={setName} />
        <Label>
          Email
        </Label>
        <Input value={email} onChangeText={setEmail} />
        <Label>
          Senha
        </Label>
        <Input value={pass} onChangeText={setPass} secureTextEntry={true} />
        <Label>
          Confirmar senha
        </Label>
        <Input value={confirmPass} onChangeText={setConfirmPass} secureTextEntry={true} />
        <Terms>
          <CheckBox
            disabled={false}
            value={acceptedTerms}
            onValueChange={(term: boolean) => setAcceptedTerms(term)}
          />
          <TermsText>
            Aceitar nossos{' '}
          </TermsText>
          <Link
            onPress={() => navigation.navigate('termos', { title: 'Termos de uso' })}
          >
            <TermsLink>
              termos de uso
            </TermsLink>
          </Link>
          <TermsText>
            {' '}e{' '}
          </TermsText>
          <Link
            onPress={() => navigation.navigate('politica', { title: 'Politica de privacidade' })}
          >
            <TermsLink>
              politica de privacidade
            </TermsLink>
          </Link>
        </Terms>
      </Form>
      <Footer>
        <Submit onPress={submitForm} desabilitado={able}>
          {loading && <ActivityIndicator size={27} color="#ffffff" />}
          {!loading &&
            <SubmitText>
              Cadastrar
          </SubmitText>}
        </Submit>
        <BackButon onPress={() => navigation.goBack()}>
          <BackText>
            Voltar
            </BackText>
        </BackButon>
      </Footer>
    </Container>
  )
}

export default Cadastro;
