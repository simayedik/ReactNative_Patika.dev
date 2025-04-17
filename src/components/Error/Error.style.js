import { Dimensions, StyleSheet } from "react-native";


const{height} = Dimensions.get('screen');

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
    },
    lottie:{
        flex:1/3,
   
    }
})


export default styles;