
# react-native-easy-loading-view

[![npm downloads](https://img.shields.io/npm/@yz1311/react-native-easy-loading-view.svg)](https://npm.im/@yz1311/react-native-easy-loading-view)

## 预览
![](http://imgfile.oytour.com/Upload/Common/App/loading_preview0.gif)
![](http://imgfile.oytour.com/Upload/Common/App/loading_preview_new.gif)

## 开始

`$ npm install react-native-easy-loading-view react-native-animated-spinkit --save`

## 例子
Check [example](https://github.com/Itangjie/react-native-easy-loading-view/blob/master/example) in the  folder.

```bash
$ cd example
$ npm install
$ react-native run-ios
```

## 用法
必须在根节点引入Loading组件,在整个项目中只需要且只能引用一个
```jsx
import Loading from '@yz1311/react-native-easy-loading-view';
render() {
        return (
            <View style={[{flex:1}]}>
                <App/>
                <Loading
                    ref={(view)=>{Loading.loadingDidCreate(view)}} // 必须调用
                />
            </View>
        );
    }
```
使用loading(显示或者隐藏)
```jsx
import Loading from '@yz1311/react-native-easy-loading-view';

Loading.showLoading("加载中..."); //显示loading

Loading.hideLoading(); // 消失
```
### 参数

| 属性  | 默认值  | 类型 | 描述 |
| :------------ |:---------------:| :---------------:| :-----|
| style | null | `style` | 最外层的样式 |
| backgroundColor | rgba(255,0,0,.1) | `color` | 最外层的背景色 |
| loadingStyle | 0 | `style` | 加载loading样式 |
| indicatorSize | 30 | `number` | 加载图标的大小 |
| indicatorColor | #ffffff | `color` | 加载图标的颜色 |
| renderIndicator | null | `element` | 加载图标自定义 |
| indicatorStyle | null | `style` | 加载图标样式 |
| text | 加载中... | `string` | 加载文字 |
| textStyle | null | `style` | 加载文字样式 |

### 方法

#### showLoading(text)

参数:

| 名称  | 类型     | 默认值 |  描述 | 可选 |
| :---- | :------: | :------: | :--- | :--- |
| text | `string`   | 加载中... | 底部文字 | 是 |
#### hideLoading()
