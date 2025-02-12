# 快捷分享

## 使用
- 长按短时记忆后出现快捷分享，或者直接点击「向右分享」的按钮
- 出现快捷分享的弹窗
- 选择需要跳转的应用
    - 自动复制内容，并打开应用
    - 如果设置了参数，会在打开应用后自动填入

## 配置
如何配置才能更有效地使用快捷分享呢

### 设置入口
- 短时记忆的快捷分享窗口，列表下面有设置的入口
- 进入「设置」-「扩展」-「快捷分享」

### 添加

一共有三种添加方式。

### 添加默认
在应用中内容了8个默认的应用，会在未添加任何快捷分享时，展示出来。可以根据自己的需要选择对应的应用。

### 来源添加
在界面的下方，有来源添加的入口，在这里可以添加来自社区的快捷分享来源。

因为不同的人对URL-scheme的需求和理解不一样，但是使用场景会有重合。直接使用其他同学制作好的来源，添加自己需要的快捷分享应用，效率加倍。

ToMemo本身也维护了一个[公开的来源](https://tomemo.top/files/data/quick_share_data_set.json)，大家可以按需使用。如果需要添加其他应用，随时在QQ、TG、邮件等方式告诉我。

### 手动添加 - 进阶版
可以直接在已添加的列表下方，点击「自定义快捷分享」的按钮，进入添加的页面。

#### 参数

| 参数名称 | 解释 | 备注 |
| -- | -- | -- |
| 图标 | 在快捷分享弹窗中展示出来的，可以快速识别 | 可以在搜索中直接从App Store中搜索获取图标 |
| 名称 | 快捷分享的名称 | 可以是应用名、可以是其他说明，用来区分不同的快捷分享 | 
| URL-Scheme | 跳转路径 | 点击后，自动打开的链接地址 |

**获取图表地址的快捷指令**

在另一个快捷指令的基础上做了删减，可以从App Store中提取图标的URL地址。
[快速打开快捷指令](https://www.icloud.com/shortcuts/9eb6e1d92cad4a42a3808d423a4ac80f)

**URL-Scheme**

如果需要将当前短时记忆的内容自动带入到目标应用中，可以使用参数`{{params}}`。

```
sms://;?&body={{params}}
```
这个URL-Scheme会在执行时，自动将短时记忆的内容填入短信内容。

### 编辑

无论以哪种方式添加，都可以单独编辑，以满足自己不同场景的需要。

### 其他

#### 展示细节
开启这个选项后，会在界面中展示出快捷指令的链接信息。

#### 刷新来源数据
点击这个按钮后，会自动刷新来源中的数据（名称、作者等），也会刷新选择来源后展示的可选择内容。

**但是不会刷新已经添加的快捷指令的信息，需要自行手动调整**


::: tip URL-Scheme资源

[含参数的 URL Scheme 收集](https://gist.github.com/JamesHopbourn/046bc341e7debfd0c86e3b388d983c53?permalink_comment_id=4060886)

[iOS常用URL Scheme附录](https://cloud.tencent.com/developer/article/1397306)

:::