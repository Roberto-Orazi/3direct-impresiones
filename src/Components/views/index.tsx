import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from '../layout/Layout';
import { About } from './About';
import { Contact } from './Contact';
import { Home } from './Home';
import { Products } from './Products';

const Routes = () => (
  <Router> {/* Add the Router component */}
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/nosotros" exact component={About} />
        <Route path="/productos" exact component={Products} />
        <Route path="/cotiza" exact component={Contact} />
      </Switch>
    </Layout>
  </Router>
);

export default Routes;