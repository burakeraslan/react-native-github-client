import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';

import appStyles from '../styles';

const PublicRepos = ({navigation, route}) => {
  
  // Get repos url from user profile
  const{reposUrl} = route.params

  const [repos, setRepos] = useState([])

  // Get public repos with fetch, using "reposUrl"
  const getPublicRepos = () => {
    fetch(`${reposUrl}`)
      .then(res => res.json())
      .then(data => {
        setRepos(data)
      })
  }

  useEffect(()=>{
    getPublicRepos()
  },[])

  return(
    <ScrollView style={appStyles.reposScreenBackground}>
      {
        repos.map((e,i)=>{
          return(
            <View style={appStyles.reposResult}
            key={i}
            >
              <Text style={appStyles.reposText}>
                <b>Name:</b> {e.name}
              </Text>
              <Text style={appStyles.reposText}>
                <b>Language:</b> {e.language}
              </Text>
              <Text style={appStyles.reposText}>
                <b>Created at:</b> {e.created_at}
              </Text>
            </View>
          )
        })
      }
    </ScrollView>
  )
}

export default PublicRepos