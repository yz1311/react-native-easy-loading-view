/**
 * Created by tangjie on 2018/4/4.
 * Modified by yz1311 on 2021/3/22
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Circle } from 'react-native-animated-spinkit';

let loadingView = null;

export default class LoadingView extends Component {

    static defaultProps = {
        backgroundColor : 'rgba(0,0,0,.2)',
        renderIndicator : null,
        indicatorSize: 50,
        indicatorColor: '#ffffff',
        offsetY : 0,
    };

    constructor(props){
        super(props);
        this.state={
            show : false,
            backgroundColor : this.props.backgroundColor,
            loadingText : this.props.text,
            extraTop : this.props.offsetY,
        };
    }

    static loadingDidCreate(ref){
        loadingView = ref;
    }

    /**
     * 显示loading
     * @param text 等待提示问题，默认显示loadingDefaultText
     * @param extraTop 中间动画视图y轴额外偏移量
     * @param bkColor 外层容器背景色
     */
    static showLoading(text='',extraTop=0,bkColor=''){
        loadingView.showLoading(text,extraTop,bkColor)
    }


    static hideLoading(){
        loadingView.hideLoading()
    }

    showLoading(text='',extraTop=0,bkColor=''){
        this.setState({
            show : true,
            loadingText : text === '' ? this.props.text : text,
            backgroundColor : bkColor === '' ? this.props.backgroundColor : bkColor,
            extraTop : extraTop,
        });
    }


    hideLoading(){
        this.setState({
            show : false,
            loadingText: this.props.text,
            backgroundColor : this.props.backgroundColor,
            extraTop : 0
        });
    }

    render() {
        const {loadingStyle,renderIndicator,textStyle,offsetY,indicatorSize, indicatorColor,indicatorStyle} = this.props;
        if(!this.state.show) {
            return null;
        }
        return(
            <View style={[styles.container,
                {backgroundColor : this.state.backgroundColor,},
                this.props.style]}>
                <View style={[styles.loadingStyle,loadingStyle,{marginTop : offsetY + this.state.extraTop}]}>
                    {
                        renderIndicator?
                            renderIndicator({size:indicatorSize, color: indicatorColor, style:indicatorStyle})
                            :
                            <Circle size={indicatorSize} color={indicatorColor} />
                    }
                    {this.state.loadingText != null && this.state.loadingText.length > 0 ?
                        <Text style={[styles.loadingTextStyle, textStyle]}>{this.state.loadingText}</Text> : null}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent : 'center',
        alignItems : 'center',
        position : 'absolute',
        left: 0, right: 0, top: 0, bottom: 0
    },
    loadingStyle : {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop : 0,
        padding: 15,
        borderRadius: 6,
        backgroundColor : '#777777',
        //文字很短的时候，如果太窄很丑
        minWidth: 110,
        minHeight: 110,
    },
    loadingTextStyle :{
        color : '#ffffff',
        fontSize : 14,
        marginTop : 15
    },
});
