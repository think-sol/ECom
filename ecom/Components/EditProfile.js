import React,{Component} from 'react';
import user from './images/user.png';
import ImagePicker from 'react-native-image-picker';
import {Button,Divider,Text,Avatar,Input,Icon} from 'react-native-elements';
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

class EditProfile extends Component{
  state={
    userImage:user
  }
  handlePicture=()=>{
    const options = {
      title: 'Select Avatar',
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: [],
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      const source = { uri: response.uri };
      this.setState({
        userImage:source
      });
      
    });
    

  }
    render(){
        return (
            <View style={styles.Container}>
              <View style={{backgroundColor:'#0b7253',padding:3,display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                  <TouchableOpacity style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}} onPress={this.props.navigation.openDrawer}>
                      <Icon type="antdesign" name="arrowleft" size={35} color="white"  onPress={()=>{this.props.navigation.navigate('Profile')}} />
                  </TouchableOpacity>
              </View>
              <View style={{width:'100%',marginTop:10,paddingLeft:'5%',paddingRight:'5%'}}>
                  <View style={{backgroundColor:'lightgray',width:'100%',display:'flex',flexDirection:'row',justifyContent:'center',padding:10}}>
                      <Avatar rounded size={150} source={this.state.userImage} showEditButton onEditPress={this.handlePicture}/>
                  </View>

                  <Input value="Syed Mutahir" inputStyle={{fontSize:18}} inputContainerStyle={{marginTop:10,marginBottom:10,borderWidth:1}} />

                  <Input value="mutahir.sherazi@gmail.com" inputStyle={{fontSize:18}} inputContainerStyle={{marginTop:10,marginBottom:10,borderWidth:1}} />

                  <Input value="033333333" inputStyle={{fontSize:18}} inputContainerStyle={{marginTop:10,marginBottom:10,borderWidth:1}} />

                  <Input value="Steel Town Bin Qasim Karachi" inputStyle={{fontSize:18}} inputContainerStyle={{marginTop:10,marginBottom:10,borderWidth:1}} />

                  <Button title="Update Profile" buttonStyle={{marginTop:35,width:200,alignSelf:'center',backgroundColor:'#0b7253'}} />
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

export default EditProfile;
