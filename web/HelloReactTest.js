import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class HelloReactTest extends Component{

    /**
     * `string` 是模板字符串  ${变量}
     */
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.navTitle}`,
    });

    render(){
        return (

            <View style={styles.container}>
                <Text style={{fontSize:20,textAlign:'center',marginBottom:16}}> Hello , React Native </Text>
               <Text style={{fontSize:20,textAlign:'center'}}> {instructions} </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

