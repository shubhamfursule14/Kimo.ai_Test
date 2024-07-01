import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  ScrollView,
  Platform,
  BackHandler,
  Alert,
  SafeAreaView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
const AvailableShift = props => {
  const [Index, setIndex] = useState(0);
  const Data = [
    {
      Image: require('../assets/Images/Image.png'),
      Heading: 'Surfing',
      Description: 'Best Hawaiian islands for surfing.',
    },
    {
      Image: require('../assets/Images/Rectangle1.png'),
      Heading: 'Hula',
      Description: 'Try it yourself.',
    },
    {
      Image: require('../assets/Images/Rectangle2.png'),
      Heading: 'Vulcanoes',
      Description: 'Vulcanoes',
    },
  ];

  const Catergories = [
    {
      title: 'Adventure',
    },
    {
      title: 'Culinary',
    },
    {
      title: 'Eco-tourism',
    },
    {
      title: 'Family.',
    },
    {
      title: 'Sport.',
    },
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFF'}}>
      <ScrollView style={{flex: 1, backgroundColor: '#FFFF'}}>
        <View style={styles.Top}>
          <Image
            source={require('../assets/Images/Aloha.png')}
            style={{height: 35, width: 94, alignSelf: 'center', margin: 18}}
          />
        </View>
        <Image
          source={require('../assets/Images/Head.png')}
          style={{height: 480, width: '100%', alignSelf: 'center', margin: 22}}
        />
        <Text style={[styles.Highlights,{fontFamily:"IBMPlexMono-Bold"}]}>Highlights</Text>
        <FlatList
          data={Data}
          contentContainerStyle={styles.contentContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View style={styles.itemContainer}>
                <Image source={item.Image} style={styles.image} />
                <View style={{width: '90%', alignSelf: 'center', margin: '2%',}}>
                  <Text style={styles.heading}>{item.Heading}</Text>
                  <Text style={styles.description}>{item.Description}</Text>
                  <TouchableOpacity style={styles.circle}>
                    <Icon name="arrowright" size={25} color="#008080" />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
        <View
          style={{
            backgroundColor: '#E6F2F2',
            flex: 1,
          }}>
          <Text style={styles.Catergories}>Catergories</Text>
          <FlatList
            data={Catergories}
            contentContainerStyle={{marginBottom: 20}}
            // horizontal={true}
            // showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View style={styles.itemContainer1}>
                  <Text
                    style={[
                      styles.heading,
                      {
                        color: '#001A1A',
                        alignSelf: 'center',
                        fontFamily:'IBMPlexMono-Regular',
                        marginBottom:0
                      },
                    ]}>
                    {item.title}
                  </Text>
                  <Icon name="arrowright" size={25} color="#008080" />
                </View>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />

          <Text style={[styles.Highlights,{fontFamily:'IBMPlexMono-Bold',marginBottom:4}]}>Travel Guide</Text>
          <View style={styles.Box}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%',
                alignSelf: 'center',
                margin: '4%',
              }}>
              <View>
                <Text style={[styles.Highlights, {marginLeft: 0,fontFamily:'IBMPlexMono-Bold',fontSize:24,marginBottom:2}]}>
                  Hadwin Malone
                </Text>
                <Text style={[styles.Highlights, {marginLeft: 0,fontFamily:'IBMPlexMono-Regular'}]}>
                  Guide since 2012
                </Text>
              </View>
              <Image
                source={require('../assets/Images/Ellipse.png')}
                style={{height: 74, width: 74,alignSelf:'center'}}
              />
            </View>
            <TouchableOpacity style={styles.contact}>
              <Text
                style={[
                  styles.Highlights,
                  {marginLeft: 0, alignSelf: 'center',color:"#008080",fontFamily:'IBMPlexMono-Bold'},
                ]}>
                Contact
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.buttonText}>Book a trip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AvailableShift;

const styles = StyleSheet.create({
  Top: {
    backgroundColor: '#ffffff',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  Highlights: {
    color: '#001A1A',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 20,
    marginVertical: 10,
  },
  Catergories: {
    color: '#001A1A',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 18,
    fontFamily:'IBMPlexMono-Bold',
    marginTop:'7%'
  },
  contentContainer: {
    marginBottom: "10%",
  },
  itemContainer: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 7,
    borderRadius: 8,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  image: {
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    height: 170,
    width: 350,
    marginBottom: 10,
  },
  heading: {
    // fontWeight: '600',
    fontSize: 16,
    marginBottom: 5,
    color: '#008080',
    fontFamily:"IBMPlexMono-Bold"
  },
  description: {
    fontSize: 14,
    color: '#001A1A',
    fontFamily:'IBMPlexMono-Regular',
    width:"70%"
  },
  circle: {
    backgroundColor: '#E6F2F2',
    height: 40,
    width: 40,
    borderRadius: 50,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Button: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor: '#008080',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
    alignSelf: 'center',
    margin: 11,
    fontFamily:'IBMPlexMono-Bold'
  },
  itemContainer1: {
    backgroundColor: 'white',
    margin: 10,
    alignContent: 'center',
    padding: 15,
    borderRadius: 7,
    // borderRadius: 8,
    width: '90%',
    // height:33,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Box: {
    backgroundColor: 'white',
    margin: 10,
    alignSelf: 'center',
    borderRadius: 7,
    borderRadius: 8,
    width: '90%',
    // height: 70,
    marginBottom: '18%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  contact: {
    width: '40%',
    borderColor: '#008080',
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: 'center',
    margin: '4%',
  },
});
