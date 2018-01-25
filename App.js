import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyBzg5yuCozvwKW4s1N17TWjozVZgTeZT8M',
      authDomain: 'manager-3ada7.firebaseapp.com',
      databaseURL: 'https://manager-3ada7.firebaseio.com',
      projectId: 'manager-3ada7',
      storageBucket: 'manager-3ada7.appspot.com',
      messagingSenderId: '688496148637'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      /* eslint-disable no-underscore-dangle */
      /* eslint-disable no-undef */
      <Provider
        store={
        createStore(reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__())}
        /* eslint-disable no-underscore-dangle */
        /* eslint-disable no-undef */
      >
        <LoginForm />
      </Provider>
    );
  }
}
