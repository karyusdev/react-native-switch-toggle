import {
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

export type SwitchToggleProps = {
  testID?: string;
  switchOn: boolean;
  onPress: () => void;
  containerStyle?: ViewStyle;
  circleStyle?: ViewStyle;
  backgroundColorOn?: string;
  backgroundColorOff?: string;
  backgroundImageOn?: React.ReactElement;
  backgroundImageOff?: React.ReactElement;
  circleColorOff?: string;
  circleColorOn?: string;
  duration?: number;
  type?: number;
  buttonText?: string;
  backTextRight?: string;
  backTextLeft?: string;
  buttonTextStyle?: StyleProp<TextStyle>;
  textRightStyle?: StyleProp<TextStyle>;
  textLeftStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  // limitation: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/12202
  buttonContainerStyle?: StyleProp<ViewStyle>;
  rightContainerStyle?: StyleProp<ViewStyle>;
  leftContainerStyle?: StyleProp<ViewStyle>;
  RTL?: boolean;
}

declare function SwitchToggle(props: SwitchToggleProps): React.ReactElement;

export default SwitchToggle;