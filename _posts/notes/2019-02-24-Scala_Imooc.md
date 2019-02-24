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
