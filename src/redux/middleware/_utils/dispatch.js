import { AsyncStorage } from 'react-native';
import { setABTestIdentifier } from '../../actions';
import { AB_TEST_IDENTIFIER } from '../_constants';

const dispatch = (store, identifier) => {
  store.dispatch(setABTestIdentifier(identifier));
  AsyncStorage.setItem(AB_TEST_IDENTIFIER, identifier);
};

export default dispatch;
