---
layout: single
title: Scala Big Data Tutorial 0x01
category: notes
comments: true
---

![](../../assets/images/scala_bigdata.jpg)

### Java Vs Scala

- Java: (It should add ";")

 ```
 public class HelloWorld {
   public static void main(String[] args){
     System.out.println("Hello World...");
   }
 }

 ```
- Scala: (No Static)

```
object HelloWorld {
  def main(args: Array[String]){
    println("Hello World...")
  }
}
```
-----

### val vs var (值改变的时候就用var)

- val: value
  - final (immutable)
  - val (value name):(Type) = xxx


- var: variable
  - mutable

----

### Data Types

```
scala> val d = 1.1
d: Double = 1.1

scala> val e:Float = 1.1
<console>:11: error: type mismatch;
 found   : Double(1.1)
 required: Float
       val e:Float = 1.1
                     ^

scala> val e:Float = 1.1f
e: Float = 1.1

scala> val d = 1.2f
d: Float = 1.2
```

```
scala> val f = 10
f: Int = 10

scala> val g = 10.asInstanceOf[Double]
g: Double = 10.0

scala> g
res75: Double = 10.0
```

```
scala> val h = 10.isInstanceOf[Int]
h: Boolean = true


scala> val h = 10.isInstanceOf[Double]
h: Boolean = false

```

### Lazy (Network Computing)

```
scala> val i = 1
i: Int = 1

scala> lazy val a =1
a: Int = <lazy>

When you are using the value,
it just computes the value.

scala> a
res76: Int = 1

When you are not using the lazy value,
even it's such a wrong operation,
but it will not report an error.


```

- Rich The Kid - Plug Walk

<iframe width="853" height="480" src="https://www.youtube.com/embed/Xq-DkTnBZrk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
