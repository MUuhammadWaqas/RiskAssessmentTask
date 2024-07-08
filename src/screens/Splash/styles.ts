import {StyleSheet} from 'react-native';
import {Colors} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.alert,
  },
  text: {
    color: Colors.white,
    fontSize: 32,
    fontWeight: 'bold',
  },
  image: {
    width: '80%',
    height: '80%',
  },
});
