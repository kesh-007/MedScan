import { View, Text,Image,StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState,useEffect } from 'react'
import { Divider, SearchBar } from 'react-native-elements'
//import { Button } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
    const route = useRoute();
    
    const [data,setData]=useState([{}])
    useEffect(()=>{
        
        
      },[])
      const datafetch=()=>
      {
        fetch('http://127.0.0.1:5000/data',{method:'GET'}).then(
          response=>response.json()
        ).then(
          data=>{
          setData(data)}
        )
      }
   
  return (
    <View style={{backgroundColor:'white'}}>
        
        
            <View style={styles.container}>
        <TouchableOpacity>
            <Image source={{uri:'https://i.postimg.cc/4dyGjtRg/MedScan.png'}} style={{height:23,width:140}}/>
        </TouchableOpacity>
        <View style ={styles.iconplace}>
            <TouchableOpacity onPress={()=>navigation.navigate('camera')}>
                <Image style={styles.icon1}
                source ={{uri:"https://cdn-icons-png.flaticon.com/512/3126/3126504.png"}}/>
            </TouchableOpacity>

            {!!route.params.data?
            (
            <TouchableOpacity onPress={()=>{datafetch();navigation.navigate('account')}} >
                
                <Image style={styles.icon}
                source ={{uri:"https://cdn-icons-png.flaticon.com/512/1144/1144760.png"}}/>
            </TouchableOpacity>)
            :
            (
                <TouchableOpacity onPress={()=>{data.state=0}} >
                
                <Image style={styles.icon}
                source ={{uri:"https://about.canva.com/wp-content/uploads/sites/8/2019/03/green.png"}}/>
            </TouchableOpacity>
                
            )


           
            }

        </View>

    </View>
    <Divider width={2} orientation = 'vertical'/>
    <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={{fontFamily:'poppins',marginLeft:20,fontSize:20,marginTop:20}}>
            Hello, {route.params.user} 👋👋
        </Text>
    <View style={{marginTop:30,marginLeft:15,marginRight:15,borderRadius:17}}>
<Searchbar style={{borderRadius:17,height:50,fontFamily:'poppins',borderColor:'light gray'}}placeholder='Search'/>
<View style={{marginTop:20}}>
    <Image source={{uri:'https://i.postimg.cc/C5KxnK2N/most.png'}} style={{height:45,width:200}}></Image>
</View>
    </View>
    <View style={{marginTop:10,flexDirection:'row',height:200,backgroundColor:'rgba(190,165,196,.1)'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity onPress={()=>navigation.navigate('infoa',{data:route.params.user})}>
        <Card style={styles.cardstyle}>
        <Card.Cover style={{maxHeight:150,width:130,marginTop:10}}source={{ uri: 'https://cdn01.pharmeasy.in/dam/products/059346/dolo-650mg-strip-of-15-tablets-2-1653986150.jpg?dim=320x320&dpr=1&q=100' }} />
        <Card.Content>
      <Title style={{fontFamily:'bold',textAlign:'center',fontFamily:'Poppins'}}>Dolo 650</Title>
      
    </Card.Content>

    </Card>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('infob')}>
    <Card style={styles.cardstyle}>
        <Card.Cover style={{height:150,width:130,marginTop:10}}source={{ uri: 'https://cdn01.pharmeasy.in/dam/products/049311/crocin-advance-500mg-strip-of-15-tablets-3-1653986116.jpg' }} />
        <Card.Content>
      <Title style={{fontFamily:'bold',textAlign:'center',fontFamily:'poppins'}}>Crocin 650 Advance</Title>
      
    </Card.Content>

    </Card>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate('infoc')}>    
        <Card style={styles.cardstyle}>
        <Card.Cover style={{height:150,width:130,marginTop:10}}source={{ uri: 'https://cdn01.pharmeasy.in/dam/products/310659/azithral-500mg-tab-5-s-2-1641536456.jpg?dim=320x320&dpr=1&q=100' }} />
        <Card.Content>
      <Title style={{fontFamily:'bold',textAlign:'center',fontFamily:'poppins'}}>Azithral 500mg</Title>
      
    </Card.Content>

    </Card>
    </TouchableOpacity>

   
    <Card style={styles.cardstyle}>
        <Card.Cover style={{height:150,width:130,marginTop:10}}source={{ uri: 'https://cdn01.pharmeasy.in/dam/products/049311/crocin-advance-500mg-strip-of-15-tablets-3-1653986116.jpg' }} />
        <Card.Content>
      <Title style={{fontFamily:'bold',textAlign:'center'}}>Crocin</Title>
      
    </Card.Content>

    </Card>
    </ScrollView>
    </View>
    <View style={{marginTop:30}}>
        <Text style={{textAlign:'center',fontSize:20,fontFamily:'poppins'}}>Ads</Text>
        <Divider  style={{margin:20}}width={1} orientation='vertical'/>
       
    <Card style={{marginTop:20}}>
        <TouchableOpacity>        
            <Card.Cover style={{margin:20}}source={{ uri: 'https://brave.com/brave-previews-opt-in-ads-in-desktop-browser-developer-channel/images/braveRewardsOptin.gif' }} />
            </TouchableOpacity>
    </Card>
    <Card style={{marginTop:20}}>
        <TouchableOpacity>        
            <Card.Cover style={{margin:20}}source={{ uri: 'https://images.ctfassets.net/4cd45et68cgf/5ZVnTR7jyrRs0lePAlVT71/0a7c103de12f7a4c0b6c3b6edd535298/Ads_Plan_Blog_Header_Image.png?w=2560' }} />
            </TouchableOpacity>
    </Card>
    <Card style={{marginTop:20}}>
        <TouchableOpacity>        
            <Card.Cover style={{margin:20}}source={{ uri: 'https://i.pinimg.com/originals/44/f6/a2/44f6a288b44fdc9ca5e49511d352b655.png' }} />
            </TouchableOpacity>
    </Card>

    </View>
    
    </ScrollView>
    </View>

  )
}

const styles = StyleSheet.create({
    container :
    {
        justifyContent : 'space-between',
        alignItems : 'center',
        flexDirection : 'row',
        marginHorizontal :30,
        marginTop:15,
        marginBottom:30

    },
    logo :
    {
        width : 100,
        height : 50,
        resizeMode : 'contain'
        
    },
    iconplace:
    {
        flexDirection : "row",
    

    },
    icon :
    {
        
        width:30,
        height:30,
        marginLeft : 10,
        resizeMode : 'contain'
    },
    icon1 :
    {
        
        width:30,
        height:30,
        marginRight : 20,
        marginLeft : 10,
        resizeMode : 'contain'
    },
    cardstyle:
    {

        width:150,
        marginLeft:6,
        borderWidth:2,
    
        borderRadius:3
        

    }

})
export default HomeScreen
