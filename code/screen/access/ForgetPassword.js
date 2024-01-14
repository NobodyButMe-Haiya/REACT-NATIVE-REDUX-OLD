import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const ForgotPasswordScreen = () => {
  const handleResetPassword = () => {
    // Implement logic for resetting password (send email, etc.)
    console.log('Reset Password button pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>

      <TextInput
        label="Email"
        keyboardType="email-address"
        style={styles.input}
      />

      <Button mode="contained" onPress={handleResetPassword} style={styles.button}>
        Reset Password
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

export default ForgotPasswordScreen;