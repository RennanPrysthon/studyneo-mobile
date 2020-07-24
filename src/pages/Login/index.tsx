import React, { useState, useContext } from 'react';

import {
  Container,
  TopImage,
  LogoImage,
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

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const { signIn } = useContext(AuthContext);

  const handlerCadastrar = () => {

  }

  const handlerLogar = () => signIn(email, senha);

  return (
    <Container>
      <TopImage
        source={require('../../assets/top.png')}
      />
      <LogoImage
        source={require('../../assets/logo.png')}
      />
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
