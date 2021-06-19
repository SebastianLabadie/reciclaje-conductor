import React from "react";
import { TouchableNativeFeedback } from "react-native";
import { View, StyleSheet, Text } from "react-native";

function Button1({ onPress,moreStyles,children,title,rippleColor }: any) {
  return (
    <TouchableNativeFeedback
      onPress={onPress}
      background={TouchableNativeFeedback.Ripple(rippleColor,false)}
    >
      <View style={{ ...styles.btn, ...moreStyles }}>
          {children}
          {title ? <Text style={styles.txtTitle}>{title}</Text> : null}
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({

      btn:{
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: '#fff',
        elevation: 2, // Android
        paddingHorizontal:24,
        paddingVertical:2,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius:15,
        borderWidth:1,
      },
      txtTitle:{
        marginLeft:8,
      },
});
export default Button1;
