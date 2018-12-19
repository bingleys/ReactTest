import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    FlatList,
    Text,
    Image,
    ActivityIndicator
} from 'react-native';
import NetUtils from "./NetUtils";

export default class FetchTest extends Component {

    static navigationOptions = ({navigation}) => ({
        title: `${navigation.state.params.navTitle}`,
    });

    constructor(props) {
        console.log('constructor============');
        super(props);
        this.state = {
            isLoading: true,
            dataList: []
        }
    }

    componentDidMount() {
        console.log('componentDidMount============');
        this.fetchNet();
    }

    /**
     * fetch网络请求
     */
    fetchData() {
        fetch('http://www.imooc.com/api/teacher?type=4&num=20', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(function (response) {
            console.log('response', response)
            return response.json();
        }).then(function (jsonData) {
            console.log('json', jsonData);
            this.parseData(jsonData)

        }.bind(this)).catch((error) => {
            alert(error);
        })
    }

    /**
     * 封装fetch
     */
    fetchNet() {
        NetUtils.get('http://www.imooc.com/api/teacher?type=4&num=20')
            .then(
                (json) => {
                    this.parseData(json)
                },
                (error) => {
                    alert(error);
                });
    }


    parseData(json) {
        let data = json.data;
        let dataCopy = [];
        data.map((item, i) => {
            dataCopy.push({
                key: i,
                value: item,
            })
        })
        //数据变化 setState
        this.setState({
            dataList: dataCopy,
            isLoading: false,
        })
        console.log('dataList', this.state.dataList)
        data = null;
        dataCopy = null;
    }

    renderItemView({item}) {
        return (
            <View style={styles.cellStyle}>
                <Image style={styles.cellimage}
                       source={{uri: item.value.picSmall}}/>
                <Text style={styles.celltxt}
                      numberOfLines={2}>{item.value.name}</Text>
            </View>
        );
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    animating={true}
                    style={[styles.gray, {height: 80}]}
                    color='skyblue'
                    size="large"
                />
            </View>
        );
    }

    renderList() {
        return (
            <FlatList
                data={this.state.dataList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.renderItemView}/>
        );
    }

    render() {

        if (this.state.isLoading) {
            return this.renderLoadingView()
        } else {
            return this.renderList()
        }
    }

}

const styles = StyleSheet.create({
    cellStyle: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        margin: 6,
        borderRadius: 10
    },
    cellimage: {
        width: 120,
        height: 80,
        borderRadius: 10
    },
    celltxt: {
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        fontSize: 16
    }


})