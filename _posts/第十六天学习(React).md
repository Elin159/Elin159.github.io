# 第十六天学习

1. React简介



# React简介

单页面应用(SPA, single page application)；Angular、Ember、Backbone。

React 并不是一个SPA框架，而是一个视图裤。也就是MVC (Model View Controller, 模型-视图-控制器)里的v。它的功能仅仅是把组件渲染成浏览器中的可见元素。

React背后思路：应用的视图应该是一系列层次分明的可组合的组件。

## node 和 npm

Node包管理器(npm, node package manager) 帮助你通过命令行安装第三方node包(package)。这些包可能是一系列的工具函数、库或者是集成的框架。他们都是构建你应用的依赖。你可以选择把这些包安装到node的全局（global）文件夹中，或者是放到你项目本地(project local)文件夹中。

全局node包只需要一次性地安装在全局目录,可以在终端的任何地方使用。你可以通过一下命令来安装一个全局node包:

```js
npm install -g <package>
```

通过 -g 标记指定npm安装一个全局的包。项目的本地包则只能在你应用里面使用。例如,React作为一个库，将会以本地包的形式导入到你的应用中使用。你可以通过下面的命令来安装一个本地包：

```
npm install <package>
```

Node包安装完成后将会保存在node_modules/文件夹里面，并且附加在会在package.json的依赖列表之后。

那么如果创建你项目专属的node_modules/文件夹和package.json文件呢？npm可以通过一条命令来创建npm项目和package.json文件。只有该文件存在，你才能通过npm安装新的本地包。



```
npm init -y
```

-y 标记将把你的package.json内容初始化成默认值。如果不加这个标记，就需要特别设置该文件的内容。完成npm项目初始化之后，就可以通过npm install <包名> 来安装新的node包了。



通过package.json文件我们可以在不共享本地包的情况下把项目共享给其他的开发人员。因为package.json中列出了所有的依赖。只需要通过一个简单的npm install 命令就可以获取所有依赖然后安装到node_modules/文件夹下面。



```
npm install --save-dev <package>
```

--save-dev 标记表示该node包只是用作开发环境的一部分，并不会被作为你产品代码的一部分发布。

哪种node包含用这个场景呢？设想你需要一些node包辅助测试你的应用，然后需要通过npm来安装这些包，但是不希望他们混入产品代码里面。测试过程应该只会发生在开发阶段，而不是在线上部署运行的时候。因为那个时候已经用不到测试代码了，你的应用应该已经被测试完而且可以被你的用户使用了。**这可能是你唯一的使用 --save-dev的场景**。

你可能会遇到更多的npm命令，但目前来说这些已经足够了。



## 安装React

有很多种方式可以让你创建一个React应用。

第一种方式是通过CDN。CDN指的是**内容分发网络**(content delivery network)。

可以通过HTML中内嵌一个指向该CDN的url的\<script>标签。比如对于React, 你需要这两个文件(库): react 和 react-dom。

```js
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
```

但是如果你有npm来安装React的话为什么还需要CDN呢？

我们可以通过一条命令安装多个node包:

```js
npm install react react-dom
```

这种方式通常适用于那些使用npm做包管理项目。

不过这还不够。可能还需要设置Babel让项目支持JSX（React的专用语法）和ES6。

这些设置包含一堆的配置和工具，对于一个新手来说可能会感觉到不小压力。

由于这个原因，Facebook引入了create-react-app作为零配置的React解决方案。

## 零配置搭建React应用

我们将使用create-react-app来创建应用。

背景:在得到广泛支持的情况下，Facebook在2016年创建了这样一个零配置的React初始化套件。

使用create-react-app，各种工具和配置都会在后台集成，而开发人员只需要专注于实现就好。

首先需要把它安装成node的全局包。就可以在命令行创建和初始化React应用了。

```js
npm install -g create-react-app
```

你可以通过检查create-react-app的版本来验证是否安装成功

```js
create-react-app --version
```

现在我们就可以创建我们的第一个React应用了。

