import React, {Component} from 'react';
import {
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Text,
    View
} from 'react-native';
//屏幕上方导航栏
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HelloReactTest from "./HelloReactTest";
import ComponentTest from "./start/ComponentTest";
import PropsTest from "./start/PropsTest";
import StateTest from "./start/StateTest";
import RefTest from "./start/RefTest"
import FlexboxTest from "./start/FlexboxTest";
import FetchTest from "./net/FetchTest"

var Items = [
    {key:'HelloReactTest'},
    {key:'ComponentTest'},
    {key:'PropsTest'},
    {key:'StateTest'},
    {key:'RefTest'},
    {key:'FlexboxTest'},
    {key:'FetchTest'}
    ];

class AppMain extends  Component {

    static navigationOptions = {
        title: 'Demo',
    };

    constructor(props) {
        super(props)
        this.state = {
            data:Items,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    horizontal={false}
                    renderItem={({item}) => this._renderItem(item)}
                />
            </View>
        );
    }

    _renderItem(item){
        return (
            <TouchableOpacity activeOpacity={0.3}
                              onPress={()  => this.onItemPressed(item)}>
                <View style={styles.cellStyle}>
                    <Text style={styles.cellText}> {item.key} </Text>
                </View>
            </TouchableOpacity>
        );
    }


    onItemPressed(item) {
        const {navigate} = this.props.navigation;
        navigate(item.key,{navTitle:item.key})
    };
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9'
    },
    cellStyle: {
        flexDirection: 'row', //设置子元素布局方式 row：水平轴 column：竖直轴
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: 0.5,
        alignItems: 'center'
    },

    cellText: {
        fontSize: 14,
        lineHeight: 40,
        marginLeft: 20,
        color: '#7a8698'
    },
})

const RootStack = createStackNavigator({
    AppMain:{screen:AppMain},
    HelloReactTest:{screen:HelloReactTest},
    ComponentTest:{screen:ComponentTest},
    PropsTest:{screen:PropsTest},
    StateTest:{screen:StateTest},
    RefTest:{screen:RefTest},
    FlexboxTest:{screen:FlexboxTest},
    FetchTest:{screen:FetchTest}
});

export default createAppContainer(RootStack);

