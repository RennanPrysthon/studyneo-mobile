import React, { useState, useContext } from 'react';

import { TouchableWithoutFeedback, Keyboard, ActivityIndicator } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import AuthContext from '~/contexts/auth';

import {
  Container,
  Scroll,
  Header,
  Form,
  Input,
  Submit,
  SubmitText,
  Hint,
  HintText,
  HintAction,
  Link,
} from './styles';

import TopLight from '~/assets/images/top1_light.svg';
import TopDark from '~/assets/images/top1_dark.svg';
import Logo from '~/assets/images/logo.svg';
import ThemeContext from '~/contexts/themes';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [waitin, setWaiting] = useState(false);

  const { signIn } = useContext(AuthContext);
  const navigation = useNavigation();

  const handlerCadastrar = () => navigation.navigate("SignOn", { title: 'cadastro' })

  const handlerLogar = async () => {
    setWaiting(true);
    try {
      await signIn(email, senha);
    } catch (e) {
      console.log(e)
    }
    setWaiting(false)
  };

  const { theme } = useContext(ThemeContext)

  return (
    <Container
      behavior="height"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Scroll>
          <Header>
            {theme.themeName === 'light' ? <TopLight width={'100%'} /> : <TopDark width={'100%'} />}

            <Logo />
          </Header>
          <Form>
            <Input placeholder="Email" value={email} onChangeText={setEmail} placeholderTextColor={theme.texts} />
            <Input placeholder="Senha" secureTextEntry={true} value={senha} onChangeText={setSenha} placeholderTextColor={theme.texts} />
            <Submit onPress={handlerLogar} >
              {waitin && <ActivityIndicator size={27} color="#ffffff" />}
              {!waitin &&
                <SubmitText>
                  Entrar
					    </SubmitText>}
            </Submit>
            <Hint>
              <HintText>
                Não tem conta?
					    </HintText>
              <Link onPress={handlerCadastrar} >
                <HintAction>
                  CADASTRE-SE
					     </HintAction>
              </Link>
            </Hint>
          </Form>
        </Scroll>
      </TouchableWithoutFeedback>
    </Container>

  );
}

export default Login;
