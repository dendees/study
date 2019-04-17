# 异步

## 什么是异步？

> 异步就是把执行分两段，先执行第一段。然后转而执行其他方法。等该准备的东西都准备好，就执行第二段。这种不连续的执行，就叫异步。
> 同步就是连续执行。a没有执行完成，b只能等着。

## 传统的异步方法及优缺点

1. 回调函数（callback）- 把任务的第二段放在一个函数里。等重新执行这个任务时，就调用这个函数。函数本身没问题，但是如果回调的层级过多，会非常难以维护。
2. Promise - 执行看起来更清晰，但是语义还不够清楚。
3. 协程。协程A执行到一半，执行协程B，B执行完成，把执行权交给A，由A继续执行。秘诀就是yield,它是两部分执行的分界点。
4. Generator
5. async/await

## Promise

### 什么是Promise
promise 是一种异步解决方案。它比之前的回调方法更合理和强大。简单的说，promise是一个容器，里面保存着未来才会结束事件（通常是一个异步操作）的结果。从语法上说，promise是个对象，从他可以获取异步操作的信息。promise提供统一的处理api，多种操作都可以用统一的方法解决。

### Promise对象的特点

1. 对象的状态不受外部影响。Promise代表一个异步操作，有三种状态。进行中（pending）,成功（fullfilled）和失败（rejected）。只有异步操作的结果，可以决定对象的状态。
2. 从pending到fullfilled，叫定型（resloved）。失败叫rejected，一旦错过，无法改变也无法再监听。
3. Promise的优点，将异步操作用同步操作的方式表达出来，结构清晰，避免回调噩梦。promise对异步操作提供了统一接口，让操作更容易。
4. Promise的缺点，一旦开始就无法停止。如果没有回调，内部的错误不会反应到外部。当状态是pending时，无法得知执行了多少。

### Promise的用法

const promise = new Promise((reslove,reject)=>{
    do something
    if(success){
        reslove(value)
    }else {
        reject(err)
    }
})

## Generator