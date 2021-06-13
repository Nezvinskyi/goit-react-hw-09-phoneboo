import React, { Component, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import MyLoader from './components/Loader/Loader';
import { getIsLoading } from './redux/loader/loader-selector';
import { authOperations } from './redux/auth';
import AppBar from './components/AppBar';
import PrivatRoute from './components/PrivatRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const ContactsView = lazy(() => import('./views/ContactsView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <div className="container">
        <AppBar />
        <Suspense fallback={<MyLoader />}>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <PublicRoute
              restricted
              redirectTo="/contacts"
              path="/register"
              component={RegisterView}
            />
            <PublicRoute restricted redirectTo="/contacts" path="/login" component={LoginView} />
            <PrivatRoute path="/contacts" component={ContactsView} redirectTo="/login" />
          </Switch>
        </Suspense>
        {this.props.isLoading && <MyLoader />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
