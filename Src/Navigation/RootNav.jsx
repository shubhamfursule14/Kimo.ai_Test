import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import MyShifts from '../MainScreen/MyShifts';
import AvailableShift from '../MainScreen/AvailableShift';
import Hula from '../MainScreen/Hula';
import Vulcano from '../MainScreen/Vulcano';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <StatusBar backgroundColor={'#000'} animated={true} barStyle={'light-content'} /> */}
      <Stack.Navigator
        initialRouteName="AvailableShift"
        // screenOptions={{
        //   headerShown: false,
        //   gestureEnabled: false,
        //   cardStyleInterpolator: ({ current: { progress } }) => ({
        //     cardStyle: {
        //       opacity: progress,
        //     },
        //   }),
        //   cardStyle: { backgroundColor: '#FFFFFF' },
        // }}
        >
        <Stack.Screen
          name="MyShifts"
          component={MyShifts}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="AvailableShift" component={AvailableShift} />
        <Stack.Screen name="Hula" component={Hula} />
        <Stack.Screen name="Vulcano" component={Vulcano} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
