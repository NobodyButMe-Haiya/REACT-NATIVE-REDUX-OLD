import Config from 'react-native-config';
const fetchNotifications = async (token) => {
  try {
    const response = await fetch(`${Config.API_URL}/notification.php`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Include any authentication headers if needed
      },
      body:JSON.stringify({token})
    });

    if (response.ok) {
      const data = await response.json();
      return {success: true, notifications: data};
    } else {
      return {success: false, error: 'Failed to fetch notifications'};
    }
  } catch (error) {
    console.error('Fetch notifications error:', error);
    return {success: false, error: 'Network error'};
  }
};

export default {fetchNotifications};
