import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Splash = () =>{

    // setTimeout(() => {
    //     this.props.navigation.navigate("Login")
    // },3000);
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Splash screen</Text>
        </View>
    )
}

export default Splash

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