import React, {useState, useEffect} from 'react'; 
import {
    ScrollView, 
    StyleSheet, 
    TouchableOpacity,
    Text, 
    TextInput,
    Image,
    View,
    Alert,
    KeyboardAvoidingView,
    Animated,
    Keyboard
} from 'react-native';
import {Input} from 'react-native-elements';
import '../../FirebaseServices/FirebaseServices';
import firebase from 'firebase';

const Login = ({navigation}) =>  { 
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');
    const [Logo] = useState(new Animated.ValueXY({x: 300, y:300 }));
    
    useEffect(()=>{
        KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);
    },[]);
    keyboardDidShow = () =>{
        Animated.parallel([
            Animated.timing(Logo.x,{
                toValue: 100,
                duration: 100,
            }),
            Animated.timing(Logo.y,{
                toValue: 100,
                duration: 100,
            }),
        ]).start();
    }
    keyboardDidHide = ()=>{
        Animated.parallel([
            Animated.timing(Logo.x,{
                toValue: 300,
                duration: 100,
            }),
            Animated.timing(Logo.y,{
                toValue: 300,
                duration: 100,
            }),
        ]).start();
    }

    Logar = async () =>{
      try{  
        await firebase.auth().signInWithEmailAndPassword(Email, Senha);
        navigation.navigate('HomePage');
      }catch(err){
          Alert.alert('Erro', err.message)
      }  
    }

    return(
        <> 
           <KeyboardAvoidingView style={Styles.Container}>
                <View style={Styles.Logo}>
                    <Animated.Image
                        style={{height: Logo.x, width: Logo.y}}
                        source={require('../../images/LogoTipo/Logotipo-Color-White-Map-Top-Center.png')}
                    />
                </View> 
                <View style={Styles.Form}>
                    <Input
                        placeholder="E-mail"
                        textContentType="emailAddress"
                        autoCompleteType="email"
                        keyboardType="email-address"
                        value={Email}
                        onChangeText={(text) => {setEmail(text);}}
                        leftIcon={
                            <Image source={require('../../images/InputIcons/icon-user.png')}
                            style={Styles.IconUser}
                            />
                        }
                    /> 
                    <Input
                        placeholder= 'Senha'
                        textContentType="password"
                        autoCompleteType="password"
                        secureTextEntry
                        value={Senha}
                        onChangeText={(text) => {setSenha(text);}}
                        leftIcon={
                            <Image source={require('../../images/InputIcons/icon-cadeado.png')}
                            style={Styles.IconSenha}
                            />
                        }/>
                </View>      
                <TouchableOpacity style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 20}}>
                    <Text style={Styles.TextSenha}> Esqueceu Sua Senha?</Text>
                    </TouchableOpacity> 
                <TouchableOpacity style={{
                    marginTop: 40,
                    width: '60%',
                    borderWidth: 3,
                    borderColor: '#00692b',
                    height: 50,
                    alignItems: 'center',
                    justifyContent: "center",
                    borderRadius: 50,}} 
                    onPress={Logar}>
                    <Text style={Styles.Text}>ENTRAR</Text>
                </TouchableOpacity>
                <View style={Styles.SocialIcons}>
                    <Text style={Styles.SocialText}>Entrar com</Text>
                    <TouchableOpacity>
                        <Image source={require('../../images/SocialIcons/ícongoogle.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>  
                        <Image source={require('../../images/SocialIcons/iconfacebook.png')} />
                    </TouchableOpacity>
                </View>
                <View style={Styles.Cadastro}>
                    <Text style={Styles.Pergunta}>Não é Cadastrado? </Text>
                    <TouchableOpacity style={Styles.InputCadastro} onPress={()=>{navigation.navigate('Cadastro');}}>  
                        <Text style={Styles.TextCadastro}>
                            Clique Aqui
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </>
    );
    Login.navigationOptions = {
        title: 'Login',
    }
 }
 
export default Login;

const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginTop: -60,
        
    },
    Logo: {
        width: '100%',
        backgroundColor: '#00692b',
        height: '50%',
        alignItems: "center",
        justifyContent: "center"
    },
    Form:{
        width: '80%',
        height: '14%',
        justifyContent: 'space-between',
        marginTop: 15
    }, 
    Input: {
        width: '70%',
        borderWidth: 1,
        borderBottomColor: '#e3e3e3',
        borderLeftColor: '#fff',
        borderTopColor: '#fff',
        borderRightColor: '#fff'
    },
    IconUser: {
        width: 30,
        height: 30,
        marginLeft: -10
    },
    IconSenha: {
        width: 40,
        height: 40,
        marginLeft: -15
    },
    Text: {
        color: '#00692b',
        fontWeight: 'bold',
        fontSize: 16
    },
    TextSenha: {
        marginTop: 20,
        color: '#00692b',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontSize: 15
    },
    SocialIcons: {
        flexDirection: "row",
        marginTop: 20,
        justifyContent: "space-between"
    },
    SocialText: {
        color: '#00692b',
        textDecorationLine: "underline",
        fontWeight: 'bold',
        marginRight: 10,
        fontSize: 15,
        marginTop: 10
    },
    Cadastro: {
        flexDirection: 'row',
        marginTop: 15
    },
    InputCadastro: {

    },
    TextCadastro: {
        fontSize: 15,
        color: '#00692b',
        textDecorationLine: "underline",
        fontWeight: 'bold'
    },
    Pergunta:{
        fontSize: 15,
        color: '#00692b',
        fontWeight: 'bold'
    }

});