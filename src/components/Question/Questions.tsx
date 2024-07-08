import React, {useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {setAnswer} from '../../store/slices/questionnaireSlice';
import {styles} from './styles';

const OptionItem: React.FC<{
  option: Option;
  isSelected: boolean;
  onSelect: (option: Option) => void;
}> = ({option, isSelected, onSelect}) => {
  return (
    <TouchableOpacity
      style={[styles.option, isSelected && styles.selectedOption]}
      onPress={() => onSelect(option)}>
      <View
        style={[styles.radioCircle, isSelected && styles.selectedRadioCircle]}>
        {isSelected && <View style={styles.selectedRb} />}
      </View>
      <Text
        style={[styles.optionText, isSelected && styles.selectedOptionText]}>
        {option?.label}
      </Text>
    </TouchableOpacity>
  );
};

const Question: React.FC<QuestionCardProps> = ({item, selectedOption}) => {
  const {id, text, options} = item;
  const dispatch = useDispatch();

  const handleSelect = useCallback(
    (option: Option) => {
      dispatch(setAnswer({questionId: id, answer: option}));
    },
    [dispatch, id],
  );

  const renderOption: ListRenderItem<Option> = useCallback(
    ({item}) => (
      <OptionItem
        option={item}
        isSelected={selectedOption?.label === item.label}
        onSelect={handleSelect}
      />
    ),
    [handleSelect, selectedOption],
  );

  return (
    <View style={styles.card}>
      <Text style={styles.questionText}>{text}</Text>
      <FlatList
        data={options}
        renderItem={renderOption}
        keyExtractor={item => item?.label}
      />
    </View>
  );
};

export default React.memo(Question);
