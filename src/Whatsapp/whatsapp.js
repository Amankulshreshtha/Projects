/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import  SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
export default function Whatsapp({ navigation }) {
  return (
    <View style={styles.mainContainer}>

        <View style={styles.topcontainer}>
            <TouchableOpacity>
                <SimpleLineIcons name= 'people' size={20} color="#fff"  style={{marginLeft: 10}} />
            </TouchableOpacity>

            <TouchableOpacity>
                 <Text style={styles.Text1}>Chats</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                 <Text style={styles.Text}>status</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                 <Text style={styles.Text3}>Call</Text>
            </TouchableOpacity>

        </View>

    </View>
  );
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        margin: 0,
    },
  container: {

    justifyContent: 'center',
    alignItems: 'center',
  },
  topcontainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1C6758',
  },
  Text: {
    fontSize: 20,
    color: '#fff',
  },
  Text1:{
    fontSize: 20,
    marginLeft: 10,
    color: '#fff',
  },
  Text3:{
    fontSize: 20,
    marginRight: 10,
    color: '#fff',
  },
});
