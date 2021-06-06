import AsyncStorage from '@react-native-async-storage/async-storage';
import {v4} from 'uuid';
import dispatch from './_utils/dispatch';
import { AB_TEST_IDENTIFIER } from './_constants';

const middleware = store => next => action => {
  const { type } = action;
  switch (type) {
    case 'APPLICATION_DID_LAUNCH': {
      const uuid = v4();
      AsyncStorage.getItem(AB_TEST_IDENTIFIER)
        .then(id => dispatch(store, id || uuid))
        .catch(() => dispatch(store, uuid));
      break;
    }
    default: break;
  }
  return next(action);
};

export default middleware;
