import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        borderTopLeftRadius:35,
        borderBottomLeftRadius:35,
        borderTopRightRadius:8,
        borderBottomRightRadius:8,
        paddingHorizontal:10,
        borderColor:'#999999',
        borderWidth:2,
        margin:10,
        flexDirection:'row',
        alignItems:'center'
    },
    image:{
        width:100,
        height:100,
        resizeMode:'contain',
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        marginHorizontal:20
    }
})


export default styles