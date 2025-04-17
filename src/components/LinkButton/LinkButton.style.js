import { Dimensions, StyleSheet } from "react-native";

const {width} = Dimensions.get('screen')

const styles = StyleSheet.create({
    linkButton:{
      backgroundColor:'red',
      borderRadius:20,
      alignItems:'center',
      marginHorizontal:width/4,
      marginBottom:10,
      paddingVertical:10,  
      width:width/2
    },
    text:{
        color:'white',
        textAlign:'center'
    }
})

export default styles;