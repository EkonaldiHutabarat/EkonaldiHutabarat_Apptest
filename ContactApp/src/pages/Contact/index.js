import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Contact = () =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Contact</Text>
        </View>
    )
}

export default Contact

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff',
        justifyContent:'center',
    },
    text:{
        textAlign:'center',
    }
})