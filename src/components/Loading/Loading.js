
import React from 'react'
import { Image, View ,Text} from 'react-native';

import LottieView from 'lottie-react-native';
import styles from './Loading.style';
function Loading(){
    return(
     <View style={styles.container}>
      <LottieView source={require('../../Data/Loading.json')}  style={styles.lottie}  autoPlay loop  />
     </View>
    );
}



export default Loading;