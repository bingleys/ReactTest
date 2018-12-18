import React, {Component} from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';
import ComponentLifecycleTest from "./ComponentLifecycleTest";




/**
 * 必须实现 render方法，其他组件生命周期方法不是必须实现
 */
export default class ComponentTest extends Component{


    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.navTitle}`,
    });

    state = {
        count:0,
        isShow:true,
    }
    constructor(props){
        super(props)
    }

    /**
     * 一个组件必须有这个方法，作用在于渲染DOM (UI)
     * @returns {*}
     */
    render(){
        return (
            /**
             *  style={}大括号内是放置对象
             *  行内样式：写行内样式的时候需要使用两个{}：{{}}
             */
            <View style={styles.container}>


                <Text style={{fontSize:20,color:'#844500'}}
                      onPress={
                          ()=>{
                              this.setState({
                                  count: this.state.count + 1,
                              });
                          }
                      }>点击我</Text>

                <Text style={styles.instructions}> 点击了{this.state.count}次 </Text>

                <Text style={{fontSize:20,color:'#841564',marginTop:20,marginBottom:10}}
                      onPress={
                          ()=>{
                              this.setState({
                                  isShow: !this.state.isShow,
                              });
                          }
                      }>{this.state.isShow ? "移除" : "添加"}</Text>

                {this.state.isShow ?  <ComponentLifecycleTest/> : null}
            </View>
        )
    }
}

/**
 * JS 对象来书写 CSS
 */
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
        marginTop:10,
    },
});

