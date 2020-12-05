---
layout: post
title:  "javaScript 学习"
date:   2019-07-22 14:52:21 +0800
tags: javaScript
color: rgb(155,150,90)
cover: 'https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
subtitle: 'javaScriptDom基础'
---
# 第四天学习





###### 第二章

1. 语句
2. 变量和数组
3. 操作符
4. 条件语句和循环语句
5. 函数与对象

##### 对象

###### 内建对象

Array

```javascript
var a = new Array();
//当需要了解某个数组中有多少个元素时，利用Array对象的length属性来获得这信息:
a.length;

```

Math

Math对象的round方法可以把十进制数值舍入为一个与之最接近的整数

```javascript
var num = 7.561;
var num = Math.round(num);
alert(num);
```

Date

Date 对象可以用来存储和检索与特定日期和时间有关的信息。在创建Date对象的新实例时，javaScript解析器将自动地使用当前日期和时间对它进行初始化:

```javascript
var date = new Date();
var today = date.getDay();
```



##### 宿主对象

宿主对象包括Form、Image和Element等。我们可以通过这些对象获得关于网页上表单、图像和各种表单元素等信息。

document对象



####  第二章

1. 节点的概念
2. 5个常用的DOM方法

```
getElementById、getElementsByTagName、getElementsByClassName、get-Attribute、setAttribute
```



###### DOM

D:文档

O:对象

M:模型

DOM 把一份文档表示为一棵树 ，这事我们理解和运用这一模型的关键。更具体地说，DOM把文档表示为一棵家谱树。



###### 节点

1. 元素节点

DOM的原子是元素节点

标签的名字就是元素的名字。

2. 文本节点

 ```html
<p>元素包含着文本"Don't forget to buy this stuff"</p>
 ```

它是一个文本节点

3. 属性节点

属性节点用来对元素做出更具体的描述。

````html
<p title="a gentle reminder">Don't forget to but this stuff.</p>
````

在DOM中，title="a gentle reminder" 是一个属性节点



##### CSS

***id属性的用途是给网页里的某个元素加上一个独一无二的标识符.***

尽管id本身只能使用一次，样式表还是可以利用id属性为包含在该特定元素里的其它元素定义样式。



##### 获取元素

有3种DOM方法可获取元素节点，分别是通过元素ID、通过标签名字和通过类名字来获取。

1. getElementById
2. getElementsByTagName
3. getElementsByClassName

###### getElementsById

***Dom提供了一个名为getElementById的方法，这个方法将返回一个与那个有着给定id属性值的元素节点对应的对象***。

typeof 操作符可以告诉我们它的操作数是一个字符串、数值、函数、布尔值还是对象。

###### getElementsByTagName

***getElementsByTagName 方法返回一个对象数组，每个对象分别对应着文档里有着给定标签的一个元素。***

还可以把getElementById和getElementsByTagName 结合起来运用

```javascript
var shopping = document.getElementById("purchases");
var items = shopping.getElementsByTagName("*");
```

在这两条语句执行完毕后， items数组将只包含id属性值是purchase的无序清单里的元素。

##### getElementsByClassName

通过class属性中的类名来访问元素。

如果使用这个函数来模拟前面取得的对象列表的操作，就可以这样写:

```javascript
var shopping = document.getElementById("purchases");
var sales = getElementsByClassName(shopping, "sale");
```

#### 总结

* 一份文档就是一棵节点树。
* 节点分为不同的类型：元素节点、属性节点和文本节点等。
* getElementById 将返回一个对象，该对象对应着文档里的一个特定的元素节点。
* getElementsByTagName 和 getElementsByClassName 将返回一个对象数组，它们分别对应着文档里的一组特定的元素节点。
* 每个节点都是一个对象



##### 获取和设置属性

getAttribute 是一个函数。它只有一个参数 —— 你打算查询的属性的名字

Object.getAttribute( attribute )

***getAttribute方法不属于document对象，所以不能通过document对象调用。它只能通过元素节点对象调用***



### 章结

介绍了DOM提供的五个方法:

* getElementById
* getElementsByTagName
* getElementsByClassName
* setAttribute
* getAttribute

DOM还提供了许多其他的属性和方法，如nodeName、nodeValue、childNodes、nextSibling和parentNode等。



#### 第四章

本章内容

* 编写一个优秀的标记文件。
* 编写一个JavaScript函数以显示用户想要查看的图片。
* 由标记出发函数调用
* 使用几个新方法扩展这个JavaScript函数



onclick  监听用户点击触发事件

childNodes 可以用来获取任何一个元素的所有子元素 (不仅只有元素节点)

onload  页面加载时候触发对应函数

nodeValue属性 获取文本节点的属性值或更改

firstChild 获取当前元素的第一个子元素对象

lastChild 获取当前元素的最后一个子元素对象



#### 第五章

1. 平稳退化：确保网页在没有JavaScript的情况下也能正常工作
2. 分离JavaScript: 把网页的结构和内容与JavaScript脚本的动作行为分开。
3. 向后兼容性: 确保老版本的浏览器不会因为你的JavaScript脚本而死掉。
4. 性能考虑：确定脚本执行的性能优化


