import React from 'react';
import {render, fireEvent, waitFor, act} from '@testing-library/react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Alert} from 'react-native';
import {QuestionnaireScreen} from '../src/screens/Questionnaire';
import {clearAnswers} from '../src/store/slices/questionnaireSlice';
import {questions} from '../src/screens/Questionnaire/constants';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock('react-native/Libraries/Alert/Alert', () => ({
  alert: jest.fn(),
}));

const mockNavigate = jest.fn();

describe('QuestionnaireScreen', () => {
  const mockDispatch = jest.fn();
  const mockState = {
    answers: [],
    score: 0,
  };

  beforeEach(() => {
    //@ts-ignore
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
    //@ts-ignore
    (useSelector as jest.Mock).mockReturnValue(mockState);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const {getByText} = render(
      <QuestionnaireScreen navigation={{navigate: mockNavigate}} />,
    );
    questions.forEach(question => {
      expect(getByText(question.text)).toBeTruthy();
    });
  });

  it('handles retake correctly', () => {
    const {getByText} = render(
      <QuestionnaireScreen navigation={{navigate: mockNavigate}} />,
    );
    fireEvent.press(getByText('Retake Test'));
    expect(mockDispatch).toHaveBeenCalledWith(clearAnswers());
  });

  it('handles submit correctly with complete answers', async () => {
    //@ts-ignore
    mockState.answers = questions.map(q => ({
      questionId: q.id,
      answer: q.options[0],
    }));

    const {getByText} = render(
      <QuestionnaireScreen navigation={{navigate: mockNavigate}} />,
    );

    await act(async () => {
      fireEvent.press(getByText('Submit'));
    });

    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalled();
    });

    act(() => {
      //@ts-ignore
      const [, , buttons] = Alert.alert.mock.calls[0]; // Destructure to get the buttons array
      const submitButton = buttons.find(
        (button: any) => button.text === 'Submit',
      );
      submitButton.onPress();
    });

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(clearAnswers());
      expect(mockNavigate).toHaveBeenCalledWith('Result', expect.anything());
    });
  });

  it('handles incomplete submit correctly', async () => {
    //@ts-ignore
    mockState.answers = questions.slice(0, 2).map(q => ({
      questionId: q.id,
      answer: q.options[0],
    }));

    const {getByText} = render(
      <QuestionnaireScreen navigation={{navigate: mockNavigate}} />,
    );

    await act(async () => {
      fireEvent.press(getByText('Submit'));
    });

    await waitFor(() => {
      expect(Alert.alert).toHaveBeenCalled();
    });

    act(() => {
      //@ts-ignore
      const [title, message, buttons] = Alert.alert.mock.calls[0];
      expect(title).toBe('Incomplete Test');
      expect(message).toBe('Please answer all questions before submitting.');

      const okButton = buttons.find((button: any) => button.text === 'Ok');
      okButton.onPress();
    });

    expect(mockDispatch).not.toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
