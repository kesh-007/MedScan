import { View, Text,TouchableOpacity,Image,Button } from 'react-native'
import React, { useState } from 'react'
import Webcam from 'react-webcam'
import { Divider } from 'react-native-elements'

const Camera = ({navigation}) => {
    const [url,seturl] = useState(null);
    const videoConstraints = {
        width: 540,
        height: 400,
        facingMode: "user"
      };
      const webcamRef = React.useRef(null);
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      seturl(imageSrc)
      
    },
    [webcamRef]
  );
  return (
    <View>
          <TouchableOpacity style = {{flexDirection:'row',marginTop:20,marginBottom:30}}onPress={()=>{navigation.navigate('Home')}}>
        <Image  source={{uri:'https://cdn-icons-png.flaticon.com/512/130/130882.png'}} style ={{height:20,width:20}}/>
        <Image  source={{uri:'https://i.postimg.cc/4dyGjtRg/MedScan.png'}} style={{height:23,width:140,marginLeft:15}}/>
        </TouchableOpacity>
        <Divider width={1} orientation='vertical'/>
  
      <Text style={{textAlign:'center',fontSize:25,margin:20}}>Scan the medicene here</Text>
      <Webcam
        audio={false}
    
        ref={webcamRef}
        screenshotFormat="image/jpeg"
    
        videoConstraints={videoConstraints}
      />
      <Button onPress={capture} title="Clickme"/>
      {url &&(
        <View>
        <Text> Image</Text>
      
      <img src={url} alt="Pic"/>
      </View>
      )}

    </View>
  )
}

export default Camera