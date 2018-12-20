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

class AppMain extends Component {

    static navigationOptions = {
        title: 'Demo',
    };

    constructor(props) {
        super(props)

        let temp = [];
        let keys = RootStack.router.childRouters;
        let i = 0;
        for(let item in keys){
            if(i != 0){
                temp.push({
                    key: i,
                    value: item.toString(),
                })
            }
            i++;
        }
        this.state = {
            data:temp,
        }
        temp = null;
        keys = null;
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    horizontal={false}
                    keyExtractor={(item, index) => index.toString()}
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
                    <Text style={styles.cellText}> {item.value} </Text>
                </View>
            </TouchableOpacity>
        );
    }


    onItemPressed(item) {
        const {navigate} = this.props.navigation;
        navigate(item.value,{navTitle:item.value})
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
    FlexBoxTest:{screen:FlexboxTest},
    FetchTest:{screen:FetchTest}
});

export default createAppContainer(RootStack);

