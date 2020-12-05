---
layout: post
title: 'Bootstrap'
date: 2019-07-29
author: Elin159
color: rgb(105,33,32)
cover: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
tags: bootstrap 前端
Subtitle: 'bootstrap 栅格系统 语法特色'
---

# 第九天学习

1. Bootstrap 
2. Bootstrap栅格系统
3. 简述Sass
4. 特色
5. 语法
6. 使用Sass
7. CSS Extensions

## Bootstrap

### 简介

Bootstrap 是世界上最受欢迎的前端框架，用于构建响应式、移动设备有限的网站。

### HTML5 doctype

Bootstrap 要求设置 HTML5 doctype。如果没有这个设置，你会看到一些奇怪的、不完整的样式，但是只要添加了这个设置就不会出现任何错误了。

```html
<!doctype html>
<html lang="en">
···
</html>
```

### 响应式meta 标签

Bootstrap 本着 ***移动设备优先*** 的策略开发的，为了确保在所有设备上能够正确渲染并支持触控缩放，务必将设置viewport 属性的meta标签添加到<head>中.

```html
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```

### 排版与链接

Bootstrap 排版、链接样式设置了基本的全局样式。分别是

* 为 `body`元素设置 `background-color:#fff`;
* 使用 `@font-family-base`、`@font-size-base` 和 `@line-height-base`变量作为排版的基本参数
* 为所有链接设置了基本颜色 `@link-color`，并且当链接处于`:hover`状态时才添加下划线

这些样式都能在 `scaffolding.less` 文件中找到对应的源码。

### Normalize.css

为了增强浏览器表现的一致性，我们使用了Normalize.css, 这是由 Nicolas Gallagher 和 Jonathan Neal 维护的一个CSS重置样式库。

### 布局容器

Bootstrap 需要为页面内容和栅格系统包裹一个 `.container` 容器。我们提供了两个作此用处的类。注意，由于`padding`等属性的原因，这两种容器类不能相互嵌套。

`.container` 类用于固定宽度并支持响应式布局的容器。

```html
<div class="container">
```
</div>
```

`.container-fluid` 类用于100%宽度，占据全部视口(viewport)的容器。

​```html
<div class="container-fluid">
```
</div>
```

## 栅格系统

Bootstrap 提供了一套响应式、移动设备优先的流式栅格系统，随着屏幕或视口(viewport)尺寸的增加，系统会自动分为最多12列。它包含了易于使用的预定义类，还有强大的mixin用于生产更具语义的布局。

栅格工作原理:

* “行（row）”必须包含在 `.container` （固定宽度）或 `.container-fluid` （100% 宽度）中，以便为其赋予合适的排列（aligment）和内补（padding）。
* 通过“行（row）”在水平方向创建一组“列（column）”。
* 你的内容应当放置于“列（column）”内，并且，只有“列（column）”可以作为行（row）”的直接子元素。
* 类似 `.row` 和 `.col-xs-4` 这种预定义的类，可以用来快速创建栅格布局。Bootstrap 源码中定义的 mixin 也可以用来创建语义化的布局。
* 通过为“列（column）”设置 `padding` 属性，从而创建列与列之间的间隔（gutter）。通过为 `.row` 元素设置负值 `margin` 从而抵消掉为 `.container` 元素设置的 `padding`，也就间接为“行（row）”所包含的“列（column）”抵消掉了`padding`。
* 负值的 margin就是下面的示例为什么是向外突出的原因。在栅格列中的内容排成一行。
* 栅格系统中的列是通过指定1到12的值来表示其跨越的范围。例如，三个等宽的列可以使用三个 `.col-xs-4` 来创建。
* 如果一“行（row）”中包含了的“列（column）”大于 12，多余的“列（column）”所在的元素将被作为一个整体另起一行排列。
* 栅格类适用于与屏幕宽度大于或等于分界点大小的设备 ， 并且针对小屏幕设备覆盖栅格类。 因此，在元素上应用任何 `.col-md-*`栅格类适用于与屏幕宽度大于或等于分界点大小的设备 ， 并且针对小屏幕设备覆盖栅格类。 因此，在元素上应用任何 `.col-lg-*`不存在， 也影响大屏幕设备。

## 简述Sass

Sass 是对 CSS 的扩展，让CSS语言更强大、优雅。它允许你使用变量、嵌套规则、mixins、导入等众多功能，并且完全兼容CSS语法。Sass有助于保持大型样式表结构良好，同时也让你能够快速开始小型项目，特别是在搭配Compass 样式库一同使用时候。

## 特色

* 完全兼容CSS3
* 在CSS语言基础上添加了扩展功能，比如变量、嵌套(nesting)、混合(mixin)
* 对颜色和其它值进行操作的{Sass::Script::Functions 函数}
* 函数库控制指令之类的高级功能
* 良好的格式，可对输出格式进行定制
* 支持Firebug


```
