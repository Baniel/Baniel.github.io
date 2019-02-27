---
layout: splash
title: Big Data Hadoop HDFS
category: notes
comments: true
---
![](../../assets/images/10hours-hadoop/005.jpg)  

### 什么是HDFS

  - Hadoop实现了一个分布式文件系统（Hadoop Distributed File System),简称HDFS
  - 源自于Google的GFS论文
  - 发表于2003年，HDFS是GFS的克隆版

### HDFS的设计目标

  - 非常巨大的分布式文件系统
  - 运行在普通廉价的硬件上
  - 易扩展、为用户提供性能不错的文件存储服务

### HEFS架构

  - 1个Master(NameNode/NN)带N个Slaves(DataNode/DN)
  - 1个文件会被拆成多个Block(文件块)，默认会存3份Block
    - blocksize: 128MB
    - 130M ==> 2个Block: 128MB 和 2 MB

  - NN:
    - 1)负责客户端请求响应
    - 2)负责元数据的管理

  - DN:
    - 1)存储用户的文件对应的数据块(Block)
    - 2)要定期向NN发送心跳信息，汇报本身及其所有的block信息，健康状况

  - 1个NameNode + N个DataNode
    - 建议：NN和DN是部署在不同的节点上

  - replication facor: 副本系数、副本因子

















<br />
<br />
<br />
### Post Malone “Better Now” and “Psycho” Medley (Live From The AMAs / 2018)
<iframe width="760" height="428" src="https://www.youtube.com/embed/Y9_GdlTks10" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
