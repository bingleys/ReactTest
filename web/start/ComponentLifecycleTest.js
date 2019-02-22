import React, {Component} from 'react';
import {StyleSheet,View,Button,Text} from "react-native";

/**
 * https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html
 */
export default class ComponentLifecycleTest extends Component{

    state = {
        isShow : true,
    }

    /**
     * 组件初始化调用 构造方法
     * @param props
     */
    constructor(props){
        super(props)
        console.log("----constructor")
    }



    render(){
        console.log("----render")

        return(
            <View style={styles.container}>
                <Text style={{fontSize:20}}> 组件生命周期监听 </Text>
            </View>
        )
    }

    componentDidMount(){
        console.log("----componentDidMount")

    }

    // componentWillUpdate(nextProps, nextState){
    //     console.log("----componentWillUpdate")
    // }

    shouldComponentUpdate() {
        console.log("----shouldComponentUpdate")
        return true;
    }

    componentDidUpdate(props, state, snaptshot) {
        console.log("----componentDidUpdate--" +  "snaptshot:" + snaptshot)
    }

    componentWillUnmount() {
        //组件卸载
        console.log("----componentWillUnmount")
    }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log("----getDerivedStateFromProps")
        // 这一生命周期方法是静态的，它在组件实例化或接收到新的 props 时被触发
        // 若它的返回值是对象，则将被用于更新 state ；若是 null ，则不触发 state 的更新
        // 配合 `componentDidUpdate` 使用，这一方法可以取代 `componentWillReceiveProps`

        //默认不改动state
        return null;

    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("----getSnapshotBeforeUpdate")
        // 该方法在实际改动（比如 DOM 更新）发生前的“瞬间”被调用，返回值将作为 `componentDidUpdate` 的第三个参数

        // 配合 `componentDidUpdate` 使用，这一方法可以取代 `componentWillUpdate`
        return "test"
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
