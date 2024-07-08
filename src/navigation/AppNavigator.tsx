import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ResultScreen from '../screens/Result/ResultScreen';
import SplashScreen from '../screens/Splash/SplashScreen';
import QuestionnaireScreen from '../screens/Questionnaire/QuestionnaireScreen';
import {Colors} from '../theme';
const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.alert,
          },
          headerTintColor: Colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Questionnaire"
          component={QuestionnaireScreen}
          options={{
            headerLeft: null,
            gestureEnabled: false,
          }}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{
            title: 'Result',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
