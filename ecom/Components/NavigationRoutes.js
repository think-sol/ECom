import React from "react";
import {createStackNavigator,createAppContainer,createDrawerNavigator,createSwitchNavigator} from 'react-navigation';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import ItemDescription from './ItemDescription';
import {Dimensions} from "react-native";
import Profile from "./Profile";
import Wishes from "./WishList";
import AddItem from "./AddItem";
import MyItems from "./MyItems";
import Filter from './Filter';
import SplashScreen from "./SplashScreen";
import EditProfile from "./EditProfile";
import DrawerContent from "./DrawerContent";


const LogInStackNav = createStackNavigator({

    SplashScreen:{
        screen:SplashScreen
    },
    SignIn:{
        screen:SignIn
    },
    SignUp:{
        screen:SignUp
    },

},
{
    headerMode:'none'
}
)

const HomeStack = createStackNavigator({
    Home:{screen:Home},
    ItemDescription:{screen:ItemDescription}, 
    Filter:{screen:Filter}
},
{
    headerMode:'none'
}
)
HomeStack.navigationOptions= ({ navigation }) => {
    let drawerLockMode  = 'unlocked';
    if (navigation.state.index > 0) {
        drawerLockMode  = 'locked-closed';
    }
  
    return {
        drawerLockMode ,
    };
};

const ProfileStack= createStackNavigator({
    Profile:{screen:Profile},
    EditProfile:{
        screen:EditProfile,
    }
    
},
{
    headerMode:'none'
}
)
ProfileStack.navigationOptions= ({ navigation }) => {
    let drawerLockMode  = 'unlocked';
    if (navigation.state.index > 0 && navigation.state.routes[1].routeName === "EditProfile") {
        drawerLockMode  = 'locked-closed';
    }
  
    return {
        drawerLockMode ,
    };
};

const WishesStack =createStackNavigator({
    Wishes:{screen:Wishes},
    ItemDescription:{screen:ItemDescription}
},
{
    headerMode:'none'
}
)
WishesStack.navigationOptions= ({ navigation }) => {
    let drawerLockMode  = 'unlocked';
    if (navigation.state.index > 0 && navigation.state.routes[1].routeName === "ItemDescription") {
        drawerLockMode  = 'locked-closed';
    }
  
    return {
        drawerLockMode ,
    };
};

const MyItemsStack = createStackNavigator({
    MyItems:{screen:MyItems},
    ItemDescription:{screen:ItemDescription}
},
{
    headerMode:'none'
}
)
MyItemsStack.navigationOptions= ({ navigation }) => {
    let drawerLockMode ='unlocked';
    if (navigation.state.index > 0 && navigation.state.routes[1].routeName === "ItemDescription") {
        drawerLockMode  = 'locked-closed';
    }
  
    return {
        drawerLockMode ,
    };
};


const width = Dimensions.get('window').width;

const drawerConfig = {
    drawerWidth:width*0.80,
    contentComponent:({navigation})=>{
        return <DrawerContent navigation={navigation} />
        }
}


const DrawerNav = createDrawerNavigator({

    Home:HomeStack,
    Profile:ProfileStack,
    Wishes:WishesStack,
    AddItem:AddItem,
    MyItems:MyItemsStack

},
drawerConfig
)

const RootNav = createSwitchNavigator({
    LogInStackNav:LogInStackNav,
    DrawerNav:DrawerNav
})


export default createAppContainer(RootNav);