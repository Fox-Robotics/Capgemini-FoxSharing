import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Info from './Info.jsx'
import CerrarSesion from './CerrarSesion.jsx'
import theme from '../theme.js'

const styles = StyleSheet.create(
    {
        container:{
            justifyContent : 'center',
            alignItems : 'center',
            paddingTop : 70,
        },
        profile: {
            width: 150,
            height: 150,
            borderRadius: 10,
            overflow: "hidden",
        },
        subtle: {
            fontSize: 14,
            paddingTop: 10,
            opacity: 0.4,
        },
        bigBold: {
            fontSize: 32,
            fontWeight : theme.fontWeights.bold,
        },
        break: {
            paddingTop: 40,
            paddingBottom: 20,
        },
        smallBreak: {
            paddingTop: 30,
        },
    }
)

const Cuenta = () => {
    return(
        <View style = {styles.container}>
            <Image style = {styles.profile} source={require('../data/pfp.png')}/>
            <Text style = {styles.subtle}>Cambiar foto</Text>
            <Text style = {[styles.bigBold, styles.break]}>Nombre</Text>
            <Info dato = '+00 (000) 000 - 0000' info = 'Teléfono'></Info>
            <Info dato = 'ROAJ771012HMCRGR09' info = 'CURP'></Info>
            <Info dato = 'example@example.com' info = 'E-mail'></Info>
            <Text style = {styles.smallBreak}/>
            <CerrarSesion/>
        </View>
    )
}

export default Cuenta