import React from 'react';
import {Container, Text} from 'native-base';
const HomePage = () =>{
    return(
        <Container>
            <Text>
                Bem Vindo
            </Text>
        </Container>

    );
    
    HomePage.navigationOptions = {
        title: 'HomePage', 
    }


}

export default HomePage;