import React from 'react';

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

const Login: React.FC = () => {

	const handlerLogar = () => {

	}

	const handlerCadastrar = () => {

	}

	return (
		<Container>
			<TopImage
				source={require('../../assets/top.png')}
			/>
			<LogoImage
				source={require('../../assets/logo.png')}
			/>
			<Form>
				<Input placeholder="Email" />
				<Input placeholder="Senha" secureTextEntry={true} />
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
