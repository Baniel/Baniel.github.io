---
layout : single
title : 0.Daniel 带你了解系统设计
category: SystemDesign
---


#  0. Daniel 带你了解系统设计

 &emsp;&emsp;两年的研究生学习，终于TMD的结束了==（为什么要TMD，这要问问我的好朋友Lawrence）==， 之后就是艰难的考雅思和找工作的阶段了。本人在Melbourne读的书，因此，也要在Melbourne这个大的IT环境下来找工作,在此，朕要推荐大家一个找工作的网站，[Angel.co](https://angel.co/),说句发自肺腑的话，这网站绝壁要比SB的Seek好太多了，Seek基本上都是石沉大海，要不就是需要PR(澳大利亚居民身份)。Angel.co上，基本上都是些创业公司在招人，因此对IT人员的技术要求很高，Seek上的都是大公司，反而对技术要求不是太高，并且还是比较亲近于本地的澳洲居民。

 &emsp;&emsp; 湿的说完了，咱说点干的。首先，澳洲的大部分公司，都是喜欢招那种上来就工作的，因此技术要好，学校里学的那些，Such as,“Java”，“MySql”,"Swift"<、,"OLAP"....等等，只能说太浅了，而且知识陈旧，哎，都是眼泪，不TMD说了，现在的需求发生了361度的大转变。我这几天去的一家互联网众筹公司面试（[Pozible](https://pozible.com/)老板好，员工还Nice），所用的技术栈是JavaScript，从前端到后端，前端框架[React](https://facebook.github.io/react/)，后端框架是“流星”（[Meteor](https://facebook.github.io/react/)），名字很酷吧，是不是想到《余罪》里小时候的张一山演的流星，数据库你猜用啥，对了，是NoSQL的MongoDB,而且对于前端的一些转换工具（），和打包工具，都要会，还要用到[Docker](https://www.docker.com/)来做项目的部署。毕业后的你要是自己不自学着，估计看完这些当时就懵逼了（[Pozible测试题]()）。所以，平时，给为兄弟姐妹还要多看看趋势，来分析一下现在行业所需要的技术，就现在来讲，我觉得JavaScript还是很不错的，找工作方面，前端后端都在招人.

以下是一些学习资源，可以帮做你拓展眼界，提高能力，想吃就吃，身体倍棒：

* [PluralSight](https://www.pluralsight.com/)：公司在悉尼，很多新的IT的学习资源，贾思特（我朋友给我起的外号，因为我说英语的时候总是“Just”长，“Just”短）教你一个方法，去微软官方注册一个账号，之后用微软的账号就能在这个网站上免费学习三个月的课程，随便看，看到吐血来都没事,[绝世秘籍在此](https://fossbytes.com/getting-pluralsight-subscription-for-free-for-6-months/)。

![image](https://fossbytes.com/wp-content/uploads/2016/02/pluralsight-for-free-1024x545.jpg)

* [Scanlibs](http://scanlibs.com/) : 这网站绝壁要安利一下，很多收费的学习资源，各种片和书，这里都是免费的，这网站是一个俄罗斯小哥做的，不错，要不咋这两年TopCoder上俄罗斯小鲜肉一直在称霸第一呢。

![image](https://thumbs.statvoo.com/scanlibs.com)



* [慕课网](http://www.imooc.com/)： 国内的网站,很多的免费教学视频，其中还有论坛帖子，居家必备呀。


![image](http://mrfangge.qiniudn.com/wp-content/uploads/2014/07/%E8%AF%BE%E7%A8%8B-1024x722.jpg)

* [太阁](https://www.bittiger.io/):  这个网站绝逼能帮助你提升你的视野，讲了很多技术，而且每周有大牛为你做技术分析，但有些要收费，但每周大牛带你飞，带你分析技术的都是免费的，而且有不同技术的微信群，里面大部分都是人都在美利坚，完全会把你的事业提升到一个高度。

![image](https://liaoyuanavatar.imgix.net/upload/feed/image/155c6973fa8-574ef68f7e4258c32b14da05-a1c77a1020c21df4?fit=max&w=960&h=600)

* [代码时间](https://codetimecn.com/): 良心播客，播主每个月会请一个该领域的技术大神来聊技术，听起来就像郭德纲和范伟在一起讲相声一样，咋，伟哥就不能讲相声了，“猪撞树上了，你撞猪上了，追尾了吧”，这么脍炙人口的段子怎么能忘，记得那还是... 不扯犊子了。总之，这个播客很不错，在IPhone上的Poadcast也能订阅。

![image](http://tva4.sinaimg.cn/crop.0.0.1022.1022.180/006p5fA6gw1f380qr10q3j30sg0sggnf.jpg)

 &emsp;&emsp; 之后的几期，我会带领大家分析一下各个公司的系统设计，像Uber，Twitter，Google的GFS(高富帅)... 用最简单直白的说话方式顺带点幽默的词汇来帮你了解工业界的开发，自己也能通过整理这个博客，来巩固一下System Design的知识，总之，你好，我也好，写写更健康。希望大家都能从博客里面学到知识哈。


###  还记得我吗，我叫Daniel跟我念一遍，什么，大声点听不见，我的算法，系统，[GitHub封面](https://github.com/Baniel)，就算忘记，你不可能看不见。

        ---该作品改编自冠希哥的《记得我吗》

<div style="max-width:640px; margin:0 auto 10px;" >
<div
style="position: relative;
width:100%;
padding-bottom:56.25%;
height:0;">

<iframe style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;" src="https://www.youtube.com/embed/GFqQCLZH75A" frameborder="0" allowfullscreen></iframe>
</div>
</div>
