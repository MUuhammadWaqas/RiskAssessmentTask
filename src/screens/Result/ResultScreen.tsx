import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {clearAnswers} from '../../store/slices/questionnaireSlice';
import CustomButton from '../../components/CustomButton/CustomButton';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import ProgressBar from 'react-native-progress/Bar';
import {Colors} from '../../theme';
import {styles} from './styles';

const ResultScreen: React.FC<{navigation: any}> = ({navigation}) => {
  const route = useRoute<RouteProp<RootStackParamList, 'Result'>>();

  const {score, riskCategory} = route.params;
  const dispatch = useDispatch();
  const opacity = useSharedValue(0);

  const handleRetake = () => {
    dispatch(clearAnswers());
    navigation.navigate('Questionnaire');
  };

  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: 2000,
      easing: Easing.inOut(Easing.ease),
    });
  }, [opacity]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.card, animatedStyle]}>
        <Text style={styles.title}>Your Risk Profile</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Score:</Text>
          <Text style={styles.value}>{score}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Category:</Text>
          <Text style={styles.value}>{riskCategory?.riskCategory}</Text>
        </View>
        <ProgressBar
          progress={riskCategory?.progress}
          width={250}
          color={riskCategory?.color}
          borderRadius={5}
          animationType="spring"
          style={styles.progressBar}
        />
      </Animated.View>
      <CustomButton
        title="Retake Test"
        onPress={handleRetake}
        backgroundColor={Colors.gray}
        textColor={Colors.white}
        width="90%"
      />
    </View>
  );
};

export default ResultScreen;
