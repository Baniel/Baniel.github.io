---
layout: single
title: Scala Big Data Tutorial 0x02 Function
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

### 默认参数：在函数定义时，允许指定参数的默认值


### 命名参数

```
scala>   def speed(distance:Float, time:Float):Float = {
     |     distance/time
     |   }
speed: (distance: Float, time: Float)Float

scala> println(speed(100,10))
10.0

scala> println(speed(distance = 100, time = 10))
10.0

scala> println(speed(time = 10, distance = 100))
10.0
```

### 可变参数

```
  def sum(a:Int, b:Int) = {
    a + b
  }

  def sum(a:Int, b:Int, c:Int) = {
    a + b + c
  }

  def sum2(numbers:Int*) = {

    var result = 0
    for(number <- numbers ){
      result += number
    }

    result
  }
```


<br />
<br />
<br />
### Logic - 1-800-273-8255 (Live At The MTV VMAs / 2017) ft. Alessia Cara, Khalid


<iframe width="760" height="428" src="https://www.youtube.com/embed/_Ju6Q8Azcmg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
