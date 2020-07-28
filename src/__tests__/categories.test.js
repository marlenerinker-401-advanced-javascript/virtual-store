import React from 'react';

import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'

import Categories from '../components/layout/categories.js';
import { Provider } from 'react-redux';
import store from '../components/store/store.js';

describe('Product tests', () => {

  it('renders correctly', () => {
    const DOM = renderer.create(<Provider store={store}><Categories/></Provider>).toJSON();
    expect(DOM).toMatchSnapshot();
  });

});