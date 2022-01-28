import Navbar from 'components/Navbar';
import Catalog from 'components/pages/Catalog';
import Home from 'components/pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/products">
        <Catalog />
      </Route>

    </Switch>
  </BrowserRouter>
);
export default Routes;