**文件结构**

```
|-public
|--favicon.ico
|--index.html
|--logo192.png
|--logo512.png
|--manifest.json
|--rebots.txt

|-src
|--App.css
|--App.js
|--App.test.js
|--index.css
|--index.js
|--logo.svg
|--serviceWorker.js

|-package-lock.json
|-package.json
|-README.md
```

简单划分一下这些文件和文件夹

* **README.md**: 后缀名为.md表示这是一个markdown文件。Markdown是一个用纯文本创建格式化文档的标记语言。很多源代码项目包含一个README.md文件，其中包含了这个项目的一些基本的指令和介绍。当你把项目发布到一些平台，比如GitHub, 当在这个平台访问该项目的时候就会直接看到README.md里的内容。因为你使用的是create-react-app,所以你的README.md文件会跟create-react-app官方GitHub仓库的内容一样。

* **node_modules/**: 这个文件夹包含了所有通过npm安装的node包。在你使用了create-react-app之后，就有一堆node包已经被安装了。通常你不需要特别去关心这个文件夹里面的内容，只需要在命令行用npm安装或者卸载node包就可以了。
* **package.json**: 这个文件包含了node包依赖列表和一些其他的项目配置。
* **.gitgnore**:这个文件包含了所有不应该添加到git仓库(repository)中的文件和文件夹。他们应该只能存活在你本地项目文件夹中。一个典型的例子是node_modules/把package.json共享给你的伙伴们就足够他们获取和安装所有的依赖了，么必要把整个依赖打包共享给他们。
* **public**/:这个文件夹包含了所有你的项目构建出的产品文件。最终所有你写在src/文件夹里面的代码都会在项目构建的时候被打包放在public 文件夹下。
* **manifest.json** 和 **registerServiceWorker.js**: 在这个阶段不用担心这些文件用来干什么，我们不会在这个项目中用到他们。

总之，我们不需要去修改提到的这些文件和文件夹。所有我们需要的文件都在src/文件夹中。首要关注的是实现React组件的src/App.js文件。它主要用于实现你的应用，不过之后你可能会把你的组件分离到多个文件中，其中每个文件来维护一个或者多个特定的组件。

除此之外，你会发现还有一个用于测试的src/App.test.js 和作为React世界的入口的src/index.js。在后面的章节中我们会逐渐熟悉这两个文件。另外，还有控制你项目整体样式和组件样式的src/index.css文件，他们都被设置成了默认的样式。

create-react-app 创建的是一个npm项目。我们可以通过npm来给我们的项目安装和卸载node包。另外它还附带下面几个npm脚本:

```
//在http://localhost:3000 启动应用
npm start

// 运行所有测试
npm test

//构建项目的产品文件
npm run build
```

这些脚本存在package.json中，现在这样一个React样板项目就创建完成了。接下来可以通过练习来在浏览器中运行刚刚创建的应用。

## JSX简介

JSX React特有的语法。create-react-app已经创建了一个样板项目。

我们来深入探索下项目的源代码。

首先是src/App.js文件

```react
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return(
    	<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-title">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App;
```

文中import/export 语句和类（class）声明将在后面的章节讲解。

文中有一个叫做App的ReactEs6 类组件 (class component)。这是一个组件声明。

基本上，在声明了一个组件以后，我们可以在我们项目的任何地方使用它。它可以创建一个组件的实例(instance)，或者说，可以实例化这个组件。

render() 方法包含了它所返回的元素(element)。元素是组件的构成部分。理解清楚**组件**、**实例**和**元素**之间的区别是很有帮助的。

现在的App组件只是它的声明，而不是在使用它。我们可以通过JSX代码的某些地方通过\<App />来实例化它。

## ES6 const 和 let

被**const**声明的变量不能被重新赋值或重新声明。换句话说，它将不能再被改变。我们可以使用它创建不可变数据结构，一旦数据结构被定义好，你就不能改变它了。

当一个变量需要被重新赋值的话，我们应该使用**let**去声明它。

