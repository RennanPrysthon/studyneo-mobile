import React, { useContext, useState } from 'react';

import { ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';

import { showError, showSuccess } from '~/utils';
import Api from '~/api/session';

import Logo from '~/assets/images/imagotipo-horizontal.svg';

import TopDark from '~/assets/images/top2_dark.svg';
import TopLight from '~/assets/images/top2_light.svg';

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
  Link,
  Content,
} from './styles';

import ThemeContext from '~/contexts/themes';

const Cadastro: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const able = React.useMemo(
    () =>
      acceptedTerms !== false &&
      name !== '' &&
      email !== '' &&
      pass !== '' &&
      pass === confirmPass,
    [name, email, pass, confirmPass, acceptedTerms],
  );

  function showErros() {
    if (name === '') {
      showError('Preencha o nome', 'Nome');
      return;
    }
    if (email === '') {
      showError('Preencha o email', 'Email');
      return;
    }
    if (pass === '') {
      showError('Preencha a senha', 'Senha');
      return;
    }
    if (pass !== confirmPass) {
      showError('Senhas não estão iguais', 'Senha');
      return;
    }
    if (acceptedTerms !== true) {
      showError('Você precisa aceitar nossos termos', 'Termos');
      return;
    }
  }

  const submitForm = async () => {
    if (!able) return showErros();
    if (loading) return;

    setLoading(true);
    const user = {
      email: email.trim(),
      name: name.trim(),
      password: pass,
    };

    try {
      await Api.signUp(user);
      showSuccess('Cadastro concluído', `Usuario ${name} cadastrado com sucesso!`)
      navigation.goBack();
    } catch (err) {
      console.log(err)
    }
    setLoading(false);
  };

  const { theme } = useContext(ThemeContext);

  return (
    <Container>
      <KeyboardAvoidingView>
        <Header>
          {theme.themeName === 'light' ? (
            <TopLight width={'100%'} />
          ) : (
              <TopDark width={'100%'} />
            )}
          <Logo />
        </Header>
        <Content>
          <Form>
            <Label>Nome</Label>
            <Input value={name} onChangeText={setName} returnKeyLabel="done" />
            <Label>Email</Label>
            <Input
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyLabel="done"
            />
            <Label>Senha</Label>
            <Input
              value={pass}
              onChangeText={setPass}
              secureTextEntry={true}
              returnKeyLabel="done"
            />
            <Label>Confirmar senha</Label>
            <Input
              value={confirmPass}
              onChangeText={setConfirmPass}
              secureTextEntry={true}
              returnKeyLabel="done"
            />
            <Terms>
              <CheckBox
                disabled={false}
                value={acceptedTerms}
                onValueChange={(term: boolean) => setAcceptedTerms(term)}
              />
              <TermsText>Aceitar nossos </TermsText>
              <Link
                onPress={() =>
                  navigation.navigate('termos', { title: 'Termos de uso' })
                }>
                <TermsLink>termos de uso</TermsLink>
              </Link>
              <TermsText> e </TermsText>
              <Link
                onPress={() =>
                  navigation.navigate('politica', {
                    title: 'Politica de privacidade',
                  })
                }>
                <TermsLink>politica de privacidade</TermsLink>
              </Link>
            </Terms>
          </Form>
          <Footer>
            <Submit onPress={submitForm} desabilitado={able}>
              {loading && <ActivityIndicator size={27} color="#ffffff" />}
              {!loading && <SubmitText>Cadastrar</SubmitText>}
            </Submit>
            <BackButon onPress={() => navigation.goBack()}>
              <BackText>Voltar</BackText>
            </BackButon>
          </Footer>
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Cadastro;
