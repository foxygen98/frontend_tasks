import React from 'react';
import {render, cleanup, fireEvent, screen} from '@testing-library/react';
import Button from '../Button';

const onClick = jest.fn();

describe('<Button />', () => {
  afterEach(cleanup);

  it('should render button', () => {
    const wrapper = render(<Button buttonText="Button" />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });

  it('should be clickable', () => {
    const wrapper = render(<Button buttonText="Button" onClick={onClick}/>);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });

  it('onClick should be called', () => {
    render(<Button buttonText="Button" onClick={onClick}/>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });
})
