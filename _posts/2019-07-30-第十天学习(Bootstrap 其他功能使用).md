---
layout: post
title: 'Bootstrap 其他功能使用'
date: 2019-07-30
author: Elin159
color: rgb(111,99,111)
cover: 'https://images.pexels.com/photos/2194062/pexels-photo-2194062.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
tags: bootstrap
Subtitle: '栅格 排版 其他功能使用'
---



# 第十天学习

1. 栅格系统使用
2. Less mixin 和变量
3. 排版
4. 其它功能使用

## 栅格系统使用

### 媒体查询

在栅格系统中，我们在Less文件中使用以下媒体查询来创建关键的分界点阈值。

**小屏幕(平板，大于等于768px)**

```css
@media (min-width:@screen-sm-min) { ... }
```

**中等屏幕(桌面显示器，大于等于992px)**

```css
@media (min-width:@screen-md-min) { ... }
```

**大屏幕(大桌面显示器，大于等于 1200px)**

```css
@media (min-width:@screen-lg-min) { ... }
```

### 栅格参数

通过下表可以详细查看 Bootstrap 的栅格系统是如何在多种屏幕设备上工作的。

|                       | 超小屏幕 手机 (<768px)     | 小屏幕 平板 (≥768px)                                | 中等屏幕 桌面显示器 (≥992px) | 大屏幕 大桌面显示器 (≥1200px) |
| :-------------------- | :------------------------- | :-------------------------------------------------- | :--------------------------- | :---------------------------- |
| 栅格系统行为          | 总是水平排列               | 开始是堆叠在一起的，当大于这些阈值时将变为水平排列C |                              |                               |
| `.container` 最大宽度 | None （自动）              | 750px                                               | 970px                        | 1170px                        |
| 类前缀                | `.col-xs-`                 | `.col-sm-`                                          | `.col-md-`                   | `.col-lg-`                    |
| 列（column）数        | 12                         |                                                     |                              |                               |
| 最大列（column）宽    | 自动                       | ~62px                                               | ~81px                        | ~97px                         |
| 槽（gutter）宽        | 30px （每列左右均有 15px） |                                                     |                              |                               |
| 可嵌套                | 是                         |                                                     |                              |                               |
| 偏移（Offsets）       | 是                         |                                                     |                              |                               |
| 列排序                | 是                         |                                                     |                              |                               |

### 从堆叠到水平排列

使用单一的一组`.col-md-*`栅格雷，就可以创建一个基本的栅格系统，在手机和平板设备上一开始是堆叠在一起的(超小屏幕到小屏幕这一范围), 在桌面(中等)屏幕设备上变为水平排列。所有"列(column)必须放在"`.row`内。

### 流式布局容器

将最外面的布局元素`.container`修改为`.container-fluid`，就可以将固定宽度的栅格布局转换为100%宽度的布局。

```html
<div class="container-fluid">
  <div class="row">
    ...
  </div>
</div>
```

### 移动设备和桌面屏幕

如果不希望在小屏幕设备上所有列都堆叠在一起。就使用`.col-xs-*`和`.col-md-*`。

***自动适应屏幕，当超出`.col-xs-\*`范围的时候自动使用`.col-md-\*`进行栅格，当少于`.col-md-\*`的时候，自动使用`.col-xs-\*`去工作***

### 多余的列(column)将另起一行排列

如果在一个`.row`内包含的列(column)大于12个，包含多余列(column)的元素将作为一个整体但愿被另起一行排列

### 响应式列重置

即便有上面给出的四组栅格class,你也不免回碰到一些问题，例如，在某些阈值时，某些列可能会出现比别的列高的情况。为了克服这一问题，建议联合使用`.clearfix`和响应式工具类

```html
<div class="row">
  <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>
  <div class="col-cs-6 col-sm-3">.col-xs-6 .col-sm-3</div>
  <div class="clearfix visible-xs-block"></div>
  
  <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>
  <div class="col-xs-6 col-sm-3">.col-xs-6 .col-sm-3</div>
</div>
```

除了列在分界点清除响应，你可能需要重置偏移，后退或前拉某个列。

```html
<div class="row">
  <div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
  <div class="col-sm-6 col-md-5 col-md-offset-2 col-lg-6 col-lg-offset-0">.col-sm-6 .col-md-5 .col-md-offset-2 .col-lg-6 .col-lg-offset-0</div>
</div>
```

### 列偏移

