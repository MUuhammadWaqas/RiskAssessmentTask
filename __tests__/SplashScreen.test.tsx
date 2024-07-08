import React from 'react';
import {render, waitFor, act} from '@testing-library/react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {SplashScreen} from '../src/screens/Splash';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: jest.fn(),
  };
});

describe('SplashScreen', () => {
  let dispatchMock: jest.Mock;

  beforeAll(() => {
    jest.useFakeTimers();
    dispatchMock = jest.fn();
    (useNavigation as jest.Mock).mockReturnValue({
      dispatch: dispatchMock,
    });
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('renders correctly', () => {
    const {getByTestId} = render(<SplashScreen />);
    expect(getByTestId('splash-container')).toBeTruthy();
    expect(getByTestId('splash-image')).toBeTruthy();
  });

  it('navigates to Questionnaire screen after 2 seconds', async () => {
    render(<SplashScreen />);

    // Simulate the passing of time
    act(() => {
      jest.advanceTimersByTime(2000);
    });

    // Check if dispatch has been called with the correct action
    await waitFor(() => {
      expect(dispatchMock).toHaveBeenCalledWith(
        CommonActions.reset({
          routes: [{name: 'Questionnaire'}],
        }),
      );
    });
  });
});
