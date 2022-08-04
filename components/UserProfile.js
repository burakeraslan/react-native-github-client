import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import appStyles from '../styles';
import PublicRepos from './PublicRepos'

const UserProfile = ({navigation, route}) => {

  // Get profile url from homescreen
  const{ username } = route.params

  const [userInfo, setUserInfo] = useState([])
  const [followers, setFollowers] = useState([])
  const [following, setFollowing] = useState([])
  
  // Get profile information with fetch, using "user.url"
  const getUserUrl = (username) => {
    fetch(`https://api.github.com/users/${username}`,)
      .then(res => res.json())
      .then(data => {
        setUserInfo(data)
      })  
  }

  useEffect(()=>{
    getUserUrl(username)
  },[])

  // Get followers list with fetch
  const getFollowers = (username) => {
    
    fetch(`https://api.github.com/users/${username}/followers`)
      .then(res => res.json())
      .then(data => {
        setFollowers(data)
    })
  }

  // Get following list with fetch
  const getFollowing = (username) => {

    fetch(`https://api.github.com/users/${username}/following`)
      .then(res => res.json())
      .then(data => {
        setFollowing(data)
    })
  }

  useEffect(()=>{
    getFollowers(username)
    getFollowing(username)
  },[])

   // Pass the user public repos link to other screen when click to public repos
   const clickToPublicRepos = (reposUrl) => {
    navigation.navigate("Public Repos",{reposUrl})
  }

  // When clict to followers or following user in user profile, this function update with this user's information on this page
  const clickToFollow = (username) => {
    getUserUrl(username)
    getFollowers(username)
    getFollowing(username)
  }

  // Navigation for followers, following screen
  const Tab = createMaterialTopTabNavigator();

  // Followers screen function
  const FollowersScreen = (navigation) => {
    return(
      <View style={appStyles.userProfileScreen201}>
        
        <ScrollView>
          {
            followers.map((e, i) => {
              return (
                <TouchableOpacity style={appStyles.followScreen}
                key={i}
                onPress = {()=>{clickToFollow(e.login)}}
                >
                  <Image
                  style={appStyles.avatarPhoto1}
                  source={{uri:`${e.avatar_url}`}}
                  />
                  <Text style={appStyles.usernameTextInNavigation}>
                    {e.login}
                  </Text>
                </TouchableOpacity>
              )
            })
          }     
        </ScrollView>
    
      </View>
    )
  }

  // Following screen function
  const FollowingScreen = (navigation) => {
    return(
      <View style={appStyles.userProfileScreen202}>
        
        <ScrollView>
          {
            following.map((e, i) => {
              return (
                <TouchableOpacity style={appStyles.followScreen}
                key={i}
                onPress = {()=>{clickToFollow(e.login)}}
                >
                  <Image
                  style={appStyles.avatarPhoto1}
                  source={{uri:`${e.avatar_url}`}}
                  />
                  <Text style={appStyles.usernameTextInNavigation}>
                    {e.login}
                  </Text>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      </View>
    )
  }

  return(
    <View style={{flex:1, backgroundColor:'#0C0C0C'}}> 
      
      <View style={appStyles.userProfileScreen1}>
        
        <Image 
        style={appStyles.profilePhoto}
        source={{uri:`${userInfo.avatar_url}`}}
        />
        
        <View style={appStyles.userInformation}>
          <Text style={appStyles.userInformationText}>
            <b>Username:</b> {userInfo.login}
          </Text>
          <Text style={appStyles.userInformationText}>
            <b>Name:</b> {userInfo.name}
          </Text>
          <Text style={appStyles.userInformationText}>
            <b>Location:</b> {userInfo.location}         
          </Text>
          
          <TouchableOpacity style={appStyles.publicReposButton}
            onPress={()=>clickToPublicRepos(userInfo.repos_url)}
          >
            <Text>
              Public Repos: {userInfo.public_repos}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={appStyles.userProfileScreen2}>

        <Tab.Navigator
         screenOptions={{
          tabBarStyle: { backgroundColor: '#262626' },
         }}
        >
          <Tab.Screen name="Followers"
          component={FollowersScreen}
          options={{ tabBarLabel: `FOLLOWERS: ${userInfo.followers}`, tabBarPressColor: '#DDFFCC', tabBarActiveTintColor: '#EAEAEA'}}
          />
          <Tab.Screen name="Following"
          component={FollowingScreen}
          options={{ tabBarLabel: `FOLLOWING: ${userInfo.following}`, tabBarPressColor: '#DDFFCC', tabBarActiveTintColor: '#EAEAEA'}}
          />
        </Tab.Navigator>

      </View>
    
    </View>
  )
}

export default UserProfile