使用`.col-md-offset-*`类可以将列向右侧偏移。这些类实际是通过使用`*`选择器为当前元素增加了左侧的边距(margin)。例如, `.col-md-offset-4`类将`.col-md-4`元素向右侧偏移了4个列(column)的宽度

### 嵌套列

为了使用内置的栅格系统将内容再次嵌套，可以通过添加一个新的`.row`和一系列`.col-sm-*`元素到一存在的`.col-sm-*`元素内。被嵌套的行(row)所包含的列(column)的个数不能超过12(其实，没有要求必须占满12列)

### 列排序

通过使用`.col-md-push-*`和`.col-md-pull-*`类就可以很容易的改变列(column)的顺序。

**pull在下，push在上**

```html
<div class="row">
  <div class="col-md-9 col-md-push-3">.col-md-9 .col-md-push-3</div>
  <div class="col-md-3 col-md-pull-9">.col-md-3 .col-md-pull-9</div>
</div>
```

## Less mixin 和变量

除了用于快速布局的预定义栅格类，Bootstrap还包含了一组Less变量和mixin 用于帮你生成简单、语义化的布局。

### 变量

通过变量来定义列数、槽(gutter)宽、媒体查询阈值(用于确定合适让列浮动)。我们使用这些变量生成预定义的栅格类。还有如下所示的定制mixin。

```css
@grid-columns:  12;
@grid-gutter-width  30px;
@grid-gloat-breakpoint:   768px;
```

### mixin

 mixin 用来和栅格变量一同使用，为每个列(column)生成语义化的CSS代码。

需要学习less 语法



## 排版

### 标题

HTML中的所有标题标签，`<h1>`到`<h6>`均可使用。另外，还提供了`.h1`到`.h6`类，为的是给内联(inline)属性的文本赋予标题的样式

在标题内还可以包含`<small>`标签或赋予`.small`类的元素，可以用来标记副标题。

### 页面主体

Bootstrap 将全局`font-size`设置为14px, `line-height`设置为1.428。这些属性直接赋予`<body>`元素和所有段落元素。另外,`<p>`(段落)元素还被设置了等于1/2行高(即10px)的底部外边距(margin)。

#### 中心内容

通过添加`.lead`类可以让段落突出显示。

Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.

```html
<p class="lead">...</p>
```

#### 使用Less工具构建

variables.less 文件中定义的两个Less变量决定了排版尺寸:`@font-size-base` 和`@line-height-base`。第一个变量定义了全局font-size 基准，第二个变量是line-height基准。我们使用这些变量和一些简单的公式计算出其它所有页面元素的margin、padding、和line-height。自定义这些变量即可改变Bootstrap的默认样式。

### 内联文本元素

#### Marked text

如果需要高亮展示文本使用 `<mark>`asddf`</mark>`

#### 被删除的文本

对于被删除的文本使用`<del>`标签。

#### 无用文本

对于没用的文本使用`<s>`标签

#### 插入文本

额外插入的文本使用`<ins>`标签

#### 带下划线的文本

为文本添加下划线，使用`<u>`标签

#### 小号文本

对于不需要强调的inline或block类型的文本，使用`<small>`标签包裹, 其内的文本将被设置为父容器字体大小的85%。标题元素中嵌套的`<small>`元素被设置不同的`font-size`。

你还可以为行内元素赋予`.small`类似替代的任何`<small>`元素。

#### 着重

通过增加font-weight值强调一段文本。

#### 斜体

用斜体强调一段文本。`<em>`

### 对齐

通过文本对齐类，可以简单方便的将文字重新对齐。

`text-left`向左对齐

`text-center`居中对齐

`text-right`向右对齐

`text-justify`合理对齐

`text-nowrap`文本不换行

```html
<p class="text-left">Left aligned text.</p>
<p class="text-center">Center aligned text.</p>
<p class="text-right">Right aligned text.</p>
<p class="text-justify">Justified text.</p>
<p class="text-nowrap">No wrap text.</p>
```

### 改变大小写

通过这几个类可以改变文本的大小写。

`text-lowercase`文本转小写

`text-uppercase` 文本转大写

`text-capitalize`每个单词首字母大写。

```html
<p class="text-lowercase">Lowercased text.</p>
<p class="text-uppercase">Uppercased text.</p>
<p class="text-capitalize">Capitalized text.</p>
```

### 缩略语

当鼠标悬停在缩写词上时就会显示完整内容，Bootstrap实现了对HTML的`<abbr>`元素的增强样式。缩略语元素带有`title`属性，外观表现为带有较浅的虚线框，鼠标移至上面时会变成带有“问号”的指针。如想看完整的内容可把鼠标悬停在缩略语上(对使用辅助技术的用户也可见), 但需要包含title属性

