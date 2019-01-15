import { zipObjectDeep, merge } from 'lodash';
import reduceVariants from './reduceVariants';

const reduce = (rndm, state) => (o, { variants, setters }) => {
  const isTrue = variants.reduce(reduceVariants(state) ,true);

  const keys = Object.keys(setters);
  const values = Object.values(setters);

  if (isTrue) return merge(Array.isArray(rndm) ? [] : {}, rndm, zipObjectDeep(keys, values));
  return o;
};

export default reduce;
