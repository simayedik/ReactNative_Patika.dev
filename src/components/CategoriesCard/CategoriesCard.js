import React from 'react'
import { Image, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import styles from './CategoriesCard.style';

function CategoriesCard({ data,onSelect}) {

    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image source={{ uri: data.strCategoryThumb }} style={styles.image} />
                <Text style={styles.text}>{data.strCategory}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CategoriesCard;