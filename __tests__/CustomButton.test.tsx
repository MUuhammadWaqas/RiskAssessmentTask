import React from 'react';
import {render} from '@testing-library/react-native';
import {CustomButton} from '../src/components/CustomButton';
import {TextStyle} from 'react-native';

describe('CustomButton', () => {
  const onPressMock = jest.fn();

  it('renders correctly with default styles', () => {
    const {getByText, getByTestId} = render(
      <CustomButton
        title="Submit"
        onPress={onPressMock}
        testID="custom-button"
      />,
    );
    const buttonElement = getByText('Submit');
    const touchableOpacityElement = getByTestId('custom-button');

    const touchableOpacityStyle = touchableOpacityElement.props.style;

    expect(touchableOpacityStyle).toMatchObject({
      width: '100%',
      backgroundColor: '#646464',
    });

    const textStyleArray = buttonElement.props.style as TextStyle[];
    const textStyle = textStyleArray.find(style => style.color);

    expect(textStyle).toMatchObject({
      color: '#ffffff',
    });
  });

  it('renders correctly with custom styles', () => {
    const {getByText, getByTestId} = render(
      <CustomButton
        title="Submit"
        backgroundColor="blue"
        textColor="yellow"
        width={200}
        onPress={onPressMock}
        testID="custom-button"
      />,
    );
    const buttonElement = getByText('Submit');
    const touchableOpacityElement = getByTestId('custom-button');

    // Check custom styles
    const touchableOpacityStyle = touchableOpacityElement.props.style;

    console.log('TouchableOpacity style (custom):', touchableOpacityStyle);

    expect(touchableOpacityStyle).toMatchObject({
      width: 200,
      backgroundColor: 'blue',
    });

    const textStyleArray = buttonElement.props.style as TextStyle[];
    const textStyle = textStyleArray.find(style => style.color);

    expect(textStyle).toMatchObject({
      color: 'yellow',
    });
  });
});
