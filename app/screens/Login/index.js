import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
//import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';

import * as loginActions from 'app/actions/loginActions';
import styles from './styles';

export default function Login() {
  const id = useSelector(state => state.loginReducer.id);
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.login}>Login Status : {id}</Text>
        <TextInput
          value={username}
          onChangeText={(text) => setUsername(text)}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={(text) => setUsername(text)}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <Button icon="login" mode="outlined" onPress={onLogin}>
          Login
        </Button>
      </View>
    </View>
  );
}
