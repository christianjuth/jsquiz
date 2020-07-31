import React from 'react';
import renderer from 'react-test-renderer';
import Divider from '../Divider';

describe('<Index />', () => {

  test('renders correctly', () => {
    const tree = renderer.create(<Divider/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});