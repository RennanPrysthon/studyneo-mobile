import React, { useState, useContext } from 'react';

import {
  Container,
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

import AuthContext from '../../contexts/auth';
import { useNavigation, StackActions } from '@react-navigation/native';
import Top from '../../assets/top1.svg';
import Logo from '../../assets/logo.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const { signIn } = useContext(AuthContext);
  const navigation = useNavigation();

  const handlerCadastrar = () => navigation.dispatch(StackActions.push("SignOn"))

  const handlerLogar = () => signIn(email, senha);

  return (
    <Container>
      <Top width={'100%'} />
      <Logo />
      <Form>
        <Input placeholder="Email" value={email} onChangeText={setEmail} />
        <Input placeholder="Senha" secureTextEntry={true} value={senha} onChangeText={setSenha} />
        <Esqueci>Esqueci a senha</Esqueci>
        <Submit onPress={handlerLogar} >
          <SubmitText>
            Entrar
					</SubmitText>
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
    </Container>
  );
}

export default Login;
