import React from 'react';
import {
    Container,
    Global,
    Body,
    Text,
    Form,
    Button,
    Input,
    Links,
    Link,
    Linha,
    Title
} from './styles';
import {ScrollView} from 'react-native';    

const Login = ({navigation}) => {
    return(
        <>
            <Container>
                <Global>
                    <Title>
                        <Text fontSize="40" color="#000">
                            Tela de Login
                        </Text>
                        <Text></Text>
                        <Text fontSize="18" color="#000">
                            Seja Bem Vindo ao AgroApp entre ou Cadastre-se
                            e Comece a Anuciar.
                        </Text>
                    </Title>
                    <Body>
                        <ScrollView>
                            <Form>
                                <Input  
                                    placeholder="E-mail"
                                    textContentType="emailAddress"
                                    autoCompleteType="email"
                                    keyboardType="email-address"/>
                                <Input  
                                    placeholder="Senha"
                                    textContentType="password"
                                    autoCompleteType="password"
                                    secureTextEntry/>
                                <Button>
                                    <Text 
                                    color="#000" 
                                    fontSize="16">
                                    Entrar
                                    </Text>
                                </Button>
                            </Form>
                        </ScrollView>
                        <Links>
                            <Link>
                                <Text fontSize="17" color="#000">Esqueceu sua senha?</Text>
                            </Link>
                            <Linha />
                            <Link>
                                <Text fontSize="17" color="#000" onPress={() => { navigation.navigate('Cadastro') }}>Não é Cadastrado?</Text>
                            </Link>
                        </Links>    
                    </Body>
                </Global>
            </Container>
        </>
    );
    Login.navigationOptions = {
        title: 'Login',
    }
}

export default Login;