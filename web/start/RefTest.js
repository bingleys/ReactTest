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


    /**
     * 我们在DOM Element中使用ref时，回调函数将接收当前的DOM元素作为参数，然后存储一个指向这个DOM元素的引用
     * 当组件挂载后和卸载后，以及ref属性本身发生变化时，回调函数就会被调用。
     * @returns {*}
     */
    render(){
        return (

            <View style={styles.container}>
                <Text style={styles.instructions}
                onPress={
                    ()=>{
                        this.setState({
                            x:this.refTest.getX()
                        })
                    }
                }
                > 获取当前位置：{this.state.x}</Text>

                <StateTest ref = {(StateTest) => {this.refTest = StateTest}}/>
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

