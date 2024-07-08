import React from 'react';
import {TouchableOpacity, Text, ViewStyle} from 'react-native';
import {styles} from './styles';
import {Colors} from '../../theme';

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  width = '100%',
  backgroundColor = Colors.gray,
  textColor = Colors.white,
  testID = 'custom-button',
}) => {
  return (
    <TouchableOpacity
      testID={testID}
      style={[styles.button, {width, backgroundColor} as ViewStyle]}
      onPress={onPress}>
      <Text style={[styles.text, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(CustomButton);
