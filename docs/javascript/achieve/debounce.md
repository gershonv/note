---
title: 防抖函数的实现
date: 2020-01-07 21:35:59
---

## 前言

在前端开发中会遇到一些频繁的事件触发，比如：

1. `window` 的 `resize`、`scroll`
2. `mousedown`、`mousemove`
3. `keyup`、`keydown`

举个例子：

```html
<div id="container"></div>
<style>
  #container {
    width: 100%;
    height: 200px;
    line-height: 200px;
    text-align: center;
    color: #fff;
    background-color: #444;
    font-size: 30px;
  }
</style>

<script>
  window.onload = function() {
    var count = 1
    var container = document.getElementById('container')

    function getUserAction(e) {
      container.innerHTML = count++
    }
    container.onmousemove = getUserAction
  }
</script>
```

我们来看看效果：

![](../../../assets/javascript/debounce/0.gif)

从左边滑到右边就触发了 165 次函数！

因为这个例子很简单，所以浏览器完全反应的过来，可是如果是复杂的回调函数或是 ajax 请求呢？假设 1 秒触发了 60 次，每个回调就必须在 1000 / 60 = 16.67ms 内完成，否则就会有卡顿出现。

为了解决这个问题，一般有两种解决方案：

1. `debounce` 防抖
2. `throttle` 节流

## 防抖的原理

> 防抖的原理就是：你尽管触发事件，但是我一定在事件触发 n 秒后才执行，如果你在一个事件触发的 n 秒内又触发了这个事件，那我就以新的事件的时间为准，n 秒后才执行，总之，就是要等你触发完事件 n 秒内不再触发事件，我才执行

根据这段表述，我们可以写第一版的代码：

## 第一版

```js
// 第一版
function debounce(func, wait) {
  var timeout
  return function() {
    clearTimeout(timeout)
    timeout = setTimeout(func, wait)
  }
}
```

如果我们要使用它，以最一开始的例子为例：

```js
container.onmousemove = debounce(getUserAction, 1000)
```

现在随你怎么移动，反正你移动完 1000ms 内不再触发，我才执行事件。看看使用效果：

![](../../../assets/javascript/debounce/1.gif)

顿时就从 165 次降低成了 1 次!

棒棒哒，我们接着完善它。

## this

如果我们在 `getUserAction` 函数中 `console.log(this)`，在不使用 `debounce` 函数的时候，`this` 的值为：

```html
<div id="container"></div>
```

但是如果使用我们的 `debounce` 函数，`this` 就会指向 `Window` 对象！

所以我们需要将 `this` 指向正确的对象。

我们修改下代码：

```js
// 第二版
function debounce(func, wait) {
  var timeout

  return function() {
    var context = this

    clearTimeout(timeout)
    timeout = setTimeout(function() {
      func.apply(context)
    }, wait)
  }
}
```

现在 this 已经可以正确指向了。让我们看下个问题：

## event 对象

`JavaScript` 在事件处理函数中会提供事件对象 `event`，我们修改下 `getUserAction` 函数：

```js
function getUserAction(e) {
  console.log(e)
  container.innerHTML = count++
}
```

但是在我们实现的 `debounce` 函数中，却只会打印 `undefined`!

所以我们再修改一下代码：

```js
// 第三版
function debounce(func, wait) {
  var timeout

  return function() {
    var context = this
    var args = arguments

    clearTimeout(timeout)
    timeout = setTimeout(function() {
      func.apply(context, args)
    }, wait)
  }
}
```

到此为止，我们修复了两个小问题：

1. this 指向
2. event 对象

## 立刻执行

这个时候，代码已经很是完善了，但是为了让这个函数更加完善，我们接下来思考一个新的需求。

这个需求就是：

我不希望非要等到事件停止触发后才执行，我希望立刻执行函数，然后等到停止触发 `n` 秒后，才可以重新触发执行。

想想这个需求也是很有道理的嘛，那我们加个 `immediate` 参数判断是否是立刻执行。

```js
// 第四版
function debounce(func, wait, immediate) {
  var timeout

  return function() {
    var context = this
    var args = arguments

    if (timeout) clearTimeout(timeout)
    if (immediate) {
      // 如果已经执行过，不再执行
      var callNow = !timeout
      timeout = setTimeout(function() {
        timeout = null
      }, wait)
      if (callNow) func.apply(context, args)
    } else {
      timeout = setTimeout(function() {
        func.apply(context, args)
      }, wait)
    }
  }
}
```

再来看看使用效果：

![](../../../assets/javascript/debounce/4.gif)

## 返回值

此时注意一点，就是 `getUserAction` 函数可能是有返回值的，所以我们也要返回函数的执行结果，但是当 `immediate` 为 false 的时候，因为使用了 `setTimeout` ，我们将 `func.apply(context, args)` 的返回值赋给变量，最后再 `return` 的时候，值将会一直是 `undefined`，所以我们只在 `immediate` 为 `true` 的时候返回函数的执行结果

```js
// 第五版
function debounce(func, wait, immediate) {
  var timeout, result

  return function() {
    var context = this
    var args = arguments

    if (timeout) clearTimeout(timeout)
    if (immediate) {
      // 如果已经执行过，不再执行
      var callNow = !timeout
      timeout = setTimeout(function() {
        timeout = null
      }, wait)
      if (callNow) result = func.apply(context, args)
    } else {
      timeout = setTimeout(function() {
        func.apply(context, args)
      }, wait)
    }
    return result
  }
}
```

## 取消

最后我们再思考一个小需求，我希望能取消 `debounce` 函数，比如说我 `debounce` 的时间间隔是 10 秒钟，`immediate` 为 true，这样的话，我只有等 10 秒后才能重新触发事件，现在我希望有一个按钮，点击后，取消防抖，这样我再去触发，就可以又立刻执行啦，是不是很开心？

为了这个需求，我们写最后一版的代码：

```js
// 第六版
function debounce(func, wait, immediate) {
  var timeout, result

  var debounced = function() {
    var context = this
    var args = arguments

    if (timeout) clearTimeout(timeout)
    if (immediate) {
      // 如果已经执行过，不再执行
      var callNow = !timeout
      timeout = setTimeout(function() {
        timeout = null
      }, wait)
      if (callNow) result = func.apply(context, args)
    } else {
      timeout = setTimeout(function() {
        func.apply(context, args)
      }, wait)
    }
    return result
  }

  debounced.cancel = function() {
    clearTimeout(timeout)
    timeout = null
  }

  return debounced
}
```

那么该如何使用这个 cancel 函数呢？依然是以上面的 demo 为例：

```js
var count = 1
var container = document.getElementById('container')

function getUserAction(e) {
  container.innerHTML = count++
}

var setUseAction = debounce(getUserAction, 10000, true)

container.onmousemove = setUseAction

document.getElementById('button').addEventListener('click', function() {
  setUseAction.cancel()
})
```

演示效果如下：

![](../../../assets/javascript/debounce/cancel.gif)

至此我们已经完整实现了一个 `underscore` 中的 `debounce` 函数，恭喜，撒花！

## 文章出处

[JavaScript 专题之跟着 underscore 学防抖](https://github.com/mqyqingfeng/Blog/issues/22)