---
layout: single
title: Scala Tutorial Imooc
category: notes
comments: true
---
![](../../assets/images/scala_tutorial.jpg)

# 1.List
```
scala> val a = List(1,2,3,4)
a: List[Int] = List(1, 2, 3, 4)
```

```
scala> val b = 0 :: a
b: List[Int] = List(0, 1, 2, 3, 4)
```

```                       
scala> val c = "x" :: "y" :: "z" ::  Nil
c: List[String] = List(x, y, z)
```

```
scala> "z" :: Nil
res0: List[String] = List(z)
```

```
scala> "x" :: res0
res2: List[String] = List(x, z)
```

```
scala> val d = a ::: c
d: List[Any] = List(1, 2, 3, 4, x, y, z)
```

```
scala> a.head
res3: Int = 1
```

```
scala> d.head
res4: Any = 1
```

```
scala> c.head
res5: String = x
```

```
scala> a.tail
res6: List[Int] = List(2, 3, 4)
```

```
scala> c.tail
res7: List[String] = List(y, z)
```

```
scala> a.isEmpty
res8: Boolean = false
```

```
scala> c.isEmpty
res9: Boolean = false
```

```
scala> Nil.isEmpty
res10: Boolean = true
```

- 用递归和取头元素来写一个 List 遍历函数

```
scala> def walkthru(l: List[Int]): String = {
     | if(l.isEmpty) ""
     | else l.head.toString + " " + walkthru(l.tail)
     | }
walkthru: (l: List[Int])String

scala> walkthru(a)
res11: String = "1 2 3 4 "
```


# 2.Filter 函数
-----
```
scala> a.filter(x => x % 2 ==1)
res12: List[Int] = List(1, 3)
```

- 把字符串变成char的List
```
scala> "99 Red Ballons".toList
res13: List[Char] = List(9, 9,  , R, e, d,  , B, a, l, l, o, n, s)
```

```
scala> "99 Red Ballons".toList.filter(x => Character.isDigit(x))
res15: List[Char] = List(9, 9)
```

```
scala> "99 Red Ballons".toList.takeWhile(x => x != 'B')
res16: List[Char] = List(9, 9,  , R, e, d,  )
```

# 3.Map 函数
----

```
scala> c.map(x => x.toUpperCase)
res18: List[String] = List(X, Y, Z)
```

```
scala> c.map( _.toUpperCase)
res22: List[String] = List(X, Y, Z)
```

```
scala> a.filter ( _ % 2 == 1)
res23: List[Int] = List(1, 3)
```

```
scala> a.filter ( _ % 2 == 1).map( _ + 10)
res24: List[Int] = List(11, 13)
```

```
scala> val q = List( a, List(4, 5, 6))
q: List[List[Int]] = List(List(1, 2, 3, 4), List(4, 5, 6))

scala> q.map(x => x.filter( _ % 2 == 0))
res25: List[List[Int]] = List(List(2, 4), List(4, 6))

scala> q.map( _.filter( _ % 2 == 0))
res26: List[List[Int]] = List(List(2, 4), List(4, 6))

scala> q.flatMap( _.filter( _ % 2 == 0))
res27: List[Int] = List(2, 4, 4, 6)
```

# 4.reduceLeft 与 flodLeft (规约)
----

- ReduceLeft

```
scala> a
res28: List[Int] = List(1, 2, 3, 4)

scala> a.reduceLeft((x,y) => x + y)
res29: Int = 10

scala> a.reduceLeft(_ + _)
res30: Int = 10
```

- FlodLeft

```
scala> a
res33: List[Int] = List(1, 2, 3, 4)

scala> a.foldLeft(0)(_ + _)
res35: Int = 10

scala> a.foldLeft(1)(_ * _)
res36: Int = 24

```



# 5.Range 与 Stream
----

- Range

