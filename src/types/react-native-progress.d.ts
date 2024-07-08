declare module 'react-native-progress/Bar' {
  import {Component} from 'react';
  import {ViewStyle} from 'react-native';

  interface ProgressBarProps {
    progress?: number;
    indeterminate?: boolean;
    width?: number | null;
    height?: number;
    borderWidth?: number;
    borderRadius?: number;
    useNativeDriver?: boolean;
    animated?: boolean;
    unfilledColor?: string;
    color?: string;
    borderColor?: string;
    style?: ViewStyle;
    animationType?: string;
  }

  export default class ProgressBar extends Component<ProgressBarProps> {}
}
