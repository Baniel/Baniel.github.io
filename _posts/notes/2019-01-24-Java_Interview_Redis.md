---
layout: single
title: Java Interview Redis
category: notes
comments: true
---
![](../../assets/images/JavaInterview.png)

# Data Types
- Hash: String 元素组成的字典，适合用于储存对象
```
127.0.0.1:6379> hmset lilei name "LiLei" age 26 title "Senior"
OK
```
```
127.0.0.1:6379> hget lilei age
"26"
```
```
127.0.0.1:6379> hget lilei title
"Senior"
```
```
127.0.0.1:6379> hset lilei title "Pricipal"
(integer) 0
```
```
127.0.0.1:6379> hget lilei title
"Pricipal"
```

- List: 列表，按照String元素插入顺序排序

```
127.0.0.1:6379> lpush mylist aaa
(integer) 1
```
```
127.0.0.1:6379> lpush mylist bbb
(integer) 2
```
```
127.0.0.1:6379> lpush mylist ccc
(integer) 3
```
```
取出的顺序是从后到前，类似栈

127.0.0.1:6379> lrange mylist 0 10
1) "ccc"
2) "bbb"
3) "aaa"
```

- Set: String 元素组成的无序集合，通过哈希表实现，不允许重复

    - (integer) 1 : 表示添加成功
    - (integer) 2 : 表示添加失败



```
127.0.0.1:6379> sadd myset 111
(integer) 1
```
```
127.0.0.1:6379> sadd myset 222
(integer) 1
```
```
127.0.0.1:6379> sadd myset 333
(integer) 1
```
```
127.0.0.1:6379> sadd myset 222
(integer) 0
```
```
127.0.0.1:6379> smembers myset
1) "111"
2) "222"
3) "333"
```
```
127.0.0.1:6379> sadd myset abc
(integer) 1
```
```
127.0.0.1:6379> sadd myset abd
(integer) 1
```
```
127.0.0.1:6379> sadd myset abb
(integer) 1
```
```
127.0.0.1:6379> sadd myset abd
(integer) 0
```
```
127.0.0.1:6379> smembers myset
1) "222"
2) "333"
3) "111"
4) "abb"
5) "abc"
6) "abd"
```

- Sorted Set : 通过分数来为集合中的成员进行从小到大的排序

```
127.0.0.1:6379> zadd myzset 3 abc
(integer) 1
```
```
127.0.0.1:6379> zadd myzset 1 abd
(integer) 1
```
```
127.0.0.1:6379> zadd myzset 2 abb
(integer) 1
```
```
127.0.0.1:6379> zadd myzset 2 abb
(integer) 0
```
```
127.0.0.1:6379> zadd myzset 1 bgg
(integer) 1
```
```
127.0.0.1:6379> zrangebyscore myzset 0 10
1) "abd"
2) "bgg"
3) "abb"
4) "abc"
```

- String : 最基本的数据类型，二进制安全

```
127.0.0.1:6379> set name "redis"
OK
```
```
127.0.0.1:6379> get name
"redis"
```
```
127.0.0.1:6379> set name "memcache"
OK
```
```
127.0.0.1:6379> get name
"memcache"
```
```
127.0.0.1:6379> get "memcache"
(nil)
```
```
127.0.0.1:6379> set count 1
OK
```
```
127.0.0.1:6379> get count
"1"
```
```
127.0.0.1:6379> incr count
(integer) 2
```
```
127.0.0.1:6379> get count
"2"
```
```
127.0.0.1:6379> get count
"2"
```

- 用于计数的HyperLogLog, 用于支持存储地理位置信息的Geo (Learn by yourself, OK!
  Cause we are genius!!!)

- 底层数据类型基础
  - 简单动态字符串
  - 链表
  - 字典
  - 跳跃表
  - 整数集合
  - 压缩列表
  - 对象



---

- Lil Pump - "Be Like Me" ft. Lil Wayne (Official Music Video)

<iframe width="957" height="538" src="https://www.youtube.com/embed/gJRGkvNqrY4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
