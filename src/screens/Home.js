import React from 'react'
import {View, Text, Image, ImageBackground} from 'react-native'
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          backgroundColor: '#00a46c',
          height: '28%',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingHorizontal: 20,
        }}>
        <Image
          source={require('../images/1.png')}
          style={{
            height: 20,
            width: 20,
            marginTop: 20,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 25,
            width: '100%',
          }}>
          <View style={{width: '50%'}}>
            <Text
              style={{
                fontSize: 28,
                color: '#fff',
                fontWeight: 'bold',
              }}>
              Hi Uishopy
            </Text>
          </View>
          <View style={{width: '50%', alignItems: 'flex-end'}}>
            <Image
              source={require('../images/g.png')}
              style={{
                height: 60,
                width: 60,
              }}
            />
          </View>
        </View>
      </View>
      <LinearGradient
        colors={['rgba(0,164,109,0.4)', 'transparent']}
        style={{
          left: 0,
          right: 0,
          height: 90,
          marginTop: -45,
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            paddingVertical: 8,
            paddingHorizontal: 20,
            marginHorizontal: 20,
            borderRadius: 15,
            marginTop: 25,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TextInput
            placeholder='Search'
            placeholderTextColor='#b1e5d3'
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              width: 260,
            }}
          />
          <Image
            source={require('../images/3.png')}
            style={{width: 20, height: 20}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 20,
            width: '100%',
            alignItems: 'center',
          }}>
          <View style={{width: '50%'}}>
            <Text
              style={{
                fontWeight: '50%',
                fontSize: 17,
                color: '#585a61',
              }}>
              Recommended
            </Text>
            <View
              style={{
                height: 4,
                backgroundColor: '#b1e5d3',
                width: 115,
                marginTop: -5,
              }}></View>
          </View>
          <View
            style={{
              width: '50%',
              alignItems: 'flex-end',
            }}>
            <View
              style={{
                backgroundColor: '#00a46c',
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 15,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 13,
                  color: '#fff',
                }}>
                More
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 20,
            width: '100%',
            alignItems: 'center',
          }}>
          <View style={{width: '50%'}}>
            <Text
              style={{
                fontWeight: '50%',
                fontSize: 17,
                color: '#585a61',
              }}>
              Recommended
            </Text>
            <View
              style={{
                height: 4,
                backgroundColor: '#b1e5d3',
                width: 115,
                marginTop: -5,
              }}></View>
          </View>
          <View
            style={{
              width: '50%',
              alignItems: 'flex-end',
            }}>
            <View
              style={{
                backgroundColor: '#00a46c',
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 15,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 13,
                  color: '#fff',
                }}>
                More
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}

export default Home
