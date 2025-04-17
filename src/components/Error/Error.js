import LottieView from 'lottie-react-native'
import React from 'react'
import { View } from 'react-native'
import styles from './Error.style'

function Error(){
    return(
        <View style={styles.container}>
            <LottieView source={require('../../Data/Error.json')} autoPlay loop style={styles.lottie} />
        </View>
    )
}

export default Error;