#### 基本缩略语

```html
<abbr title="attribute">attr</abbr>
```

#### 首字母缩略语

为缩略语添加`.initialism`类，可以让font-size变得稍微小些。

#### 地址

让联系信息以最接近日常使用的格式呈现。在每行结尾添加`<br>`可以保留需要的样式

### 引用

在你的文档中引用其他来源的内容。

#### 默认样式的引用

将任何HTML元素包裹在`<blockquote>`中即可表现为引用样式。对于直接引用，我们建议用`<p>`标签。

####多种引用样式

对于标准样式的`<blockquote>`，可以通过几个简单的变体就能改变风格和内容。

##### 命名来源

添加`<footer>`用于标明引用来源。来源的名称可以包裹进`<cite>`标签中。

![image-20190730141309891](/Users/elin/Library/Application Support/typora-user-images/image-20190730141309891.png)

```html
<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
```

##### 另一种展示风格

通过赋予`.blockquote-reverse`类可以让引用呈现内容右对齐的效果。

![image-20190730141426116](/Users/elin/Library/Application Support/typora-user-images/image-20190730141426116.png)

```html
<blockquote class="blockquote-reverse">
  ...
</blockquote>
```

### 列表

#### 无序列表

排列顺序无关紧要的一列元素

![image-20190730141604219](/Users/elin/Library/Application Support/typora-user-images/image-20190730141604219.png)

```html
<ul>
  <li>...</li>
</ul>
```

#### 有序列表

顺序至关重要的一组元素

![image-20190730141650772](/Users/elin/Library/Application Support/typora-user-images/image-20190730141650772.png)

```html
<ol>
  <li>...</li>
</ol>
```

#### 无样式列表

移除了默认的 `list-style` 样式和左侧外边距的一组元素(只针对直接子元素)。这是针对直接子元素的，也就是说，你需要对所有嵌套的列表都添加这个类才能具有同样的样式。

![image-20190730142202163](/Users/elin/Library/Application Support/typora-user-images/image-20190730142202163.png)

```html
<ul class="list-unstyled">
  <li>...</li>
</ul>
```

#### 内联列表

通过设置`display:inline-block;`并添加少量的内补(padding), 将所有元素放置于同一行。

![image-20190730142320382](/Users/elin/Library/Application Support/typora-user-images/image-20190730142320382.png)

```html
<ul class="list-inline">
  <li>...</li>
</ul>
```

#### 描述

带有描述的短语列表。

![image-20190730142427375](/Users/elin/Library/Application Support/typora-user-images/image-20190730142427375.png)

```html
<dl>
  <dt>...</dt>
  <dd>...</dd>
</dl>
```

##### 水平排列的描述

`.dl-horizontal`可以让`<dl>`内的短语及其描述排在一行。开始是像`<dl>`的默认样式堆叠在一起，随着导航条逐渐展开而排序在一行

![image-20190730142647778](/Users/elin/Library/Application Support/typora-user-images/image-20190730142647778.png)

```html
<dl class="dl-horizontal">
  <dt>...</dt>
  <dd>...</dd>
</dl>
```

##### 自动截断

通过`text-overflow`属性，水平排列的描述列表将会截断左侧太长的短语。在较窄的视口内，列表将变为默认堆叠排列的布局方式。



## 代码

### 内联代码

通过`<code>`标签包裹内联样式的代码片段

![image-20190730143306387](/Users/elin/Library/Application Support/typora-user-images/image-20190730143306387.png)

```html
For example, <code>&lt;section&gt;</code> should be wrapped as inline.
```

### 用户输入

通过`<kbd>`标签标记用户通过键盘输入的内容

![image-20190730143429543](/Users/elin/Library/Application Support/typora-user-images/image-20190730143429543.png)

```html
To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br>
To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
```

### 代码块

多行代码可以使用`<pre>`标签。为了正确的展示代码，注意将尖括号做转义处理。

![image-20190730143700293](/Users/elin/Library/Application Support/typora-user-images/image-20190730143700293.png)

```html
<pre>&lt;p&gt;Sample text here...&lt;/p&gt;</pre>
```

还可以使用`.pre-scrollable`类，其作用是设置max-height为350px,并在垂直方向展示滚动条。

### 变量

通过`<var>`标签标记变量。

![image-20190730143831828](/Users/elin/Library/Application Support/typora-user-images/image-20190730143831828.png)

