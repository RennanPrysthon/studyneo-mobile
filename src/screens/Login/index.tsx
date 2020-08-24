import React, {useState, useContext} from 'react';
import {showMessage} from 'react-native-flash-message';
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import {
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import AuthContext from '~/contexts/auth';
import Feather from 'react-native-vector-icons/Feather';
import {
  Container,
  Scroll,
  Header,
  Form,
  Input,
  Password,
  EyeButton,
  InputGroup,
  Submit,
  SubmitText,
  Hint,
  HintText,
  HintAction,
  Link,
  GoogleButton,
  GoogleButtonText,
} from './styles';

import TopLight from '~/assets/images/top1_light.svg';
import TopDark from '~/assets/images/top1_dark.svg';
import Logo from '~/assets/images/logo.svg';
import ThemeContext from '~/contexts/themes';
import Google from '~/assets/images/google.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [waitin, setWaiting] = useState(false);
  const [secure, setSecure] = useState(true);
  const {signIn} = useContext(AuthContext);
  const navigation = useNavigation();

  const handlerCadastrar = () =>
    navigation.navigate('SignOn', {title: 'cadastro'});

  const toggleSecure = () => setSecure(!secure);
  const validateForm = () => {
    if (email.length === 0) {
      showMessage({
        message: 'Nenhum campo deve estar vazio!',
        description: 'Por favor, preencha o campo de E-Mail.',
        type: 'danger',
      });
      return false;
    }
    if (senha.length === 0) {
      showMessage({
        message: 'Nenhum campo deve estar vazio!',
        description: 'Por favor, preencha o campo de Senha.',
        type: 'danger',
      });
      return false;
    }

    if (email.indexOf('@') < 0 || email.indexOf('.') < 0) {
      showMessage({
        message: 'E-Mail inválido!',
        description: 'Por favor, preencha o campo de E-Mail corretamente.',
        type: 'danger',
      });
      return false;
    }

    if (senha.length < 6) {
      showMessage({
        message: 'Senha inválida!',
        description: 'Por favor, preencha o campo de Senha corretamente.',
        type: 'danger',
      });
      return false;
    }
    return true;
  };
  const handlerLogar = async () => {
    if (!validateForm()) {
      return;
    }
    if (waitin) return;
    setWaiting(true);

    try {
      const response = await signIn(email, senha);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
    setWaiting(false);
  };
  async function handleGoogleLogin() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('usuario cancelou');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('ja esta rodando');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('impossivel');
      } else {
        console.log(error.code);
      }
    }
  }
  const {theme} = useContext(ThemeContext);

  return (
    <Container behavior="height">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Scroll>
          <Header>
            {theme.themeName === 'light' ? (
              <TopLight width={'100%'} />
            ) : (
              <TopDark width={'100%'} />
            )}

            <Logo />
          </Header>
          <Form>
            <Input
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor={theme.texts}
            />
            <InputGroup>
              <Password
                placeholder="Senha"
                secureTextEntry={secure}
                value={senha}
                onChangeText={setSenha}
                placeholderTextColor={theme.texts}
              />
              <EyeButton onPress={toggleSecure}>
                <Feather
                  name={secure ? 'eye-off' : 'eye'}
                  size={20}
                  color={theme.texts}
                />
              </EyeButton>
            </InputGroup>
            <Submit onPress={handlerLogar}>
              {waitin && <ActivityIndicator size={27} color="#ffffff" />}
              {!waitin && <SubmitText>Entrar</SubmitText>}
            </Submit>
            <GoogleButton activeOpacity={0.5} onPress={handleGoogleLogin}>
              <Google width={27} height={27} />
              <GoogleButtonText>Entrar com Google</GoogleButtonText>
            </GoogleButton>
            <Hint>
              <HintText>Não tem conta?</HintText>
              <Link onPress={handlerCadastrar}>
                <HintAction>CADASTRE-SE</HintAction>
              </Link>
            </Hint>
          </Form>
        </Scroll>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default Login;
