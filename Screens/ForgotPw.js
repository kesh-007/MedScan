import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

const ForgotPw = ({navigation}) => {
  return (
    <View style={{marginTop:25}}>
<TouchableOpacity style = {{flexDirection:'row',marginBottom:30}}onPress={()=>{navigation.navigate('account')}}>
        <Image  source={{uri:'https://cdn-icons-png.flaticon.com/512/130/130882.png'}} style ={{height:20,width:20}}/>
        <Image  source={{uri:'https://i.postimg.cc/4dyGjtRg/MedScan.png'}} style={{height:23,width:140,marginLeft:15}}/>
        </TouchableOpacity>
        <Divider width={1} orientation='vertical'/>
        <Text style={{marginTop:260,fontSize:30,fontFamily:'poppins'}}>
            Mail to help@medscan.com to get the reset link 
        </Text>
          </View>
  )
}

export default ForgotPw