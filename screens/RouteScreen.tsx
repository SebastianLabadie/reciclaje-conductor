import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import RouteClientCard from '../components/Cards/RouteClientCard'
import Colors from '../constants/Colors'
import Button1 from '../components/Buttons/Button1'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'

function RouteScreen() {
    const navigation = useNavigation()

    return (
        <View style={styles.screen}>
             <Button1 title="Ver Recorrido" moreStyles={{borderColor:Colors.purple800}} rippleColor={Colors.purple200} onPress={()=>navigation.navigate('RouteCollectionPoints')}>
                <Feather name="map" size={24} color={Colors.purple800} />
              </Button1>
            <RouteClientCard></RouteClientCard>
        </View>
    )
}


const styles = StyleSheet.create({
    screen:{
        padding:6,
    },
})
export default RouteScreen