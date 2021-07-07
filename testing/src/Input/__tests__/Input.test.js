import React from 'react';
import {render, screen, fireEvent, cleanup} from '@testing-library/react';
import Input from '../Input';

describe('<Input />', () => {
  afterEach(cleanup);

  it('should render input', () => {
    const wrapper = render(<Input value='value' />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });

  it('should change', () => {
    render(<Input value="value" />);
    fireEvent.change(screen.getByRole('textbox'), { 
      target: { value: 'changed' }, 
    });
    expect(screen.getByDisplayValue('changed')).toBeInTheDocument();
  });
})
