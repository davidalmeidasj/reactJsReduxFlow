import React from 'react';
import DefaultHeader from '../DefaultHeader';
import configureStore from 'redux-mock-store';
import {mount} from 'enzyme';
import {Provider} from "react-redux";
import moxios from 'moxios';
import {routerMiddleware} from 'connected-react-router'
import thunk from 'redux-thunk'
import {history} from "../../../../store";
import {initialStateUsuario} from "../../../Usuario/redux/usuarioReducer";
import {definirTokenStore, usuarioStore} from "../../../Usuario/redux/action";
import {logout} from "../../../Logout/redux/action";

const middlewares = [thunk, routerMiddleware(history)];
const mockStore = configureStore(middlewares);

describe("<DefaultHeader/>", () => {

  const usuarioResponse = {
    lastName: 'Teste',
    firstName: 'SobreTeste',
    perfis: ['ROLE_AA', 'ROLE_BB'],
    email: 'teste@gmail.com'
  };

  let store = {};

  beforeEach(function () {
    localStorage.clear();
    localStorage.token = 'token';
    moxios.install();

    store = mockStore({USUARIO: initialStateUsuario});

    moxios.stubRequest(/(auth\/user)/, {
      status: 200,
      response: usuarioResponse
    });
  });

  afterEach(function () {
    moxios.uninstall()
  });

  it('Recuperar Usuario', (done) => {

    mount(
      <Provider store={store}>
        <DefaultHeader />
      </Provider>
    );

    const actions = store.getActions();

    moxios.wait(() => {
      moxios.uninstall();

      expect(actions[actions.length -1]).toEqual(usuarioStore(usuarioResponse));
      expect(actions[actions.length -2]).toEqual(definirTokenStore());

      done();
    });
  });

  it('Button Logout', () => {

    const wrapper = mount(
      <Provider store={store}>
        <DefaultHeader />
      </Provider>
    );

    wrapper.find('.button-logout').at(0).props().onClick();

    const actions = store.getActions();

    expect(actions[actions.length -1]).toEqual(logout());
  });
});
