// ProfileScreen.js
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

// redux
import {useDispatch} from 'react-redux';
import {setAuthenticated} from '../../redux/Actions';

const ProfileScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    // Implement logout logic, e.g., clear user data, navigate to login
    dispatch(setAuthenticated(false), () => {
      // wait tree complete then navigate
      navigation.navigate('Login');
    });
  };

  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
