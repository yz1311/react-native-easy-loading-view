import * as React from 'react';
import {ColorValue, StyleProp, TextStyle, ViewStyle} from "react-native";

interface ILoadingProps {
    style?: StyleProp<ViewStyle>;
    /**
     * 外层的背景色
     * default: rgba(0,0,0,.2)
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

declare class Loading extends React.Component<ILoadingProps> {
    static defaultProps: Partial<ILoadingProps>;
    static loadingDidCreate: (view: Loading)=>void;
    static showLoading: (message:string)=>void;
    static hideLoading: ()=>void;
}

export default Loading;
