import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import ClientMU from "./components/Clients/Client/ClientMU";
import ListOfClientsMU from "./components/Clients/ListOfClientsMU";
import HeaderMU from "./components/Header/Header mu";
import ListOfOrdersMU from "./components/Orders/ListOfOrdersMU";
import OrderMU from "./components/Orders/Order/OrderMU";
import AddClientMU from "./components/AddClient/AddClientMU";
import AddOrderMU from "./components/AddOrder/AddOrderMU";
import EditOrderMU from "./components/EditOrder/EditOrderMU";
import EditClientMU from "./components/EditClient/EditClientMU";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initUserSaga } from "./redux/actionCreators/userAC";
import PrivateRouterAdmin from "./components/PrivateRouter/PrivateRouterAdmin";
import PrivateRouterManager from "./components/PrivateRouter/PrivateRouterManager";
import PrivateRouterNoUser from "./components/PrivateRouter/PrivateRouterNoUser";
import Calendar from './components/Calendar/Calendar';
import LoginPage from './LoginPage/LoginPage';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);

  useEffect(() => {
    dispatch(initUserSaga());
  }, [])

  return (
    <Router>
      {user?._id ? <HeaderMU /> : null}
      <Switch>
        {user?._id ?
          <>
            <PrivateRouterManager component={Calendar} exact path='/' />

            <PrivateRouterAdmin component={AdminPanel} exact path='/admin' />

            <PrivateRouterManager component={ListOfClientsMU} exact path='/clients' />

            <PrivateRouterManager component={AddClientMU} path='/clients/new' />

            <PrivateRouterManager component={ClientMU} exact path='/clients/:id' />

            <PrivateRouterManager component={AddOrderMU} exact path='/orders/new' />

            <PrivateRouterManager component={EditClientMU} exact path='/clients/:id/edit' />

            <PrivateRouterManager component={EditOrderMU} exact path='/orders/:id/edit' />

            <PrivateRouterManager component={OrderMU} exact path='/orders/:id' />

            <PrivateRouterManager component={ListOfOrdersMU} exact path='/orders' />
          </>
          :
          <LoginPage />
          // <PrivateRouterNoUser component={LoginPage} path='/' />
        }
      </Switch>
    </Router>
  );
}

export default App;
