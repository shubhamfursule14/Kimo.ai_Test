import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabHelper from './Src/Navigation/TabHelper';
import { enableScreens } from 'react-native-screens';

enableScreens();

const App = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <SafeAreaView style={{flex: 1, backgroundColor: 'rgba(0, 195, 233, 1)'}}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="TabHelper"
            screenOptions={{
              headerShown: false,
              gestureEnabled: false,
              cardStyleInterpolator: ({ current: { progress } }) => ({
                cardStyle: {
                  opacity: progress,
                },
              }),
              cardStyle: { backgroundColor: '#FFFFFF' },
            }}
          >
            <Stack.Screen name="TabHelper" component={TabHelper} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
      <SafeAreaView style={{backgroundColor: '#fff'}}></SafeAreaView>
    </>
  );
};

export default App;
