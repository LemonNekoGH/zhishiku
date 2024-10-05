# Unity UI Toolkit
## 在 3D 场景中使 2D UI 响应鼠标操作



## 注意事项

1. `uss`不支持自定义的缓动曲线

1. 如果需要让`ListView`中的项目在鼠标悬浮时不改变背景，和`css`一样，在`:hover`伪类中设置`background-color`即可

1. 如果需要让`ListView`中的项目不被选中，需要将`ListView`的`Selection Type`属性设置为`None`结合第二点，可以实现`ListView`中的项目的样式在鼠标任何操作下都不受影响

1. 渲染在`Canvas`中的`UI Toolkit`不能跨场景，否则会报错误，但这个错误来源是`UI Toolkit`，如果要跨场景，需要使用传统的`UGUI`

## 问题记录

### `ListView`无法正确的进行滚动 2023-09-04

请确保此`ListView`的`Flex Grow`和`Flex Shrink`值是默认值。

请确保此`ListView`的高度设置不是`auto`

### 在`RenderTexture`中的`UIDocument`会阻挡其它`UIDocument`，导致其它`UIDocument`不响应鼠标事件

在需要其它`UI`响应鼠标事件时，将`RenderTexture`中的`UIDocument`的根节点的`display`设置为`none`即可
