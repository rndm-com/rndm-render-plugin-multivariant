import OPERATORS from './OPERATORS';

const reduce = (state) => (o, i) => {
  const { getter, operator, value } = i;
  const comparison = OPERATORS[operator] || OPERATORS['==='];
  return o && comparison(state, getter, value)
};

export default reduce;
