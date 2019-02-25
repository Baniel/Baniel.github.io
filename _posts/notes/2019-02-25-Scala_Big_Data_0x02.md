---
layout: single
title: Scala Big Data Tutorial 0x02
category: notes
comments: true
---

![](../../assets/images/scala_bigdata.jpg)

```
def 方法名(参数名:参数类型): 返回值类型 = {
  // 括号内的叫做方法体

  // 方法体内的最后一行为返回值，不需要使用 return
}

```


```
def add(x: Int, y:Int): Int = {
  x + y //最后一行就是返回值，不需要return
}

```

```
def three() = 1 + 2

println(three())
println(three) // 没有入参的函数，调用时括号是可以省略的
```
