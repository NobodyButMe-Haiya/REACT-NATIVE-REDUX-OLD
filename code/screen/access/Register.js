import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const RegisterScreen = () => {
  const handleRegister = () => {
    // Implement logic for user registration
    console.log('Register button pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput
        label="Username"
        style={styles.input}
      />

      <TextInput
        label="Email"
        keyboardType="email-address"
        style={styles.input}
      />

      <TextInput
        label="Password"
        secureTextEntry
        style={styles.input}
      />

      <Button mode="contained" onPress={handleRegister} style={styles.button}>
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
});

export default RegisterScreen;