import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login/index';
import Cadastro from './pages/Cadastro/index'

const Routes = createAppContainer(createSwitchNavigator({
    Login:Login,
    Cadastro: Cadastro,
}));

export default Routes;