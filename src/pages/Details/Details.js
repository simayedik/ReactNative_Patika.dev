import React from 'react'
import { FlatList, Text, View } from 'react-native'
import useFetch from '../../hooks/useFetch'
import DetailsCard from '../../components/DetailsCard'



function Details({ route }) {

  const { id } = route.params;


  return (
    <View style={{flex:1}}>
       <DetailsCard id={id}/>
    </View>
  )

}

export default Details