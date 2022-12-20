
import React ,{useEffect}from 'react';
import { StyleSheet, Text, View,ImageBackground,Image, Alert ,Button} from 'react-native';

export default function Splash({navigation}) {
    useEffect(()=>(
        setTimeout(()=>{
            navigation.navigate('account')
        },2000)
    ),[])

  return (
    <View style={styles.container}>
    
    <ImageBackground source={{uri:'https://i.postimg.cc/RFC9KDrC/Splash-screen.png'}} resizeMode="cover"
    style = {styles.image}/>
    
    

    </View>
    
  );
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
