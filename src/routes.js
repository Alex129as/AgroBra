import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login/index';
import Register from './pages/Register/index';
import HomePage from './pages/Dashboard/index';
import RecoverInPassword from './pages/Recover Password/index';

const Routes = createAppContainer(createSwitchNavigator({
    Login:Login,
    Register: Register,
    HomePage: HomePage,
    RecoverInPassword: RecoverInPassword,
}));

export default Routes;