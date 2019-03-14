//@flow
import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import rotasInternasComBreadcrumb from '../../rotas/rotasInternasComBreadcrumb';
import DefaultFooter from './DefaultFooter';
import DefaultHeader from './DefaultHeader';
import connect from "react-redux/es/connect/connect";
import type {Store} from "../flowTypes/flowTypes";

type Props = {
  store: Store,
  match: Object
}

type State = {

}

class DefaultLayout extends Component<Props, State> {


  componentDidMount() {

  }

  render() {

    return (
      <div className="app loader">
          <DefaultHeader />
        <div className="app-body">
          <main className="main">
              <Switch>
                {rotasInternasComBreadcrumb.map((route, idx) => {
                    return route.component ? (<ProtectedRota store={this.props.store} rules={route.rules} key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                        <route.component {...props} />
                      )} />)
                      : (null);
                  },
                )}
                <Redirect from="/" to="/dashboard" />
              </Switch>
          </main>
        </div>
        <DefaultFooter />
      </div>
    );
  }
}

const ProtectedRota = (props: any) => {
    return <Route key={props.key} exact={props.exact} render={props.render} path={props.path} />;
};

const mapStateToProps = store => {
  return {
    store: store
  }
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);
