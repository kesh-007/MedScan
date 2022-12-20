import { View, Text,TouchableOpacity,Image,StyleSheet, ScrollView,TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Divider } from 'react-native-elements'
import { Avatar, Button, Card, Title, Paragraph, } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';

const InformationA = ({navigation}) => {
    const route=useRoute();
   
    const B=(props) => <Text style={{fontWeight:500}}>{props.children}</Text>
    const [comment,setcomment]=useState('')
    const insertcomment = ()=>
    {
        
    fetch('http://127.0.0.1:5000/commentspost',{
        method:'POST',
        mode:'no-cors',
        headers :{
          'Content-Type':'application/json',
                  },
        body:JSON.stringify({username:route.params.data,comment:comment,medname:'Dolo 650mg'},),
        
    }
    )
    setcomment('')
}
  return (
    <View style={{backgroundColor:'white'}}>
       

    <TouchableOpacity style = {{flexDirection:'row',marginTop:20,marginBottom:30}}onPress={()=>{navigation.navigate('Home')}}>
        <Image  source={{uri:'https://cdn-icons-png.flaticon.com/512/130/130882.png'}} style ={{height:20,width:20}}/>
        <Image  source={{uri:'https://i.postimg.cc/4dyGjtRg/MedScan.png'}} style={{height:23,width:140,marginLeft:15}}/>
        </TouchableOpacity>
        <Divider width={1} orientation='vertical'/>   
        <View style={{height:50,backgroundColor:'rgba(95,200,13,.65)'}}>
            <Text style={{marginLeft:5,marginTop:15,fontSize:16,fontFamily:'Poppins',fontWeight:500,color:'white'}}>Details Page</Text>
        </View>
        <ScrollView>
        <Text style={{margin:10,marginTop:15,fontWeight:'bold',fontSize:16,fontFamily:'poppins'}}>
            Dolo 650mg
        </Text>
        <Divider style={{margin:25}} width={1} orientation='vertical'/>
        <Card style={styles.cardstyle} >
        <Card.Cover style={{maxHeight:150,width:130,marginTop:10}}source={{ uri: 'https://cdn01.pharmeasy.in/dam/products/059346/dolo-650mg-strip-of-15-tablets-2-1653986150.jpg?dim=320x320&dpr=1&q=100' }} />
        <Card.Content>
      <Title style={{fontFamily:'bold',textAlign:'center',fontFamily:'poppins'}}>Dolo 650</Title>
      
    </Card.Content>
        </Card>
        <Divider style={{margin:25}} width={1} orientation='vertical'/>
        <Text style={{fontWeight:'bold',fontSize:16,color:'rgba(54,112,8,.96)',marginLeft:20,fontFamily:'poppins'}}>
            Medical Description
        </Text>
        <Text style={{fontSize:14,color:'rgba(0,0,0,.6)',marginLeft:20,marginTop:6,fontFamily:'poppins'}}>
        Dolo 650 tablet is a pain-relieving medicine.
It also helps reduce fever. Dolo contains paracetamol as its active ingerdient.
        </Text>
        <Divider style={{margin:25}} width={1} orientation='vertical'/>
        <Text style={{fontWeight:'bold',fontSize:16,color:'rgba(54,112,8,.96)',marginLeft:20,fontFamily:'poppins'}}>
            Use when
        </Text>
        <Text style={{fontSize:14,color:'rgba(0,0,0,.6)',marginLeft:20,marginTop:6,fontFamily:'poppins'}}>
        {'\u2022'} Fever {"\n"}
        {'\u2022'} Tooth ache {"\n"}
        {'\u2022'} Headache {"\n"}
        {'\u2022'} Migraine {"\n"}
        {'\u2022'} Blackache {"\n"}
        {'\u2022'} Body Pain {"\n"}
        {'\u2022'} Musculoskeletal pain {"\n"}

        </Text>
        <Divider style={{margin:25}} width={1} orientation='vertical'/>
        <Text style={{fontWeight:'bold',fontSize:16,color:'rgba(54,112,8,.96)',marginLeft:20,fontFamily:'poppins'}}>
            Side Effects
        </Text>
        <Text style={{fontSize:14,color:'rgba(0,0,0,.6)',marginLeft:20,marginTop:6,fontFamily:'poppins'}}>
            In rare cases,you may experience-{"\n"}
        {'\u2022'} Skin Rash {"\n"}
        {'\u2022'} Itching {"\n"}
        {'\u2022'} Blisters {"\n"}
        {'\u2022'} Allergic reaction {"\n"}
        
        </Text>
        <Divider style={{margin:20}} width={1} orientation='vertical'/>
        <View style={{height:70,marginLeft:20,marginRight:20,backgroundColor:'rgba(151,219,97,.29)',marginBottom:40}}>
            <Text style={{fontSize:16,fontFamily:'poppins',fontWeight:500,margin:15}}>Frequently Asked Questions{"\n"}(FAQs)</Text>
            </View>
            <View style={{height:100,marginLeft:20,marginRight:20,backgroundColor:'rgba(228,228,228,.18)',marginBottom:40}}>
                
            <Text style={{fontSize:13,fontFamily:'poppins',fontWeight:300,margin:15}}>
              <B>  Q: Can I take Dolo 650 for cold and fever?{'\n'}  A:</B> You can take Dolo 650 tablet for controlling 
            fever,it may not have any action in reducing
       cold      as cold usually occur due to viral 
       infection 
        
            </Text>
            
            </View>
            <Text style={{fontFamily:'poppins',fontSize:18,fontWeight:'bold',marginLeft:30}}>
                Comments
            </Text>
            <View style={{flexDirection:'row'}}>
            <TextInput style={{height:66,width:300,backgroundColor:'rgba(228,228,228,.18)',margin:20,fontFamily:'poppins',fontSize:14}}
            placeholder='Share your thoughts'
            onChangeText={newText=>setcomment(newText)}
            value={comment}
            />
            {comment&&(
                <TouchableOpacity onPress={insertcomment}>
                    <Text style={{marginTop:40,color:'blue',fontFamily:'poppins'}}>Post</Text>
                </TouchableOpacity>
            )}
            </View>
            <Divider style={{margin:20}} width={1} orientation='vertical'/>
            <View>
                <View style={{flexDirection:'row'}}>
                <Image source={{uri:'https://www.solidbackgrounds.com/images/1920x1080/1920x1080-bright-green-solid-color-background.jpg'}}
                style={{height:42,width:42,borderRadius:26,marginLeft:20,marginTop:10}}/>
                <Text style={{marginLeft:15,fontFamily:'poppins',marginTop:10}}>
                    <B>user1</B> {"\n"}
                        Rnadom messafef fvdsjfhsdufhgdsfgfysd fehfuhf fuegfuyuew gfejf
                        {"\n"} 10m
                </Text>
                </View>
                <View style={{flexDirection:'row',marginTop:20}}>
                <Image source={{uri:'https://www.solidbackgrounds.com/images/1920x1080/1920x1080-bright-green-solid-color-background.jpg'}}
                style={{height:42,width:42,borderRadius:26,marginLeft:20,marginTop:10}}/>
                <Text style={{marginLeft:15,fontFamily:'poppins',marginTop:10}}>
                    <B>user1</B> {"\n"}
                        Rnadom messafef fvdsjfhsdufhgdsfgfysd fehfuhf fuegfuyuew gfejf
                        {"\n"} 10m
                </Text>
                
                </View>
                
            </View>

    

        
        </ScrollView>
         </View>
  )
}


const styles = StyleSheet.create({
    cardstyle:
    {

        width:150,
        flex:1,
        marginLeft:120,
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:3
        

    }
})
export default InformationA