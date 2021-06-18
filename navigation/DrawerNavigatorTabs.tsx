

import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { View, TouchableOpacity, Image,Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SidebarMenu from './SidebarMenu';
import { Feather, FontAwesome, MaterialCommunityIcons,SimpleLineIcons,FontAwesome5,Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import LoginScreen from '../screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import SignoutScreen from '../screens/SignoutScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CollectionPointsScreen from '../screens/CollectionPointsScreen';
import RoutesScreen from '../screens/RoutesScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props:any) => {
 
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{ width: 25, height: 25, marginLeft: 15 }}
        />
      </TouchableOpacity>
    </View>
  );
};

function ProfileScreenStack({ navigation }:any) {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerBackground: () => (
          <LinearGradient
          colors={['#667eea', '#764ba2']}
          style={{ flex: 1 }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
        />
        ),
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold',
        },

      }}>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Perfil', 
        }}
      />
     
    </Stack.Navigator>
  );
}


function SignoutScreenStack({ navigation }:any) {
  return (
    <Stack.Navigator
      initialRouteName="Signout"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerBackground: () => (
          <LinearGradient
          colors={['#667eea', '#764ba2']}
          style={{ flex: 1 }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
        />
        ),
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold',
        },

      }}>

    <Stack.Screen
        name="Signout"
        component={SignoutScreen}
        options={{
          title: 'Salir', 
        }}
      />
     
    </Stack.Navigator>
  );
}



function CollectionPointsScreenStack({ navigation }:any) {
  return (
    <Stack.Navigator
      initialRouteName="CollectionPoints"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerBackground: () => (
          <LinearGradient
          colors={['#667eea', '#764ba2']}
          style={{ flex: 1 }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
        />
        ),
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold',
        },

      }}>

    <Stack.Screen
        name="CollectionPoints"
        component={CollectionPointsScreen}
        options={{
          title: 'Puntos de Reciclaje', 
        }}
      />
     
    </Stack.Navigator>
  );
}


function RoutesScreenStack({ navigation }:any) {
  return (
    <Stack.Navigator
      initialRouteName="Routes"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerBackground: () => (
          <LinearGradient
          colors={['#667eea', '#764ba2']}
          style={{ flex: 1 }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
        />
        ),
        headerTintColor: '#fff', 
        headerTitleStyle: {
          fontWeight: 'bold',
        },

      }}>

    <Stack.Screen
        name="Routes"
        component={RoutesScreen}
        options={{
          title: 'Rutas', 
        }}
      />
     
    </Stack.Navigator>
  );
}

export  function DrawerNavigatorTabs() {
  let isLoged
  const userLoged = useSelector(state => state.auth.userLoged)
  const dispatch = useDispatch()

  const getIsloged = async () =>{
    isLoged = await AsyncStorage.getItem("isLoged")
    isLoged != null ? isLoged = JSON.parse(isLoged) : isLoged = {isLoged:false}
    dispatch({type:'SET_USER_STATE',payload:isLoged.isLoged})
    console.log('nav: ', isLoged)
  }

  useEffect(() => {
    getIsloged()
  }, [])


  return (
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}
        drawerStyle={{width:'75%'}}
        drawerContent={(props) => <SidebarMenu {...props} />}>

        {userLoged === false ? 
        <Drawer.Screen
        name="Login"
        options={{ drawerLabel: 'Iniciar Sesion',  drawerIcon: (tabinfo) => <MaterialCommunityIcons name="login" size={24} color={tabinfo.color} />}}
        component={LoginScreen}
        />
        :
        <>
          <Drawer.Screen
            name="Profile"
            options={{ drawerLabel: 'Perfil',  drawerIcon: (tabinfo) => <FontAwesome name="user-o" size={24} color={tabinfo.color}  />}}
            component={ProfileScreenStack}
          />

          <Drawer.Screen
            name="Routes"
            options={{ drawerLabel: 'Rutas',  drawerIcon: (tabinfo) => <FontAwesome5 name="route" size={24} color={tabinfo.color}  />}}
            component={RoutesScreenStack}
          />
         
           <Drawer.Screen
          name="CollectionPoints"
          options={{ drawerLabel: 'Puntos de Reciclaje',  drawerIcon: (tabinfo) => <Ionicons name="location-sharp" size={24} color={tabinfo.color} /> }}
          component={CollectionPointsScreenStack}
          />
          <Drawer.Screen
          name="Signout"
          options={{ drawerLabel: 'Salir',  drawerIcon: (tabinfo) => <SimpleLineIcons name="logout" size={24} color={tabinfo.color} /> }}
          component={SignoutScreenStack}
          />
        </>}

        
      </Drawer.Navigator>
  );
}
