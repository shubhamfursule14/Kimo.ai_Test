import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const {height, width} = Dimensions.get('screen');
export default function TabBar(props) {
  const [index, setIndex] = useState(0);
  // useEffect(() => {
  //   setIndex(props.state.index);
  // }, [props.state.index]);

  // console.log("index",index);
  return (
    <>
      <View style={{backgroundColor: 'rgba(209, 209, 214, 1)', height: 1}} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 70,
          backgroundColor: 'transparent',
          borderTopColor: 'grey',
          // borderTopWidth:1,
          alignItems: 'center',
          marginHorizontal: 0,
          paddingRight: 0,
          zIndex: 1,
          marginBottom: 0,
          // paddingTop:'3%'
        }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('AvailableShift');
            setIndex(0);
          }}
          style={{
            height: 'auto',
            bottom: 5,
            top: 1,
            width: '31%',
            flex: 1.5,
            // padding: 5,
            
          }}>
          <View style={{alignItems: 'center'}}>
            <Icon
              name="home"
              size={25}
              color={index === 0 ? '#008080' : '#000'}
            />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                fontWeight: '400',

                textTransform: 'capitalize',
                color: index === 0 ? '#008080' : '#000000',
              }}>
              Home
            </Text>
          </View>
          {index === 0 && (
            <View
              style={{backgroundColor: '#008080', height: 5, width: '100%',}}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('MyShifts');
            setIndex(1);
          }}
          style={{
            height: 'auto',
            bottom: 5,
            top: 1,
            marginVertical: 4,
            width: '31%',
            flex: 1.5,
            padding: 5,
          }}>
          <View style={{alignItems: 'center'}}>
            <Icon1
              name="surfing"
              size={25}
              color={index === 1 ? '#008080' : '#000'}
            />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                fontWeight: '400',

                textTransform: 'capitalize',
                // fontFamily: FONT.Regular,
                color: index === 1 ? '#008080' : '#000000',
              }}>
              surfing
            </Text>
          </View>
          {index === 1 && (
            <View
              style={{backgroundColor: '#008080', height: 5, width: '100%'}}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Hula');
            setIndex(2);
          }}
          style={{
            height: 'auto',
            bottom: 5,
            top: 1,
            marginVertical: 4,
            width: '31%',
            flex: 1.5,
            padding: 5,
          }}>
          <View style={{alignItems: 'center'}}>
            <MaterialIcons
              name="nightlife"
              size={25}
              color={index === 2 ? '#008080' : '#000'}
            />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                fontWeight: '400',

                textTransform: 'capitalize',
                // fontFamily: FONT.Regular,
                color: index === 2 ? '#008080' : '#000000',
              }}>
              Hula
            </Text>
          </View>
          {index === 2 && (
            <View
              style={{backgroundColor: '#008080', height: 5, width: '100%'}}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Vulcano');
            setIndex(3);
          }}
          style={{
            height: 'auto',
            bottom: 5,
            top: 1,
            marginVertical: 4,
            width: '31%',
            flex: 1.5,
            padding: 5,
          }}>
          <View style={{alignItems: 'center'}}>
            <MaterialIcons
              name="filter-hdr"
              size={25}
              color={index === 3 ? '#008080' : '#000'}
            />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                fontWeight: '400',

                textTransform: 'capitalize',
                // fontFamily: FONT.Regular,
                color: index === 3 ? '#008080' : '#000000',
              }}>
              Vulcano
            </Text>

            {index === 3 && (
              <View
                style={{backgroundColor: '#008080', height: 5, width: '100%'}}
              />
            )}
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}
