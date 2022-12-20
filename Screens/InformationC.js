import { View, Text,TouchableOpacity,Image,StyleSheet, ScrollView,TextInput } from 'react-native'
import React, { useState } from 'react'
import { Divider } from 'react-native-elements'
import { Avatar, Button, Card, Title, Paragraph, } from 'react-native-paper';

const InformationC = ({navigation}) => {
    const B=(props) => <Text style={{fontWeight:500}}>{props.children}</Text>
    const [comment,setcomment]=useState('')
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
            Azithral 500mg
        </Text>
        <Divider style={{margin:25}} width={1} orientation='vertical'/>
        <Card style={styles.cardstyle} >
        <Card.Cover style={{maxHeight:150,width:130,marginTop:10}}source={{ uri: 'https://cdn01.pharmeasy.in/dam/products/310659/azithral-500mg-tab-5-s-2-1641536456.jpg?dim=320x320&dpr=1&q=100' }} />
        <Card.Content>
      <Title style={{fontFamily:'bold',textAlign:'center',fontFamily:'poppins'}}>Azithral 500mg</Title>
      
    </Card.Content>
        </Card>
        <Divider style={{margin:25}} width={1} orientation='vertical'/>
        <Text style={{fontWeight:'bold',fontSize:16,color:'rgba(54,112,8,.96)',marginLeft:20,fontFamily:'poppins'}}>
            Medical Description
        </Text>
        <Text style={{fontSize:14,color:'rgba(0,0,0,.6)',marginLeft:20,marginTop:6,fontFamily:'poppins'}}>
        Azithral 500 tablet is an antibiotic medicine. It is used to treat various bacterial infections associated with different parts of the body.
        </Text>
        <Divider style={{margin:25}} width={1} orientation='vertical'/>
        <Text style={{fontWeight:'bold',fontSize:16,color:'rgba(54,112,8,.96)',marginLeft:20,fontFamily:'poppins'}}>
            Use when
        </Text>
        <Text style={{fontSize:14,color:'rgba(0,0,0,.6)',marginLeft:20,marginTop:6,fontFamily:'poppins'}}>
        {'\u2022'} Bacterial infection {"\n"}
        {'\u2022'} Enteric fever {"\n"}
        {'\u2022'} Pneumonia {"\n"}
        

        </Text>
        <Divider style={{margin:25}} width={1} orientation='vertical'/>
        <Text style={{fontWeight:'bold',fontSize:16,color:'rgba(54,112,8,.96)',marginLeft:20,fontFamily:'poppins'}}>
            Side Effects
        </Text>
        <Text style={{fontSize:14,color:'rgba(0,0,0,.6)',marginLeft:20,marginTop:6,fontFamily:'poppins'}}>
            
        {'\u2022'} Dizziness {"\n"}
        {'\u2022'} Headache {"\n"}
        {'\u2022'} Diarrhoea {"\n"}
        {'\u2022'} Nausea {"\n"}
        {'\u2022'} Stomach pain {"\n"}
        
        </Text>
        <Divider style={{margin:20}} width={1} orientation='vertical'/>
        <View style={{height:70,marginLeft:20,marginRight:20,backgroundColor:'rgba(151,219,97,.29)',marginBottom:40}}>
            <Text style={{fontSize:16,fontFamily:'poppins',fontWeight:500,margin:15}}>Frequently Asked Questions{"\n"}(FAQs)</Text>
            </View>
            <View style={{height:100,marginLeft:20,marginRight:20,backgroundColor:'rgba(228,228,228,.18)',marginBottom:40}}>
                
            <Text style={{fontSize:13,fontFamily:'poppins',fontWeight:300,margin:15}}>
              <B>  Q: Can I take Azithral 500 tablet during pregnancy?{'\n'}  A:</B> There is limited data regarding the safety of Azithral 500 in pregnant women. Hence it is importanat to consult a doctor and should use this medication only if prescribed by a doctor.
        
            </Text>
            
            </View>
            <Text style={{fontFamily:'poppins',fontSize:18,fontWeight:'bold',marginLeft:30}}>
                Comments
            </Text>
            <View style={{flexDirection:'row'}}>
            <TextInput style={{height:66,width:300,backgroundColor:'rgba(228,228,228,.18)',margin:20,fontFamily:'poppins',fontSize:14}}
            placeholder='Share your thoughts'
            onChangeText={newText=>setcomment(newText)}
            defaultValue={comment}
            />
            {comment&&(
                <TouchableOpacity>
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
export default InformationC