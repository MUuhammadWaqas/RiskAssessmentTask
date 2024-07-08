import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {useDispatch} from 'react-redux';
import {setAnswer} from '../src/store/slices/questionnaireSlice';
import {Question} from '../src/components/Question';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('Question component', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    //@ts-ignore
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const question = {
    id: '1',
    text: 'Sample Question',
    options: [
      {label: 'Option A', value: 1},
      {label: 'Option B', value: 2},
    ],
  };

  it('renders correctly with options', () => {
    const {getByText} = render(
      <Question item={question} selectedOption={null} />,
    );
    expect(getByText('Sample Question')).toBeTruthy();
    expect(getByText('Option A')).toBeTruthy();
    expect(getByText('Option B')).toBeTruthy();
  });

  it('handles option selection correctly', () => {
    const {getByText} = render(
      <Question item={question} selectedOption={null} />,
    );
    fireEvent.press(getByText('Option A'));
    expect(mockDispatch).toHaveBeenCalledWith(
      setAnswer({questionId: '1', answer: {label: 'Option A', value: 1}}),
    );
  });
});
