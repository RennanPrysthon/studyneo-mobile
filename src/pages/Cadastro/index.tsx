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
} from './styles';

import Top from '../../assets/top2.svg';
import Logo from '../../assets/imagotipo-horizontal.svg';

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
  const [loading, setLoading] = React.useState(false);
  const navigation = useNavigation();

  const able = React.useMemo(
    () => name !== '' && email !== '' && (pass !== '' && pass === confirmPass)
    , [name, email, pass, confirmPass]
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
  }

  const submitForm = async () => {
    if (!able) return showErros();
    if (loading) return;
    console.log(loading)
    setLoading(true);
    const user: Cadastro = {
      email,
      name,
      password: pass
    }
    try {
      const response = await api.post('users', user);
      showMessage({
        message: `${name} cadastrado!`,
        type: "success",
        duration: 1000
      });

      navigation.goBack();
      setLoading(false);
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
