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
const Vulcano = props => {
  const [Index, setIndex] = useState(0);

  const Catergories = [
    {
      title: 'Adventure',
      Image: require('../assets/Images/Image1.png'),
    },
    {
      title: 'Culinary',
      Image: require('../assets/Images/Image2.png'),
    },
    {
      title: 'Eco-tourism',
      Image: require('../assets/Images/Image3.png'),
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
          source={require('../assets/Images/Rectangle1.png')}
          style={{height: 240, width: '100%', alignSelf: 'center', margin: 22}}
        />
       <Text style={[styles.Highlights,{width:'83%',fontFamily:"IBMPlexMono-Regular", letterSpacing:1}]}>
          Hawaii is the capital of modern surfing. This group of Pacific islands
          gets swell from all directions, so there are plenty of pristine surf
          spots for all.
        </Text>
        <Text style={[styles.Catergories,{marginTop:20,fontFamily:'IBMPlexMono-Bold'}]}>Top spots</Text>
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
                      marginLeft: '4%',
                      fontFamily:'IBMPlexMono-Regular'
                    },
                  ]}>
                  {item.title}
                </Text>
                <Image source={item.Image} style={styles.image} />
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
        <View
          style={{
            backgroundColor: '#E6F2F2',
            flex: 1,
            marginTop: '4%',
          }}>
           <Text
            style={[
              styles.Highlights,
              {
                fontFamily: 'IBMPlexMono-Bold',
              },
            ]}>Travel Guide</Text>
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

export default Vulcano;

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
    marginLeft: 20,
  },
  contentContainer: {
    marginBottom: 60,
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
    borderBottomRightRadius: 7,
    borderTopRightRadius: 7,
    height: 63,
    width: 120,
  },
  heading: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 5,
    color: '#008080',
  },
  description: {
    fontSize: 14,
    color: '#001A1A',
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
    // padding: 10,
    borderRadius: 7,
    // borderRadius: 8,
    width: '90%',
    // height:33,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
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

{
  /* <View style={[styles.TopTab]}>
  <TouchableOpacity
    onPress={() => {
      setIndex(0);
    }}>
    <Text
      style={[
        styles.Today,
        {
          color: Index == 0 ? '#004FB4' : '#4F6C92',
          fontFamily: 'IBMPlexMono-BorderlessButton.ttf',
        },
      ]}>
      Helsinki(5)
    </Text>
  </TouchableOpacity>
  <TouchableOpacity
    onPress={() => {
      setIndex(1);
    }}>
    <Text
      style={[styles.Today, {color: Index == 1 ? '#004FB4' : '#4F6C92'}]}>
      Tampare(8)
    </Text>
  </TouchableOpacity>
  <TouchableOpacity
    onPress={() => {
      setIndex(2);
    }}>
    <Text
      style={[styles.Today, {color: Index == 2 ? '#004FB4' : '#4F6C92'}]}>
      Turku(5)
    </Text>
  </TouchableOpacity>
  </View>
  <FlatList
  data={[1, 2, 3]}
  contentContainerStyle={{paddingBottom: '5%'}}
  renderItem={({item, index}) => {
    return (
      <View>
        <View style={styles.Date}>
          <View style={styles.Date1}>
            <Text style={styles.Today}>Today</Text>
            <Text style={styles.Today1}>2 shifts, 4 h</Text>
          </View>
        </View>
  
        <View style={styles.Cancle}>
          <View style={{justifyContent: 'center'}}>
            <Text
              style={[
                styles.Today,
                {fontWeight: '400', alignSelf: 'center'},
              ]}>
              14:00 - 16:00
            </Text>
          </View>
          <Text style={[styles.Today, {alignSelf: 'center'}]}>
            Booked
          </Text>
          <TouchableOpacity style={styles.Button}>
            <Text style={[styles.buttonText, props.Textstyles]}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }}
  /> */
}
