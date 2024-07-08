import React, {useEffect} from 'react';
import {View, Image} from 'react-native';

import {CommonActions, useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const SplashScreen: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          routes: [{name: 'Questionnaire'}],
        }),
      );
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/RAK1.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;
