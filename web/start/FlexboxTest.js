import React, {Component} from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';

/**
 *  https://reactnative.cn/docs/flexbox/
 *
 *  flexDirection 主轴方向 ： row 水平  column竖直
 *  justifyContent 沿主轴排列方式  ：flex-start、center、flex-end、space-around、space-between、space-evenly
 *  alignItems 其子元素沿着次轴（与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式
 *             flex-start、center、flex-end、stretch
 */
export default class FlexboxTest extends Component{

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.navTitle}`,
    });

    constructor(props){
        super(props)

    }



    render(){
        return (

            <View style={{
                flex: 1,
                flexDirection:'row',
                justifyContent:'space-evenly',
                alignItems:'center'
            }}>

                <View style={{width:20,height:60,backgroundColor:'skyblue'}}/>
                <View style={{width:40,height: 80, backgroundColor: 'powderblue'}} />
                <View style={{width:60,height: 100, backgroundColor: 'steelblue'}} />

            </View>
        )
    }
}

