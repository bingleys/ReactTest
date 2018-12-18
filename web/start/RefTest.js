import React, {Component} from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
import StateTest from "./StateTest";

/**
 * ref
 */
export default class RefTest extends Component{

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.navTitle}`,
    });

    constructor(props){
        super(props)
        this.state={
            x:0
        }
    }



    render(){
        return (

            <View style={styles.container}>
                <Text style={styles.instructions}
                onPress={
                    ()=>{
                        this.setState({
                            x:this.refs.refTest.getX()
                        })
                    }
                }
                > 获取当前位置：{this.state.x}</Text>

                <StateTest ref= "refTest"/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        marginTop:10,
        fontSize:20
    },
});

