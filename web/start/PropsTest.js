import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropsChildrenTest from "./PropsChildrenTest";

/**
 * prop（propety的简写）是从外部传递给组件的数据，一个组件通过定义自己能够接受的prop就定义了自己对外公共接口。
 */
export default class PropsTest extends Component{

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.navTitle}`,
    });

    render(){
        return (

            <View style={styles.container}>
                <PropsChildrenTest
                    platform="iOS"
                />

                <PropsChildrenTest style={{marginTop:20}}
                   platform="Android"
                />

                <PropsChildrenTest style={{marginTop:20}}
                />
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

