import { AsyncStorage } from 'react-native';
import UUID from 'uuid/v4';
import dispatch from './_utils/dispatch';
import { AB_TEST_IDENTIFIER } from './_constants';

const middleware = store => next => action => {
  const { type } = action;
  switch (type) {
    case 'APPLICATION_DID_LAUNCH': {
      const uuid = UUID();
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
