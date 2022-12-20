import React,{useEffect} from 'react';
import { StyleSheet, Text, View,ImageBackground,Image, Alert } from 'react-native';
import Splash  from './Screens/Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import MyAccount from './Screens/MyAccount';
import NextMyAccount from './Screens/NextMyAccount';
import ForgotPw from './Screens/ForgotPw';
import Camera from './Screens/Camera';
import InformationA from './Screens/InformationA';
import InformationB from './Screens/InformationB';
import InformationC from './Screens/InformationC';
export default function App() {
  const Stack = createNativeStackNavigator();
  


  return (
    
    <NavigationContainer>
       <style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&family=Roboto:wght@100;300;400;700;900&family=Ubuntu+Mono:wght@400;700&display=swap');
</style>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name = "Splash" component={Splash}></Stack.Screen>
        
        <Stack.Screen name='account' component={MyAccount}/>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='myaccount' component={NextMyAccount}/>
        <Stack.Screen name='forgotpw' component={ForgotPw}/>
        <Stack.Screen name='camera' component={Camera}/>
        <Stack.Screen name='infoa' component={InformationA}/>
        <Stack.Screen name='infob' component={InformationB}/>
        <Stack.Screen name='infoc' component={InformationC}/>
     
      </Stack.Navigator>
    </NavigationContainer>

    

  )
    
}

const styles = StyleSheet.create({
  image: {
    flex:1,
    justifyContent:'center'
    
    
  },
  container:
  {
    flex : 1,
  }
});
