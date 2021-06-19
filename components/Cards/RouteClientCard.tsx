import {  FontAwesome,FontAwesome5,Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, Linking } from "react-native";
import IconBtn from "../Buttons/IconBtn";
import Button1 from "../Buttons/Button1";
import Colors from "../../constants/Colors";

function RouteClientCard() {
  const navigation = useNavigation();

/*     const handleWPP = () =>{
        Linking.openURL('http://api.whatsapp.com/send?phone=59891843400');
    }

    const handleCall = ()=>{
        Linking.openURL('tel://091843400')
    } */

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <View style={styles.cardLeftSide}>
          <Text style={styles.txtOrdenNro}>#1235445</Text>
          <IconBtn>
            <FontAwesome name="question" size={28} color="#FF7500" />
          </IconBtn>
        </View>
        <View style={styles.cardRightSide}>
          <Text style={styles.txtInfo}>Cliente: Maria Perez</Text>
          <Text style={styles.txtInfo}>
            Direccion: Av. Dr. Francisco Soca 1548
          </Text>
          <Text style={styles.txtInfo}>Telefono: 091843400</Text>

          <View style={styles.actionsContainer}>
            {/*<Button1 title="" moreStyles={{borderColor:Colors.green600,marginRight:10}} rippleColor={Colors.green50} onPress={handleWPP} >
                <FontAwesome5 name="whatsapp" size={24} color={Colors.green600} />
              </Button1>
              <Button1 title="" moreStyles={{borderColor:Colors.blue600,marginRight:10}} rippleColor={Colors.blue50} onPress={handleCall} >
                <Ionicons name="call-sharp" size={22} color={Colors.blue600} />
              </Button1> */}
              <Button1 title="" moreStyles={{borderColor:Colors.black400}} rippleColor={Colors.black50} onPress={()=>navigation.navigate('RouteScannBag')}>
                    <FontAwesome name="barcode" size={24} color={Colors.black400} />
              </Button1>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 8,
  },
  cardContent: {
    flexDirection: "row",
    marginHorizontal: 18,
    marginVertical: 20,
  },
  cardLeftSide: {
    alignItems: "center",
  },
  cardRightSide: {
    marginLeft: 16,
    flex: 1,
  },
  txtOrdenNro: {
    fontSize: 12,
    marginBottom: 10,
  },
  txtInfo: {
    fontSize: 15,
    marginBottom: 4,
  },
  arrowIcon: {
    alignSelf: "flex-end",
  },
  actionsContainer: {
    flexDirection: "row",
  },
});
export default RouteClientCard;
