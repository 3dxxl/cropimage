import React from 'react';
import ReactDOM from 'react-dom';
import Crop from './crop';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Crop />, div);
  ReactDOM.unmountComponentAtNode(div);
});
