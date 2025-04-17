import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './LinkButton.style'

export default function LinkButton({url}) {

   const handlePress = ()=>{
    Linking.openURL(url)
   }

  return (
    <TouchableOpacity onPress={handlePress} style={styles.linkButton}>
      <Text style={styles.text}>Watch On Youtube</Text>
    </TouchableOpacity>
  )
}

