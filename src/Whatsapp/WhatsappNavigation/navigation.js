/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable jsx-quotes */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import  SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Whatsapp from '../whatsapp';
const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="whatsapp"
          component={Whatsapp}
          options={({ navigation }) => ({
            title: 'Whatsapp',
            headerShown: true,
            headerStyle: { backgroundColor: '#1C6758', height: 100 },
            headerTintColor: '#fff',
            headerTitleStyle: {},
            headerRight: () => (
              <View
                      style={{ marginRight: 20}}
                      onPress={() => {
                      }}
                    >
                <View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                      <TouchableOpacity>
                      <Feather name="camera" size={24} color="#fff" style={{marginRight:30}} />
                      </TouchableOpacity>
                      <TouchableOpacity>
                      <Feather name='search' size={24} color="#fff" style={{marginRight:30}} />
                      </TouchableOpacity>
                      <TouchableOpacity>
                      <SimpleLineIcons name='options-vertical' size={22} color='#fff'  />
                      </TouchableOpacity>
                    </View>
                </View>
              </View>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
