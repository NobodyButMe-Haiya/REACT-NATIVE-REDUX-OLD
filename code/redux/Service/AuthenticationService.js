import Config from 'react-native-config';

/***
 * Login 
 * this example don't have callback. We don't intent as it fail on compile apk and 0 way to debug or trace error which we don't like !
 */
const Login = async (username, password) => {
  
  try {
    const response = await fetch(`${Config.API_URL}/login.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, password}),
    });
    if (response.ok) {
      const data = await response.json();
      return {success: true, token: data.token};
    } else {
      return {success: false, error: 'Invalid credentials'};
    }
  } catch (error) {
    console.error('Login error:', error);
    return {
      success: false,
      error:
        'Network error : ' + error.statusText + ' error code ' + error.status,
    };
  }
};
const Forget = async email => {
  try {
    const response = await fetch(`${Config.API_URL}/forgetPassword.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email}),
    });
    if (response.ok) {
      const data = await response.json();
      return {success: true, token: data.token};
    } else {
      return {success: false, error: 'Invalid email address '};
    }
  } catch (error) {
    console.error('Forget error:', error);
    return {success: false, error: 'Network error'};
  }
};
export default {Login, Forget};
