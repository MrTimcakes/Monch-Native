import React from 'react';
import renderer from 'react-test-renderer';

import EmptyComponent from '../EmptyComponent';

describe('<EmptyComponent />', () => {
  it('has 0 children', () => {
    const tree = renderer.create(<EmptyComponent />).toJSON();
    expect(tree.length).toBe(undefined);
  });
});