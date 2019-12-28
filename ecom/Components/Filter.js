import React,{Component} from 'react';
import {Button,Divider,Text,Avatar,Input,Icon} from 'react-native-elements';
import { Dropdown } from 'react-native-material-dropdown';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import MapView, { Marker } from 'react-native-maps';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from 'react-native';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

class Filter extends Component{

    state={
      multiSlider:[0,70000],
      isSeven:false,
      isTwentyFour:true,
      isThirty:false,
      textValue:'',
      latitude:24.8607,
      longitude:67.0011
    
    }

    handleTwentyFour=()=>{
      this.setState({isTwentyFour:true,isSeven:false,isThirty:false})
    }
    handleSeven=()=>{
      this.setState({isTwentyFour:false,isSeven:true,isThirty:false})
    }
    handleThirty=()=>{
      this.setState({isTwentyFour:false,isSeven:false,isThirty:true})
    }
    handleMarker=()=>{
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.textValue},+CA&key=AIzaSyD8DFmgyvYcEyrtPcx3kAhGh5s0wWYTSq4`)
      .then(res1=>res1.json())
      .then(res2=>
        this.setState({
            
              latitude:res2.results[0].geometry.location.lat,
              longitude:res2.results[0].geometry.location.lng
            
        })
        )

    }

    render(){

      const data =[
          {value:'VIVO'},
          {value:'Q Mobile'},
          {value:'Samsung'},
          {value:'iPhone'},
      ]
      const distanceData =[
        {value:'5 Km'},
        {value:'10 Km'},
        {value:'15 Km'},
        {value:'20 Km'},
    ]

        return (
            <View style={styles.Container}>
              <View style={{backgroundColor:'#0b7253',padding:3,display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                  <TouchableOpacity style={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}} onPress={this.props.navigation.openDrawer}>
                      <Icon type="antdesign" name="arrowleft" size={35} color="white" style={{alignSelf:'flex-start'}}  onPress={()=>{this.props.navigation.navigate('Home')}} />
                  </TouchableOpacity>
              </View>
              <View style={{flex: 1}}>
                  <ScrollView >
                        <Dropdown 
                          containerStyle={{width:'90%',alignSelf:'center'}}
                          animationDuration={50}
                          baseColor="#0b7253"
                          label="Select Category" 
                          data={data} 
                        />
                        <View style={{display:'flex',flexDirection:'row',justifyContent:"space-between",marginTop:10,width:'90%',alignSelf:'center'}}>
                            <Text style={{color:'gray',fontSize:18,fontWeight:'bold'}}>Range</Text>
                            <Text style={{color:'gray',fontSize:18,fontWeight:'bold'}}>{this.state.multiSlider[0]}-{this.state.multiSlider[1]}</Text>
                        </View>
                        
                        <MultiSlider  
                          sliderLength={320}
                          min={0}
                          max={7000}
                          step={30}
                          valuePrefix="$"
                          containerStyle={{alignSelf:'center'}}
                          values={[this.state.multiSlider[0],this.state.multiSlider[1]]}
                          onValuesChange={(value)=>{this.setState({multiSlider:value})}}
                          isMarkersSeparated={true}
                          customMarkerRight={(e)=>{return(<CustomSliderMarker />)}}

                          customMarkerLeft={(e)=>{return(<CustomSliderMarker />)}}
                        

                        />
                        <Input placeholder="Where.." containerStyle={{width:'94%',alignSelf:'center'}} rightIcon={<Icon type="material" name="search" onPress={this.handleMarker}  />}  onChangeText={(Text)=>{this.setState({textValue:Text})}}  />
                        <MapView style={{height:200,width:width*0.9,marginTop:10,alignSelf:'center'}}
                        
                          initialRegion={{
                            latitude: this.state.latitude,
                            longitude: this.state.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                          }}

                          Component
                        
                        >
                          <Marker coordinate={{latitude:this.state.latitude,longitude:this.state.longitude}}/>
                        </MapView>
                          
                        <View style={{marginTop:10,width:'90%',alignSelf:'center',height:100}}>
                            <Text h4 style={{color:'gray'}}>Publish Date</Text>
                            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',marginTop:10,alignItems:'center'}}>
                                  <TouchableOpacity style={this.state.isTwentyFour===true?{backgroundColor:'#0b7253',alignItems:'center',padding:5,width:'25%'}:{alignItems:'center',width:'25%'}} onPress={this.handleTwentyFour}>
                                    <Text style={{fontSize:18,fontWeight:'bold',color:this.state.isTwentyFour===true?'white':'black'}}>24</Text>
                                    <Text style={{color:this.state.isTwentyFour===true?'white':'black'}}>Hours</Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity style={{alignItems:'center'},this.state.isSeven===true?{backgroundColor:'#0b7253',alignItems:'center',padding:5,width:'25%'}:{alignItems:'center',width:'25%'}} onPress={this.handleSeven}>
                                    <Text style={{fontSize:18,fontWeight:'bold',color:this.state.isSeven===true?'white':'black'}}>7</Text>
                                    <Text style={{color:this.state.isSeven===true?'white':'black'}}>Days</Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity style={{alignItems:'center'},this.state.isThirty===true?{backgroundColor:'#0b7253',alignItems:'center',padding:5,width:'25%'}:{alignItems:'center',width:'25%'}} onPress={this.handleThirty}>
                                    <Text style={{fontSize:18,fontWeight:'bold',color:this.state.isThirty===true?'white':'black'}}>30</Text>
                                    <Text style={{color:this.state.isThirty===true?'white':'black'}}>Days</Text>
                                  </TouchableOpacity>
                            </View>    
                        </View>

                        <View style={{marginTop:10,width:'90%',alignSelf:'center',height:200}}>
                            <Text h4 style={{color:'gray'}}>Distance</Text>
                            <Dropdown 
                                containerStyle={{width:'100%',alignSelf:'center',marginTop:0}}
                                animationDuration={50}
                                baseColor="#0b7253"
                                label="Sort By Distance" 
                                data={distanceData} 
                            />
                                
                        </View>
                  </ScrollView>
                  


                  <View style={{display:'flex',flexDirection:'row',position:'absolute',bottom:0}} >
                    <Button title="Reset" buttonStyle={{width:width*0.5,borderRadius:0,backgroundColor:'#0b7253',height:60}} />
                    <Button title="Filter" buttonStyle={{width:width*0.5,borderRadius:0,backgroundColor:'#0b7253',height:60}} />
                  </View>
              </View>
            </View>
          );
    }
};

const styles = StyleSheet.create({
  Container: {
    flex:1,
  },
});


const CustomSliderMarker = () =>{
  return(
    <View style={{padding:10,borderRadius:25,backgroundColor:'#0b7253'}}>

    </View>
  );
}

export default Filter;