使用**const**声明的变量不能被改变，但是如果这个变量是**数组或者对象**的话，它里面持有的内容可以被更新。它里面持有的内容**不是不可改变的**。

React和它的生态是拥抱不可变的。这就是为什么const应该是你定义一个变量时的默认选择。当然，一个**复制的对象中的内容**还是可能**会被改变**，请当心这种**改变**。

## ReactDOM

ReactDom.render()会使用你的JSX来替换你的HTML中的一个DOM节点。

这样我们就可以很容易地把React集成到每一个其他的应用中。ReactDOM.render()可以在你的应用中被多次使用。你可以在多个地方使用它来加载简单的JSX语法、单个React组件、多个React组件或者整个应用。但是在一个纯React的应用中，我们只会使用一次用来加载我们的整个组件树。



ReactDom.render()有两个传入参数。第一个是准备渲染的JSX。第二个参数指定了React应用在你的HTML中的放置的位置。

在现实中，ReactDom.render()总会很好地渲染我们的App组件。我们可以将一个简单的JSX直接用JSX的方式传入，而不用必须传入一个组件的实例。

```react
ReactDOM.render(
  <h1>Hello React World</h1>
  document.getElementById('root');
);
```

### 模块热替换

用create-react-app 创建的项目有一个优点，那就是可以让你在更改源代码的时候浏览器自动刷新页面。

模块热替换(HMR)是一个帮助你在浏览器中重新加载应用的工具，并且无需再让浏览器刷新页面。我们可以在create-react-app中很容易地开启这个工具：

```react
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
	<App />,
  document.getElementById('root');
);

if(module.hot) {
  module.hot.accept();
}
```

现在浏览器应该不会刷新页面，但是应用还是会重新加载并且显示正确的输出。

HMR带来很多的优点:

* 减少刷新页面带来生产效率的降低。

* 保持应用的状态，减少状态的步骤的重复

## JSX中的复杂javascript

```react
import React, { Component } from 'react';
import './App.css';
const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
}, {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
}, ];
class App extends Component {
  ...
}
```

这个示例数据反应的是我们准备用API获取的数据。列表中的每一个成员都有标题、链接和作者信息。另外它还包含有标识符、分数(表示这个文章的流行程度)和评论的数量。

我们需要用花括号把javaScript包含在你的JSX中。

```react
class App extends Component {
  render() {
    return (
      <div className="App">
      	{list.map(function(item) {
          return <div>{item.title}</div>
        })}
      </div>
    );
  }
}

export default App;
```

在JSX中使用HTML中的JavaScript是很强大的。

通常情况下我们可以用map 来将一个列表转换成另一个列表。

```react
class App extends Component {
  render() {
    return (
    	<div className="App">
        {list.map(function(item) {
          return (
          	<div>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;
```

React 会帮你完成所有的工作然后逐一显示每个成员。但我们应该在React中添加一个辅助属性，借此发挥出它的潜能以提高性能。**我们需要给列表的每一个成员加上一个关键字(key)属性**。这样的话React就可以在列表发生变化的时候**识别**其中成员的**添加、更改和删除的状态**。

```react
class App extends Component {
  reader() {
    return (
    	<div className="App">
        {list.map(function (item) {
          return (
          	<div key={item.objectID}>
              <span>
              	<a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </div>
          );
        })}
      </div>
    );
  };
}
```

我们应该确保这个关键字属性是一个**稳定的标识符**。

不要错误地使用列表成员在数组的索引作为关键字。列表成员的索引是完全不稳定的。

在下面的例子中，当列表的排序改变了之后，React将很难正确地识别这些成员。

```react
//don't do this
{list.map(function(item, key) {
  return (
  	<div key={key}>
    ...
    </div>
  );
})}
```

## ES6箭头函数

JavaScript ES6引入了箭头函数。箭头函数表达式比普通的函数表达式更加简洁。

来一个🌰

```react
function () {...}

() => { ... }
```

