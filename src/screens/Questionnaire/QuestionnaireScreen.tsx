import React, {useCallback} from 'react';
import {View, FlatList, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {clearAnswers} from '../../store/slices/questionnaireSlice';
import {styles} from './styles';
import {questions} from './constants';

import CustomButton from '../../components/CustomButton/CustomButton';
import {Colors} from '../../theme';
import {Question} from '../../components/Question';
import {getRiskData} from '../../utils/calculateRisk';

const QuestionnaireScreen: React.FC<{navigation: any}> = ({navigation}) => {
  const dispatch = useDispatch();
  const {answers, score} = useSelector(
    (state: RootState) => state.questionnaire,
  );

  const handleSubmit = () => {
    if (answers?.length < questions?.length) {
      Alert.alert(
        'Incomplete Test',
        'Please answer all questions before submitting.',
        [{text: 'Ok', onPress: () => {}}],
      );
    } else {
      Alert.alert('Submit Test', 'Are you sure you want to submit your test?', [
        {text: 'Cancel', onPress: () => {}, style: 'cancel'},
        {
          text: 'Submit',
          onPress: () => {
            const riskCategory = getRiskData(score);
            navigation.navigate('Result', {score, riskCategory});
            dispatch(clearAnswers());
          },
        },
      ]);
    }
  };

  const handleRetake = useCallback(() => {
    dispatch(clearAnswers());
  }, [dispatch]);

  const renderItem = useCallback(
    ({item}: any) => (
      <Question
        {...{item}}
        selectedOption={
          answers.find(ans => ans.questionId === item.id)?.answer ?? null
        }
      />
    ),
    [answers],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={questions}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={renderItem}
      />
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Retake Test"
          onPress={handleRetake}
          backgroundColor={Colors.white}
          textColor={Colors.gray}
          width="40%"
        />
        <CustomButton
          title="Submit"
          onPress={handleSubmit}
          backgroundColor={Colors.gray}
          textColor={Colors.white}
          width="40%"
        />
      </View>
    </View>
  );
};

export default QuestionnaireScreen;