```
scala> 1 to 10
res37: scala.collection.immutable.Range.Inclusive = Range 1 to 10

scala> 1 to 10 by 2
res39: scala.collection.immutable.Range = inexact Range 1 to 10 by 2

scala> (1 to 10).toList
res40: List[Int] = List(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

scala> 1 until 10
res41: scala.collection.immutable.Range = Range 1 until 10
```
- Stream

```
scala> 1 #:: 2 #:: 3 #:: Stream.empty
res44: scala.collection.immutable.Stream[Int] = Stream(1, ?)

scala> val stream = (1 to 10000000).toStream
stream: scala.collection.immutable.Stream[Int] = Stream(1, ?)

scala> stream.head
res45: Int = 1

scala> stream.tail
res46: scala.collection.immutable.Stream[Int] = Stream(2, ?)

```



# 6.tuple与map
----

- tuple

```
scala> (1,2)
res48: (Int, Int) = (1,2)

scala> 1 -> 2
res49: (Int, Int) = (1,2)

scala> (1, "Alice", "Math", 95.5)
res50: (Int, String, String, Double) = (1,Alice,Math,95.5)

scala> val t =  (1, "Alice", "Math", 95.5)
t: (Int, String, String, Double) = (1,Alice,Math,95.5)

scala> t._1
res51: Int = 1

scala> t._2
res52: String = Alice

scala> t._3
res53: String = Math

scala> t._4
res54: Double = 95.5
```

```
scala> def sumSq(in : List[Int]): (Int, Int, Int) = {
     | in.foldLeft((0,0,0))((t,v) => (t._1 + 1, t._2 + v, t._3 + v*v))
     | }
sumSq: (in: List[Int])(Int, Int, Int)

scala> sumSq(a)
res56: (Int, Int, Int) = (4,10,30)

scala> a
res57: List[Int] = List(1, 2, 3, 4)

scala> sumSq(a)
res58: (Int, Int, Int) = (4,10,30)
```

- Map

```
scala> val p = Map( 1 -> "David", 9 -> "Elwood")
p: scala.collection.immutable.Map[Int,String] = Map(1 -> David, 9 -> Elwood)

scala> p(1)
res59: String = David

scala> p(9)
res60: String = Elwood

scala> p(2)
java.util.NoSuchElementException: key not found: 2
  at scala.collection.immutable.Map$Map2.apply(Map.scala:138)
  ... 28 elided

scala> p.contains(1)
res62: Boolean = true

scala> p.contains(2)
res63: Boolean = false

scala> p.keys
res64: Iterable[Int] = Set(1, 9)

scala> p.values
res65: Iterable[String] = MapLike.DefaultValuesIterable(David, Elwood)

scala> p + (8 -> "Archer")
res66: scala.collection.immutable.Map[Int,String] = Map(1 -> David, 9 -> Elwood, 8 -> Archer)

scala> p
res67: scala.collection.immutable.Map[Int,String] = Map(1 -> David, 9 -> Elwood)

scala> p - 1
res68: scala.collection.immutable.Map[Int,String] = Map(9 -> Elwood)

scala> p
res69: scala.collection.immutable.Map[Int,String] = Map(1 -> David, 9 -> Elwood)

scala> p ++ List(2 -> "Alice", 5-> "Bob")
res70: scala.collection.immutable.Map[Int,String] = Map(1 -> David, 9 -> Elwood, 2 -> Alice, 5 -> Bob)

scala> p -- List(1, 9, 2)
res71: scala.collection.immutable.Map[Int,String] = Map()

scala> p
res72: scala.collection.immutable.Map[Int,String] = Map(1 -> David, 9 -> Elwood)

scala> p ++ List(2 -> "Alice", 5-> "Bob") -- List(9,1)
res73: scala.collection.immutable.Map[Int,String] = Map(2 -> Alice, 5 -> Bob)

```



- 21 Savage - a lot ft. J. Cole


<iframe width="728" height="541" src="https://www.youtube.com/embed/DmWWqogr_r8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
