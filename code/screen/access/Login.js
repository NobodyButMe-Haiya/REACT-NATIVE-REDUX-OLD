import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {TextInput, Button, Text} from 'react-native-paper';
import Config from 'react-native-config';

// redux
import {useDispatch} from 'react-redux';
import { setAuthenticated, setToken } from '../../redux/Actions';
import authenticationService from '../../redux/Service/AuthenticationService';

/***
 * Login screen
 */
const LoginScreen = ({navigation}) => {
  // send back data to global tree session
  const dispatch = useDispatch();
  // set local sesstion
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // like this // we only dispatch easier logic easy to see ..
    const {success, token, error} = await authenticationService.Login(
      username,
      password,
    );

    if (success) {
      dispatch(setAuthenticated(true), () => {
        dispatch(setToken(token), () => {
          return navigation.navigate('Home');
        });
      });
      // we only need token to verify ..  but beware .. token injection existed so get information of the valid phone to double check ..
      // like imei ..  wrong imei .... out

      // we may send global object js profile to end user so cross in apps
      // dispatch(setUserInformation(userInformation ))
    } else {
      // Handle login failure
      console.error('Login error:', error);
      let errorMessage =
        typeof error === 'object' ? JSON.stringify(error) : error;
      Alert.alert(
        'System Error',
        errorMessage + ' IP config ' + Config.API_URL,
      );

      dispatch(setAuthenticated(false));
      dispatch(setToken(null));
      // ... other error handling
    }
  };

  const handleForgotPassword = () => {
    // Navigate to the forgot password screen
    navigation.navigate('ForgotPassword');
  };

  const handleRegister = () => {
    // Navigate to the register screen
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Awesome App</Text>

      <TextInput
        label="Username"
        value={username}
        onChangeText={text => setUsername(text)}
        style={styles.input}
      />

      <TextInput
        label="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />

      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>

      <Text style={styles.forgotPassword} onPress={handleForgotPassword}>
        Forgot Password?
      </Text>

      <Button mode="outlined" onPress={handleRegister} style={styles.button}>
        Register
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
  forgotPassword: {
    textAlign: 'center',
    marginTop: 16,
    color: 'blue',
  },
});

export default LoginScreen;
