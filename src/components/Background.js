import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Image, Dimensions, StatusBar  } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function Background() {
  const [searchText, setSearchText] = useState("");

  const clearSearch = () => {
    setSearchText("");
  };

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor="#ff0000" />
      <LinearGradient
        colors={['#B2BEB5', '#B2BEB5', '#B2BEB5', '#808080']}
        start={{ x: 1, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.circle}
      />
      {/* <ImageBackground source={require('../images/glitzlogo.png')} style={{height: '70%', width: '100%'}}/> */}
    <View style={styles.header}>
        {/* <Image
          source={require('../assets/IMG1.jpeg')}
          style={{ height: 35, width: 35, flexShrink: 0, borderRadius: 45 }}
        /> */}
    </View>

      <View style={styles.mainContent}>

      </View>

      {/* <BottomNav /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E4E2',
    paddingTop: 20,
  },
  header: {
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: '5%',
    marginRight: '5%',
  },
  circle: {
    position: 'absolute',
    top: -height * 0.15,
    right: -width * 0.20,
    width: width * 1.5,
    height: width * 1.5,
    borderRadius: width * 0.75,
    backgroundColor: 'red',
  },

  headerText: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontSize: 19,
    fontWeight: 700,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f2f2f2',
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20,
  },
  leadButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 21,
    marginRight: 5,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#f2f2f2',
  },
  image: {
    height: 60,
    width: 180,
    marginBottom: 20,
  },
  proPic: {
    display: 'flex',
    width: 20,
    height: 20,
    flexShrink: 0,
  },
});
