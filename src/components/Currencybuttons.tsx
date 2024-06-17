import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { PropsWithChildren } from 'react'

type CurrencyButtonProp=PropsWithChildren<{
    name:string,
    flag:string,

}>

const Currencybuttons = (props:CurrencyButtonProp) => {
  return (
    <View style={styles.buttoncontainer}>
      <Text style={styles.flag}> {props.flag} </Text>
      <Text style={styles.country}>   {props.name}  </Text>
    </View>
  )
}

export default Currencybuttons

const styles = StyleSheet.create({
    buttoncontainer:{
        alignItems:'center',
    },
    flag:{
        fontSize:28,
        color:'white',
        marginBottom:4,
    },
    country:{
        fontSize:14,
        color:'white',
        
    }
})