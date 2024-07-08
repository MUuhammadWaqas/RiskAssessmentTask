import {StyleSheet} from 'react-native';
import {Colors} from '../../theme';

export const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: Colors.gray,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
