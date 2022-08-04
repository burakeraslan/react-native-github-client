import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/HomeScreen'
import UserProfile from './components/UserProfile'
import PublicRepos from './components/PublicRepos'

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#0C0C0C' },
        }}
  
      >
        <Stack.Screen name="Home Screen"
        component={HomeScreen}
        options={{statusBarColor: '#0C0C0C', headerTintColor: '#EAEAEA'}}
        />
        <Stack.Screen name="User Profile"
        component={UserProfile}
        options={{statusBarColor: '#0C0C0C', headerTintColor: '#EAEAEA'}}
        />
        <Stack.Screen name="Public Repos"
        component={PublicRepos}
        options={{statusBarColor: '#0C0C0C', headerTintColor: '#EAEAEA'}}
        />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
