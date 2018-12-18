import React, {Component} from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';

/**
 * props是在父组件中指定,state 是组件内部定义，一般在constructor中初始化state
 */
export default class StateTest extends Component{

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.navTitle}`,
    });

    constructor(props){
        super(props)
        this.state = {
            imgStart:0
        }
    }

    getX(){
        return this.state.imgStart
    }

    render(){
        return (

            <View style={{flex: 1,backgroundColor: '#F5FCFF',flexDirection:'column'}}>

                <View style={{marginTop:20, justifyContent: 'center',flexDirection:'row'}}>
                    <Text style={{fontSize:20,color:'#841564'}}
                          onPress={
                              ()=>{
                                  this.setState({
                                      imgStart: this.state.imgStart + 10,
                                  })
                              }
                          }> 右移</Text>

                    <Text style={{fontSize:20,color:'#841564',marginLeft:20}}
                          onPress={
                              ()=>{
                                  this.setState({
                                      imgStart: this.state.imgStart - 10,
                                  })
                              }
                          }> 左移</Text>
                </View>

                <View style={styles.container}>
                <Image
                    source={require('../../img/vehicle.png')}
                       style={{start:this.state.imgStart}}/>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
});