```html
<var>y</var> = <var>m</var><var>x</var> + <var>b</var>
```

### 程序输出

通过`<samp>`标签来标记程序输出的内容

![image-20190730143915524](/Users/elin/Library/Application Support/typora-user-images/image-20190730143915524.png)

```html
<samp>This text is meant to be treated as sample output from a computer program.</samp>
```



## 表格

### 基本实例

为任意`<table>`标签添加`.table`类可以为其赋予基本的样式 — 少量的内补(padding)和水平方向的分隔线。这种方式看起来很多余！？ 但是我们觉得，表格元素使用的很广泛，如果我们为其赋予默认样式可能会影响例如日历和日期选择之类的插件，所以我们选择将此样式独立出来。

![image-20190730144239988](/Users/elin/Library/Application Support/typora-user-images/image-20190730144239988.png)

```html
<table class="table">
  ...
</table>
```

### 条纹状表格

通过`.table-striped`类可以给`<tbody>`之内的每一行增加斑马条纹样式。

**条纹状表格是依赖`:nth-child`CSS选择器实现的,而这一功能不被Internet Explorer 8 支持**

![image-20190730145716903](/Users/elin/Library/Application Support/typora-user-images/image-20190730145716903.png)

```html
<table class="table table-striped">
  ...
</table>
```

### 带边框的表格

添加`.table-bordered`类为表格和其中的每个单元格增加边框。

![image-20190730145813921](/Users/elin/Library/Application Support/typora-user-images/image-20190730145813921.png)

```html
<table class="table table-bordered">
  ...
</table>
```

### 鼠标悬停

通过添加`.table-hover` 类可以让`<tbody>`中的每一行对鼠标悬停状态作出响应

![image-20190730145948281](/Users/elin/Library/Application Support/typora-user-images/image-20190730145948281.png)

```html
<table class="table table-hover">
  ...
</table>
```

### 紧缩表格

通过添加 `.table-condensed`类可以让表格更加紧凑，单元格中的内补(padding)均会减半。

![image-20190730150056449](/Users/elin/Library/Application Support/typora-user-images/image-20190730150056449.png)

```html
<table class="table table-condensed">
  ...
</table>
```

### 状态类

通过这些状态类可以为行或单元格设置颜色

`.active` 鼠标悬停在行或单元格上时所设置的颜色	

`.success`标识成功或积极的动作

`.info`	标识普通的提示信息或动作

`.warning`标识警告或需要用户注意

`.danger`标识危险或潜在的带来负面影响的动作

```html
<!-- 第一种方法 -->
<tr class="active">...</tr>
<tr class="success">...</tr>
<tr class="warning">...</tr>
<tr class="danger">...</tr>
<tr class="info">...</tr>

<!-- 第二种方法 (`td` or `th`) -->
<tr>
  <td class="active">...</td>
  <td class="success">...</td>
  <td class="warning">...</td>
  <td class="danger">...</td>
  <td class="info">...</td>
</tr>
```

#### 向使用辅助技术的用户传达用意

通过为表格中的一行或一个单元格添加颜色而赋予不同的意义只是提供了一种视觉上的表现，并不能为使用辅助技术 == 例如屏幕阅读器 — 浏览网页的用户提供更多信息。因此，请确保通过颜色而赋予的不同意义可以通过内容本身来表达(即在相应行或单元格中的可见的文本内容); 或者通过包含额外的方式—例如应用了`.sr-only`类而隐藏的文本 — 来表达出来。

### 响应式表格

将任何`.table`元素包裹在`.table-responsive`元素内，即可创建响应式表格，其会在小屏幕设备上(小于768px)水平滚动。当屏幕大于768px宽度时，水平滚动条消失.

垂直方向的内容阶段

**响应式表格使用了`overflow-y:hidden`属性，这样就能将超出表格底部和顶部的内容阶段。特别是，也可以阶段下啦菜单和其它第三方组件**

![image-20190730152659707](/Users/elin/Library/Application Support/typora-user-images/image-20190730152659707.png)

```html
<div class="table-responsive">
  <table class="table">
    ...
  </table>
</div>
```

## 表单

### 基本实例

单独的表单控件会被自动赋予一些全局样式。所有设置了`.form-control`类的`<input>`、`<textarea>`和`<select>`元素都将被默认设置宽度属性为`width:100%;`。将`label`元素和前面提到的控件包裹在`.form-group`中可以获得最好的排列。

![image-20190730153135389](/Users/elin/Library/Application Support/typora-user-images/image-20190730153135389.png)