但是我们需要注意它的一些功能性。其中之一就是关于this对象的不同行为。一个普通函数表达式总会定义它自己的this对象。但是箭头函数表达式仍然会使用包含它的语境下的this对象。不要被这种箭头函数的this对象困惑了。



关于箭头函数的括号还有一个值得关注的点。如果函数只有一个参数，我们就可以移除参数的括号，但是如果有多个参数，我们就必须保留这个括号。

举个大🌰

```react
allowed
item => { ... }

(item) => { ... }

(item, key) => { ... }

//not allowed
item, key => { ... }


```

我们再来看看map函数。我们可以用ES6的箭头函数更加简洁地把它写出来。

举个超级大🌰

```react
{list.map(item => {
  return (
  	<div key={item.objectID}>
    	<span>
      	<a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </div>
  );
})}
```



在ES6的箭头函数中，我们可以用简洁函数体来替换块状函数题(花括号包含的内容), 简介函数体的返回不用显示声明。这样你就可以移除掉函数的return表达式。

我们要确保能够在使用箭头函数的时候要明白块状函数体的简洁函数体的区别。

```react
{list.map(item => 
  <div key={item.objectID}>
    <span>
    	<a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </div>
)}
```

现在我们的JSX变得更加简洁和可读了。

## ES6 类

JavaScript ES6 引入了类的概念。类通常在面向对象编程语言中被使用。JavaScript的**编程范式**在过去和现在都是非常灵活的。我们可以根据使用情况一边使用**函数式编程**一边使用**面向对象编程**。

尽管React为了例如不可变数据结构等的特性而拥抱函数式编程，但是它还是使用类来声明组件。这些组件被称为ES6类组件。**React混合使用了两种编程范式中的有益的部分**。

作为JavaScript Es6类的例子，让我们先不管组件，思考以下这个Developer类的🌰。

```react
class Developer {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  
  getName() {
    return this.firstname + ' ' + this.lastname;
  }
}
```

类都有一个用来实例化自己的构造函数。这个构造函数可以用来传入参数来赋给类的实例。

**类可以定义函数**。因为这个函数被关联给了类，所以它被称为方法。通常它被称为类的方法。

这个Developer类只有类的声明。我们可以使用它来创建多个类的示例。

让我们举一个大🌰

```react
const robin = new Developer('Robin', 'Wieruch');
console.log(robin.getName());
```

React使用JavaScript ES6类来实现ES6类组件。我们已经使用过一个ES6类组件了。

```react
import React, { Component } from 'react';

...

class App extends Component {
  render() {
    ...
  }
}
```

这个App类继承自Component。简单来说，我们可以声明我们的App组件，但是这个组件需要继承自另一个组件。继承是什么意思？在一个面向对象编程的语言中，我们需要遵循继承原则。它可以把功能从一个类传递到另一个类。

这个App类就从Component类中继承了它的功能。这个Component类是从一个基本ES6类中继承来的ES6组件类。它有一个React组件所需要的所有功能。渲染(render)方法就是其中我们可以使用的一个功能。

这个Component类封装了所有React类需要的实现细节。它使得开发者们可以在React中使用类来创建组件。

React Component类暴露出来的方法都是公共的接口。这些方法中有一个方法必须被重写，其他的则不一定要被重写。这个render() 方法是必须被重写的方法，因为它定义了一个React组件的输出。它必须被定义。

## 回顾

* React
  * 使用create-react-app创建一个React应用
  * JSX混合使用了HTML和JavaScript 在 React组件的方法中定义它的输出
  * React中， 组件、示例和元素是不同的概念
  * ReactDOM.render() 是React应用连接DOM的入口方法
  * JavaScript 内建函数可以在JSX中使用
    * map可以被用来把列表成员渲染成HTML的元素

ES6

* 根据不同的使用场景，选择用const和let来声明变量
  * 在React应用中尽量使用const来声明变量
* 箭头函数可以用来使你的函数变得更简洁
* 在React中，通过继承类的方式来声明组件



