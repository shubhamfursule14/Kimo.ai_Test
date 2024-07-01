import React, {Suspense,useEffect,  useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {View, ActivityIndicator,Keyboard} from 'react-native';
import MyShifts from '../MainScreen/MyShifts';
import AvailableShift from '../MainScreen/AvailableShift';
import { enableScreens } from 'react-native-screens';
// import TabBar from './bottomtab';
import HomeBottomTabbar from './TabBar';
import Vulcano from '../MainScreen/Vulcano';
import Hula from '../MainScreen/Hula';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

enableScreens();


const TabHelper = () => {

const [KeyboardStatus, setKeyboardStatus] = useState(false)
  // useEffect(() => {
  //   const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
  
  //     setKeyboardStatus(true);
  //   });
  //   const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
  //     setKeyboardStatus(false);
  
  //   });
  
  //   return () => {
  //     showSubscription.remove();
  //     hideSubscription.remove();
  //   };
  // }, []);
  return (

    <Tab.Navigator
      initialRouteName="MyShifts"
      backBehavior="initialRoute"
      tabBarPosition="bottom"
      swipeEnabled={false}
      screenOptions={{
        swipeEnabled: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {display: KeyboardStatus ? 'none' : 'flex'},
      }}
      lazy={true}
      lazyPreloadDistance={0}
       tabBar={props => KeyboardStatus ? <></> : <HomeBottomTabbar {...props} />}
      
      >
      <Tab.Screen
        name="MyShifts"
        component={MyShifts}
        options={{headerShown: false}}
      />
        <Tab.Screen
         name="AvailableShift"
         component={AvailableShift}
         options={{headerShown: false}}
       />
          <Tab.Screen
         name="Hula"
         component={Hula}
         options={{headerShown: false}}
       />
          <Tab.Screen
         name="Vulcano"
         component={Vulcano}
         options={{headerShown: false}}
       />
 
    </Tab.Navigator>
  );
};

export default TabHelper;
