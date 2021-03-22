import React, { Component } from "react";
import {ColorValue, StyleProp, TextStyle, ViewStyle} from "react-native";

interface ILoadingProps {
    style?: StyleProp<ViewStyle>;
    /**
     * 外层的背景色
     * default: rgba(255,0,0,.1)
     */
    backgroundColor?: ColorValue;
    /**
     * 中间的loading样式
     */
    loadingStyle?: StyleProp<ViewStyle>;
    /**
     * 图标的大小
     */
    indicatorSize?: number;
    /**
     * 图标的颜色
     */
    indicatorColor?: number;
    renderIndicator?: (({size, style}) => React.ReactElement | null ) | null | undefined;
    indicatorStyle?: StyleProp<ViewStyle>;
    /**
     * 加载文字
     * default: 加载中
     */
    text?: string;
    /**
     * 底部的文字样式
     */
    textStyle?: StyleProp<TextStyle>;
}

export class Loading extends Component<ILoadingProps, any> {
    static defaultProps: Partial<ILoadingProps>;
}
