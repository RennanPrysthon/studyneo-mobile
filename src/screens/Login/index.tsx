import React, { useState, useContext } from 'react';

import { TouchableWithoutFeedback, Keyboard, ActivityIndicator } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import AuthContext from '~/contexts/auth';

import {
  Container,
  Scroll,
  Header,
  Form,
  Esqueci,
  Input,
  Submit,
  SubmitText,
  Hint,
  HintText,
  HintAction,
  Link,
} from './styles';

import Top from '~/assets/images/top1.svg';
import Logo from '~/assets/images/logo.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [waitin, setWaiting] = useState(false);

  const { signIn } = useContext(AuthContext);
  const navigation = useNavigation();

  const handlerCadastrar = () => navigation.navigate("SignOn", { title: 'cadastro' })

  const handlerLogar = () => {
    setWaiting(true);
    signIn(email, senha).then(() => setWaiting(false));
  };

  return (
    <Container
      behavior="height"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Scroll>
          <Header>
            <Top width={'100%'} />
            <Logo />
          </Header>
          <Form>
            <Input placeholder="Email" value={email} onChangeText={setEmail} />
            <Input placeholder="Senha" secureTextEntry={true} value={senha} onChangeText={setSenha} />
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
