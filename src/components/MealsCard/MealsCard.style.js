import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const {width} = Dimensions.get("screen")

const styles = StyleSheet.create({
    container:{
     alignItems:'center',
     marginVertical:15
    },
    image:{
        width:width*0.9,
        height:280,
        borderRadius:30
    },

    text:{
        fontSize:24,
        fontWeight:'bold',
        position:'absolute',
        bottom:0,
        color:'white',
        textAlign:'center',
        backgroundColor: 'rgba(41, 41, 41, 0.6)' ,
        width:width*0.9,
        paddingVertical:10,
        borderBottomRightRadius:30,
        borderBottomLeftRadius:30,

    
     }
})

export default styles;