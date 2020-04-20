import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login/index';
import Cadastro from './pages/Cadastro/index';
import HomePage from './pages/Dashboard/index';

const Routes = createAppContainer(createSwitchNavigator({
    Login:Login,
    Cadastro: Cadastro,
    HomePage: HomePage,
}));

export default Routes;