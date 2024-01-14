import React, {useEffect} from 'react';
import {View, Text, StyleSheet, BackHandler, Alert} from 'react-native';
import {useNavigationState, useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setAuthenticated} from '../../redux/Reducer/AuthenticationSlice';

const HomeScreen = () => {
  const navigation = useNavigation();
  const routeIndex = useNavigationState(state => state.index);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleBackPress = () => {
      if (navigation.isFocused() && routeIndex === 0) {
        // Display alert when back button is pressed on the initial screen
        Alert.alert(
          'Logout',
          'Are you sure you want to logout?',
          [
            {
              text: 'Cancel',
              onPress: () => null,
              style: 'cancel',
            },
            {
              text: 'Logout',
              onPress: () => {
                // Perform logout actions here
                // For example, navigate to the login screen
                // Implement logout logic, e.g., clear user data, navigate to login
                dispatch(setAuthenticated(false), () => {
                  // wait tree complete then navigate
                  navigation.navigate('Login');
                });
              },
            },
          ],
          {cancelable: false},
        );
        return true; // Do not exit the app
      }
      return false; // Allow default back behavior
    };

    // Add event listener for the back button press
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );

    // Clean up the event listener when the component unmounts
    return () => {
      backHandler.remove();
    };
  }, [navigation, routeIndex]);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
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

export default HomeScreen;
