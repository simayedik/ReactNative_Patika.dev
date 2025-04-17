import React from 'react'
import { Text, View, Image, Dimensions, TouchableWithoutFeedback } from 'react-native'
import styles from './MealsCard.style'

function MealsCard({ data ,onSelect}) {

    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            
            <View style={styles.container}>
                <Image
                    source={{ uri: data.strMealThumb }}
                    style={styles.image}
                />
                <Text style={styles.text}>{data.strMeal}</Text>
            </View>

        </TouchableWithoutFeedback>
      
    )
}

export default MealsCard