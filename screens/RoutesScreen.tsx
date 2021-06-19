import axios from 'axios'
import React from 'react'
import {View,StyleSheet,} from 'react-native'
import RouteCard from '../components/Cards/RouteCard'
function RoutesScreen() {

    return (
        <View style={styles.screen}>
            <RouteCard></RouteCard>
            <RouteCard></RouteCard>
            <RouteCard></RouteCard>
            <RouteCard></RouteCard>
        </View>
    )
}


const styles = StyleSheet.create({
    screen:{
        padding:6,
    },
})
export default RoutesScreen