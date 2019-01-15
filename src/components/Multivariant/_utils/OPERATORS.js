import { get } from 'lodash';

const OPERATORS = Object.assign({
  '===': (state, getter, value) => get(state, getter) === value,
  '>': (state, getter, value) => get(state, getter) > value,
  '>=': (state, getter, value) => get(state, getter) >= value,
  '<': (state, getter, value) => get(state, getter) < value,
  '<=': (state, getter, value) => get(state, getter) <= value,
  '!': (state, getter) => !get(state, getter),
  '!!': (state, getter) => !!get(state, getter),
  'typeOf': (state, getter, value) => typeof get(state, getter) === value,
},[
  'includes',
  'startsWith',
  'endsWith',
].reduce((o, i) => {
  return Object.assign(o, {
    [i]: (state, getter, value) => {
      const sut = get(state, getter);
      return !!sut && typeof sut[i] === 'function' && sut[i](value);
    }
  })
}, {}));

export default OPERATORS;
