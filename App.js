import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';
import configureStore from './src/ConfigureStore';


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
    const store = configureStore();
    return (
      <Provider store={store}>
        <View style={{ justifyContent: 'center', flex: 1 }}>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}
