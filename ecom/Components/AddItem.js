import React,{Component} from 'react';
import {Button,Card,Divider,Text,Icon} from 'react-native-elements';
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

class AddItem extends Component{
    render(){
        return (
            <View style={styles.Container}>
              <View style={{backgroundColor:'#0b7253',padding:3,display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                  <TouchableOpacity style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}} onPress={this.props.navigation.openDrawer}>
                      <Icon type="material" name="menu" size={43} color="white"  />
                  </TouchableOpacity>
                  <Text h3 style={{color:'white'}}>Shopoholic</Text>
                  <Icon type="material" name="tune" size={40} color="white"  />
              </View>
              <Text h3>Add New Item</Text>
            </View>
          );
    }
};

const styles = StyleSheet.create({
  Container: {
    flex:1,
  },
});

export default AddItem;
