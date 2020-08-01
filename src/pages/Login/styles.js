import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';
export const Container  = styled(LinearGradient).attrs({
    start: { x: 0.0, y: 0.0 },
    end: { x: 1.0, y: 1.0 },
    locations: [0, 0.3, 0.95],
    colors: ['#0d560c', '#049665', '#77fa92'],
  })`
    flex: 1;
`;
export const Global  = styled.KeyboardAvoidingView.attrs({
    behavior: 'height',
  })`
    flex: 1;
    margin-top: 30;
    margin-bottom: 30;
    margin-left: 30;
    margin-right: 30;
  `;
export const Body  = styled.View`
  flex: 1;
`;
export const Title = styled.View`
    flex: 0.5;
    text-align: center;
`;
export const Text  = styled.Text`
    color: ${(props) => props.color || '#0000'};
    font-weight: ${(props) => props.weight || 'normal'};
    font-size: ${(props) => props.fontSize || 15};
    text-align: center;
`;
export const Form  = styled.View`
    flex: 1;
    justify-content: space-between;
`;
export const Button = styled.TouchableOpacity`
    margin-top: 10%;
    margin-bottom: 30%;
    background: #e3e3e3;
    height: 50;
    width: 50%;
    border-radius: 40;
    justify-content: center;
    align-items: center;
    margin-left: 25%;
`;
export const Input = styled.TextInput`
    height: 50;
    width: 100%;
    background: #e3e3e3;
    border-radius: 40;
    text-align: center;
    margin-bottom: 7%;
`;
export const Links = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-left: -10;
  margin-right: -10;
  margin-top: 20%;
`;

export const Link = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Linha = styled.View`
  align-self: center;
  border-left-color: #000;
  border-left-width: 4;
  border-radius: 4;
  margin-left: 10;
  margin-right: 10;
  height: 40;
`;

