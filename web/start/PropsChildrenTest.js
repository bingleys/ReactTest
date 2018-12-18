import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ReactPropTypes from 'prop-types';

/**
 * HTML中的属性，只支持字符串类型，而React组件，除了支持字符串，还支持数字（2），函数（onButtonClick ），对象（{ color: "red" }）。
    只要prop值不是字符串类型，就必须要用{}把prop值括住。所以对象变量会有两层{{}}。
 */
export default class PropsChildrenTest extends Component{

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.navTitle}`,
    });

    /**
     * 为属性指定默认值
     */
    static defaultProps = {
      platform: 'Android'
    };

    /**
     * yard install --save prop-types 导入类型检查库
     * 类型检查: 当你给属性传递了无效值时，JavsScript 控制台将会打印警告
     *  属性后面加上 `isRequired`后缀，这样如果这个属性父组件没有提供时，会打印警告信息
     */
   static propTypes = {
       //platform: PropTypes.string
        platform:ReactPropTypes.oneOf(['Android', 'iOS']).isRequired
   }



    render(){
        return (

            <View style={styles.container}>
                <Text style={{fontSize:20,textAlign:'center'}}> Hello,{this.props.platform} </Text>
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

