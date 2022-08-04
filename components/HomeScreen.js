import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useState, useEffect } from 'react';

import appStyles from '../styles';

const HomeScreen = ({ navigation }) => {
  
  const [search, setSearch] = useState('')
  const [userList, setUserList] = useState([])

  // Get username list function
  const getUserList = () => {

    if(search.length<1){
      alert("Please enter username")
      return
    }

    fetch(`https://api.github.com/search/users?q=${search}`,)
      .then(res => res.json())
      .then(data => {
        setUserList(data.items)
      })
  }

  // Pass the user profile url to other screen when click to username
  const clickToUsername = (username) => {
    navigation.navigate("User Profile",{username})
  }

  return (
    <View style={appStyles.container}>

      <View style={appStyles.header}>
        <Text style={appStyles.headerText}>
          Github Users
        </Text>
      </View>

      <View style={appStyles.alignmentInputAndTouchable}>
        <TextInput
          style={appStyles.input}
          placeholder="Type the username"
          placeholderTextColor={'#EAEAEA'}
          color={'#EAEAEA'}
          onChangeText={setSearch}
        />
        <TouchableOpacity
        style={appStyles.searchButton}
        onPress={getUserList}
        >
          <Text style={{color:'#DDFFCC'}}>
            Search
          </Text>
        </TouchableOpacity>
      </View>

      <View style={appStyles.resultSearch}>
        <ScrollView>
          {
            userList.map((e, i) => {
              return (
                <TouchableOpacity
                style={appStyles.users}
                onPress = {() => clickToUsername(e.login)} 
                key={i}

                >
                  <Image
                  style={appStyles.avatarPhoto}
                  source={{uri:`${e.avatar_url}`}}
                  />

                  <Text style={{color: '#EAEAEA'}}>
                    {e.login}
                  </Text>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      </View>
    </View>
  )
}

export default HomeScreen