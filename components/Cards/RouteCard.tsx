import { AntDesign,FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text,TouchableOpacity } from "react-native";
import IconBtn from "../Buttons/IconBtn";

function RouteCard() {
    const navigation = useNavigation()

  return (
    <TouchableOpacity activeOpacity={0.75}  style={styles.cardContainer} onPress={()=>navigation.navigate('Route')}>
      <View style={styles.cardContent}>
          <View style={styles.cardLeftSide}>
              <Text style={styles.txtOrdenNro}>#1235445</Text>
              <IconBtn>
                 <FontAwesome name="question" size={28} color="#FF7500" />
              </IconBtn>
          </View>
          <View style={styles.cardRightSide}>
            <Text style={styles.txtInfo}>Puntos a Recorrer: 3</Text>
            <Text style={styles.txtInfo}>Bolsas a Recojer: 7</Text>
            <Text style={styles.txtInfo}>Distancia: 37k</Text>
            <AntDesign style={styles.arrowIcon} name="rightcircleo" size={26} color="black" />
          </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 8,
      },
      cardContent: {
        flexDirection:'row',
        marginHorizontal: 18,
        marginVertical: 20,
      },
      cardLeftSide:{
/*         borderWidth:1,
        borderColor:'red', */
        alignItems:'center',
      },
      cardRightSide:{
/*         borderWidth:1,
        borderColor:'red', */
        marginLeft:16,
        flex:1
      },
      txtOrdenNro:{
          fontSize:12,
          marginBottom:10,
      },
      txtInfo:{
        fontSize:15,
        marginBottom:4
      },
      arrowIcon:{
          alignSelf:'flex-end' 
      },
});
export default RouteCard;
