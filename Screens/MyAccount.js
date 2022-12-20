import { View, Text,StyleSheet, TouchableOpacity,Image,TextInput } from 'react-native'
//import { TextInput } from 'react-native-paper'
import React, { useState,useReducer } from 'react'
import { Button, Divider, Icon } from 'react-native-elements'

const MyAccount = ({navigation}) => {
  const fs = require('fs')
  const [text,setText] = useState('')
  const [username,setuserName] = useState('')
  const [password,setpassword]=useState('')
  const [state, dispatch] = useReducer(x=>x+1,0)

  const [passwordshow,setpasswordshow]=useState(true)
  const insertData=()=>{
    fetch('http://127.0.0.1:5000/add',{
      method:'POST',
      mode:'no-cors',
      headers :{
        'Content-Type':'application/json',
                },
      body:JSON.stringify({text:text,password:password,username:username}),

    }

  )//.then(resp=>resp.json()).then(data=>console.log(data)).catch(error=>console.log(error))
  }
  const login=()=>{
    if (text!='' && password!='' &&password.length>8 && username !='' && text.includes('@') && text.includes('.'))
    {
      insertData()
      navigation.navigate('Home',{'data':1,'user':username})

    
    }
    else if (text==''){
      alert("Email can't be empty")
    }
    else if (password==''){
      alert("Password can't be empty")
  
    }
    else if (password.length<8)
    {
      alert("Password is too small😞")
    }
    else if(!text.includes("@") && !text.includes("."))
    {
      alert("Invalid Email")

    }

    

  }
  return (
    <View style ={{marginTop:25}}>
      <TouchableOpacity style = {{flexDirection:'row',marginBottom:30}}onPress={()=>{navigation.navigate('account')}}>
        <Image  source={{uri:'https://i.postimg.cc/4dyGjtRg/MedScan.png'}} style={{height:23,width:140,marginLeft:15}}/>
        </TouchableOpacity>
        <Divider width={1} orientation='vertical'/>
        <View style={{marginTop:120,marginLeft:15,marginRight:18}}>
          <Image source={{uri:'https://i.postimg.cc/ZK8tRZm2/Welcome-to-Med-Scan.png'}} style={{height:20,width:300}}/>
          <View style={{borderRadius:9,}}>
          <TextInput style={styles.input}
          
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Username'
          onChangeText={newText=>setuserName(newText)}
          defaultValue={username}

          />
          <TextInput style={styles.input}
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Email'
          onChangeText={newText=>setText(newText)}
          defaultValue={text}
          blurOnSubmit={true}
          
          />
          <View style={{flexDirection:'row'}}>
          
          <TextInput style={styles.input}
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Password'
          secureTextEntry={passwordshow}
          onChangeText={newText=>setpassword(newText)}
          defaultValue={password}
          
          />
          {password &&(
            <TouchableOpacity onPress={()=>setpasswordshow(!passwordshow)}>
              {  !!passwordshow ?
              (<Image source={{uri:'https://cdn-icons-png.flaticon.com/128/159/159604.png'}} style={{height:25,width:25,marginTop:45,marginLeft:3}}/>)
              : 
              (<Image source={{uri:'https://cdn-icons-png.flaticon.com/512/2355/2355322.png'}} style={{height:25,width:25,marginTop:45,marginLeft:3}}/>
              )
              }
            </TouchableOpacity>
          )}
          </View>
                    </View>
          <TouchableOpacity onPress={login} style= {styles.button}>
            <Text style={{color:'white',fontSize:16,fontFamily:'poppins'}}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate('forgotpw')}} style={{marginTop:10}}>
            <Text style={{textAlign:'right',color:'blue',fontFamily:'poppins',fontSize:12}}>Forgot Password?   </Text>
          </TouchableOpacity>
        </View>

    </View>
  )
}
const styles = StyleSheet.create({
    input:
    {
      marginTop:30,
      backgroundColor:'rgba(228,228,228,.58)',
      height:55,
      width:350,
      
      borderRadius:9,
      fontSize:15,
      fontFamily:'poppins'
      

    },
    button:
    {
      alignItems:'center',
      backgroundColor:'rgba(93,200,13,100)',
      padding:20,
      marginTop:30,
      marginRight:10,
      borderRadius:9,
    }
})

export default MyAccount