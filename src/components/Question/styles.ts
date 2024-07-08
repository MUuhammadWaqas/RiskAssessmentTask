import {StyleSheet} from 'react-native';
import {Colors} from '../../theme';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: Colors.lightYellow,
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 6,
  },
  questionText: {
    color: Colors.gray,
    fontSize: 18,
    marginBottom: 15,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: Colors.lightYellow,
    borderWidth: 0.2,
    borderColor: Colors.black,
  },
  selectedOption: {
    backgroundColor: Colors.gray,
    borderWidth: 1,
    borderColor: Colors.white,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedRadioCircle: {
    borderColor: Colors.white,
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: Colors.white,
  },
  optionText: {
    color: Colors.gray,
  },
  selectedOptionText: {
    color: Colors.white,
  },
});
