import {StyleSheet} from 'react-native';
import {Colors} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.defaultBackground,
    padding: 20,
  },
  card: {
    width: '90%',
    padding: 20,
    backgroundColor: Colors.white,
    borderRadius: 10,
    shadowColor: Colors.gray,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.gray,
    marginBottom: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    color: Colors.gray,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 18,
    color: Colors.gray,
  },
  progressBar: {
    marginTop: 20,
    alignSelf: 'center',
  },
});
