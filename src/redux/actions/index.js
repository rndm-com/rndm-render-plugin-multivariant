import { RNDM_DID_SET_AB_TEST_IDENTIFIER } from '../types'

export const setABTestIdentifier = testIdentifier => ({
  type: RNDM_DID_SET_AB_TEST_IDENTIFIER,
  testIdentifier,
});
