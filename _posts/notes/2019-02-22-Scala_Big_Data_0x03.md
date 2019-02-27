---
layout: single
title: Scala Big Data Tutorial 0x03 Object
category: notes
comments: true
---
![](../../assets/images/scala_bigdata.jpg)

### Scala 面向对象

  - 构造器
  - 继承与重写
  - 抽象类
  - 伴生类和伴生对象
  - apply
  - case class  
  - trait

### Java/Scala OOP

  - 封装：属性、方法封装到类中
    ```
    Person:
      private int id, String name, Date birthday...

      getter/setter
      eat、sleeping...
    ```
  - 继承：匪类和子类之间的关系

    ```
    User extends Person
    ```

  - 多态：⭐️⭐️⭐️⭐️⭐️  父类引用指向子类对象 ··· 精髓所在 ··· 开发框架的基石

    ```
    Person person = new Person();
    User user = new User();
    Person person = new User();
    ```
