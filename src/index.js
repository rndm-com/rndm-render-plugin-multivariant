import { Component } from 'react';
import { use } from '@rndm/render';
import components from './components';
import key from './_constants/PROJECT_KEY';
import multivariant from './redux/middleware';

const plugin = {
  key,
  components,
};

use(plugin);

export {
  multivariant,
}

export default plugin;
