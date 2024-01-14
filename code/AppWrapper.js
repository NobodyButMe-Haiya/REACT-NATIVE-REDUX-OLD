import {Provider} from 'react-redux';
import Router from './Router';
import { Store } from './redux/Store';

console.log("store ?",Store);

const AppWrapper = () => {
  return (
    <Provider store={Store}>
      <Router />
    </Provider>
  );
};
export default AppWrapper;