```html
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group">
    <label for="exampleInputFile">File input</label>
    <input type="file" id="exampleInputFile">
    <p class="help-block">Example block-level help text here.</p>
  </div>
  <div class="checkbox">
    <label>
      <input type="checkbox">Check me out
    </label>
  </div>
</form>
```

**不要将表单组和输入框组混合使用。建议将输入框组嵌套到表单组中使用。**

### 内联表单

为`<form>`元素添加`.form-inline`类可使其内容左对齐并且表现为`inline-block`级别的控件。只适用于视口(viewport)至少在768px宽度时(视口宽度再小的话就会使表单折叠)。



***可能需要手动设置宽度***

**在Bootstrap中，输入框和单选/多选框控件默认被设置为`width:100%;`宽度。在内联表单，我们将这些元素的宽度设置为`width:auto;`,因此，多个控件可以排列在同一行。根据你的布局需求，可能需要一些额外的定制组件。**



***一定要加label标签***

**如果你没有为每个输入控件设置`label`标签，屏幕阅读器将无法正确识别。对于这些内联表单，你可以通过为`label`设置`.sr-only`类将其隐藏。还有一些辅助技术提供label标签的替代方案，比如`aria-label`、`aria-labelledby`或`title`属性。如果这些都不存在，屏幕阅读器可能会采取使用`placeholder`属性，如果存在的话，使用占位符来替代其它的标记，但要注意，这种方法是不妥当的。**



![image-20190730160346142](/Users/elin/Library/Application Support/typora-user-images/image-20190730160346142.png)

```html
<form class="form-inline">
  <div class=form-group>
    <label for="exampleInputName2">Name</label>
    <input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
  </div>
  <div class="form-group">
    <label for="exampleInputEmail2">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail2" placeholder="asf.sf@asdf.com">
    <button type="submit" class="btn btn-default">Send invitation</button>
  </div>
</form>
```



![image-20190730160925123](/Users/elin/Library/Application Support/typora-user-images/image-20190730160925123.png)

```html
<form class="form-inline">
  <div class="form-group">
    <label class="sr-only" for="exampleInputEmail3"> Email</label>
    <input type="email" class="form-control" id="exampleInputEmail3" placeholder="Email">
  </div>
  <div class="form-group">
    <label class="sr-only" for="exampleInputPassword3">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword3" placeholder="password">
  </div>
  <div class="checkbox">
    <label>
      <input type="checkbox"> Remember me
    </label>
  </div>
  <button type="submit" class="btn btn-default">Sign in </button>
</form>
```



![image-20190730161329430](/Users/elin/Library/Application Support/typora-user-images/image-20190730161329430.png)

```html
<form class="form-inline">
  <div class="form-group">
    <label class="sr-only" for="exampleInputAmount"> Amount (in dollars)</label>
    <div class="input-group">
      <div class="input-group-addon">$</div>
      <input type="text" class="form-control" id="exampleInputAmount" placeholder="Amount">
      <div class="input-group-addon">.00</div>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Transfer cash</button>
</form>
```

### 水平排列的表单

通过为表单添加`.form-horizontal`类，并联合使用Bootstrap 预置的栅格类，可以将`label`标签和控件组水平并排布局。这样做将改变`.form-group`的行为，使其表现为栅格系统中的行(row), 因此就无需再额外添加`.row`了



![image-20190730162355711](/Users/elin/Library/Application Support/typora-user-images/image-20190730162355711.png)

```html
<form class="form-horizontal">
  <div class="form-group">
    <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
    </div>
  </div>
  <div class="form-group">
    <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <div class="checkbox">
        <label>
          <input type="checkbox"> Remember me
        </label>
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-default">Sign in </button>
    </div>
  </div>
</form>
```

### 被支持的控件

表单布局实例中展示了其所支持的标准表单控件。

#### 输入框

包括大部分表单控件、文本输入域控件，还支持所有HTML5类型的输入控件: `text`、`password`、`datetime`、`datetime-local`、`date`、`month`、`time`、`week`、`number`、`email`、`url`、`search`、`tel`和`color`。



#### 文本域

支持多行文本的表单控件。可更具需要更改`rows`属性



![image-20190730163935959](/Users/elin/Library/Application Support/typora-user-images/image-20190730163935959.png)

```html
<textarea class="form-control" rows="3"></textarea>
```

#### 多选和单选框

多选框(checkbox)用于选择列表中的一个或多个选项，而单选框(radio)用于从多个选项中只选择一个。
