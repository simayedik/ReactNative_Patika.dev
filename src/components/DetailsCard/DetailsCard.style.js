import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen"); // << burası window!

const styles = StyleSheet.create({
    
  image: {
    width: width * 0.9,
    height: height / 3,
    borderRadius: 20,
    alignSelf: 'center',
  },
  title:{
    fontWeight:'bold',
    fontSize:23,
    color:'#871B07',
    marginTop:10,
    marginHorizontal:10
  },
  areaText:{
    color:'#871B07',
    fontSize:16,
    fontWeight:'bold',
    textAlign:'right',
    right:10
  },
  instructions:{
    fontSize:18,
    margin:10,
    marginBottom:30
  }
});

export default styles;
