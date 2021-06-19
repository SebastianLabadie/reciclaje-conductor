import React from "react";
import { SafeAreaView, View, StyleSheet, Image, Text,ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useDispatch, useSelector } from "react-redux";
import { defaultAvatarB64 } from "../assets/utils";

const SidebarMenu = (props: any) => {
  // @ts-ignore
  const userData = useSelector((state) => state.auth.userData);

  return (
    <SafeAreaView style={{ flex: 1 }}>
       <LinearGradient
        style={styles.linearBG}
        colors={['#667eea', '#764ba2']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
      >
        <Image
          source={{ uri: userData?.UsuarioImg ? `data:image/png;base64,${userData?.UsuarioImg}` :  defaultAvatarB64}}
          style={styles.sideMenuProfileIcon}
        />
      
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{userData?.UsuarioNombre}</Text>
          <Text style={styles.rol}>Recolector</Text>
        </View>
      </LinearGradient>

      {/* DRAWER VIEW  */}
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} labelStyle={{ fontSize: 16 }} />
        <View style={styles.customItem}></View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linearBG:{
    flexDirection:'row',
    alignItems:'center',
    paddingBottom:36,
  },
  infoContainer:{
    marginTop:20,
  },
  name:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:15,
  },
  rol:{
    color:'#fff'
  },
  sideMenuProfileIcon: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    marginTop: 50,
    marginLeft: 10,
    marginRight:5
  },
  
  customItem: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default SidebarMenu;
