var store = [{
        "title": "1.1 Learn Data Structure with Daniel --- Linked List",
        "excerpt":"Linked List Theory Each node is composed of a data and a reference/link to the next node in the sequence. Simple and very common data structure !!! (to be used very often and to be test very often in your interview) They can be used to implement several other common...","categories": ["algorithm"],
        "tags": [],
        "url": "http://localhost:4001/algorithm/DanielAlgorithm1.1/",
        "teaser":null},{
        "title": "1.2 Learn Data Structure with Daniel --- Linked List",
        "excerpt":"Linked List Code Implement. Node.py class Node(object): def __init__(self, data): self.data = data self.nextNode = None def remove(self, data, previousNode): if self.data == data: previousNode.nextNode = self.nextNode del self.data del self.nextNode else: if self.nextNode is not None: self.nextNode.remove(data, self) LinkedList.py from Node import Node class LinkedList(object): def __init__(self): self.head =...","categories": ["algorithm"],
        "tags": [],
        "url": "http://localhost:4001/algorithm/DanielAlgorithm1.2/",
        "teaser":null},{
        "title": "System Design Intro",
        "excerpt":"How to prepare system design questions for IT company System design is a very broad topic. Even a software engineer with many years of working experience at top IT company may not be an expert on system design. If you want to become an expert, you need to read many...","categories": ["SystemDesign"],
        "tags": [],
        "url": "http://localhost:4001/systemdesign/SystemDesign0/",
        "teaser":null},{
        "title": "2.1 Learn Data Structure with Daniel --- Binary Search Tree Theory",
        "excerpt":"Binary Search Theory. The figure comes from {turnoff.code} BST is used to implement lookup tables The figure comes from PENJEE.COM ‘S BLOG Keeps the keys in sorted order: so that lookup and other operations can use principle of binary search !!! Each comparison allows the operations to skip over half...","categories": ["algorithm"],
        "tags": [],
        "url": "http://localhost:4001/algorithm/DanielAlgorithm2.1/",
        "teaser":null},{
        "title": "Probability Theory 01",
        "excerpt":"OverView Integral Calculus 1. To understand the Integration 2. The principle of the calculus: Newton-Leibniz Formula Probability Space 1. Stochastic Variable &amp; Probability: Probability Density Function 2. Stochastic Variable &amp; Probability: Probability Space 3. Conditional Probability &amp; Bayes Formula 4. Common Distribution &amp; Conjugate Distribution Riemann Integra(Single Variable) Concept: Derivative:...","categories": ["mathematics"],
        "tags": [],
        "url": "http://localhost:4001/mathematics/ProbabilityTheory01/",
        "teaser":null},{
        "title": "Intro",
        "excerpt":"Hacking Level Hacking Understanding System Breaking System Reconstruction Learning Guide CMU 18-447 Introduction to Computer Architecture (CPU, Cache) -https://www.ece.cmu.edu/~ece447/s15/doku.php Labs: Implement a MIPS CPU using Verilog Stanford CS143 - Compilers http://web.stanford.edu/class/cs143 PA: Compilers for Cool Language MIT 6.828 - Operating System Engineering https://pdos.csail.mit.edu/6.828/2016/ Labs: Implement jobs Xv6, a simple Unix-like...","categories": ["security"],
        "tags": [],
        "url": "http://localhost:4001/security/CTF0/",
        "teaser":null},{
        "title": "2.2 Learn Data Structure with Daniel --- Binary Search Tree Code Implement",
        "excerpt":"Binary Search Tree Code Implement. Node.py class Node(object): def __init__(self, data): self.data = data self.leftChild = None self.rightChild = None def insert(self, data): if data &lt; self.data: if not self.leftChild: self.leftChild = Node(data) else: self.leftChild.insert(data) else: if not self.rightChild: self.leftChild = Node(data) else: self.rightChild.insert(data) def remove(self, data, parentNode): if data...","categories": ["algorithm"],
        "tags": [],
        "url": "http://localhost:4001/algorithm/DanielAlgorithm2.2/",
        "teaser":null},{
        "title": "3.1Learn Data Structure with Daniel --- AVL TREES Theory",
        "excerpt":"AVL TREES Theory (AKA: Self-Balancing Binary Search Tree , Height-Balanced Binary Search Tree) The running time of BST operations depends on the height of the binary search tree: we should keep the tree balanced in order to get the best performance In an AVL tree, the heights of the two...","categories": ["algorithm"],
        "tags": [],
        "url": "http://localhost:4001/algorithm/DanielAlgorithm3.1/",
        "teaser":null},{
        "title": "3.2Learn Data Structure with Daniel --- AVL TREES Code Implement",
        "excerpt":"           # Operation Takedown - [Kevin Mitnick](https://en.wikipedia.org/wiki/Kevin_Mitnick)         ","categories": ["algorithm"],
        "tags": [],
        "url": "http://localhost:4001/algorithm/DanielAlgorithm3/",
        "teaser":null},{
        "title": "SNEAK Principle",
        "excerpt":"Template: SNAKE 01 Scenario: case/interface Necessary: constrain/hypothesis Application: service/algorithm Kilobit: data Evolve Do you know what’s the different between “Node” and “Server” Eg: Monitor System? S: where? WhatsApp or Wechat Do you know what’s the different between “Service” and “Server” Service Server Software Machine Process, Thread CPU, Disk N: If...","categories": ["SystemDesign"],
        "tags": [],
        "url": "http://localhost:4001/systemdesign/SystemDesign01/",
        "teaser":null},{
        "title": "4.1 Learn Data Structure with Daniel --- Heap",
        "excerpt":"Heap Theory It is a binary tree In a max heap, the keys of parent nodes are always greater than or equal to those of the children and the highest key is in the root node. In a min heap, the keys of parent nodes are less than or eaual...","categories": ["algorithm"],
        "tags": [],
        "url": "http://localhost:4001/algorithm/DanielAlgorithm4.1/",
        "teaser":null},{
        "title": "5.1 Learn Data Structure with Daniel --- Hash Tables",
        "excerpt":"Hash Tables Balanced BST -&gt; we can achieve time complexity for several operations including search. Can we do better? Yes, maybe we can reach This is why hashtables came to be. Array: If we know the index, the insertion and retrival operations are very fast . That is what we...","categories": ["algorithm"],
        "tags": [],
        "url": "http://localhost:4001/algorithm/DanielAlgorithm5.1/",
        "teaser":null},{
        "title": "6.1 Learn Data Structure with Daniel --- Ternary Search Trees Theory",
        "excerpt":"Ternary Search Trees Theory With the help of tries we can search and sort strings very very efficiently The problem is that tries consume a lot of memory, so we should use ternary search trees instead which stores less references and null objects TST stores characters or strings in noes...","categories": ["algorithm"],
        "tags": [],
        "url": "http://localhost:4001/algorithm/DanielAlgorithm6.1/",
        "teaser":null},{
        "title": "7.1 Learn Data Structure with Daniel --- Graph Theory",
        "excerpt":"Graph Theory Undirected Graph It means that you can go to B from A or go to A from B Directed Graph It means that you can just go to B form A. Hamiltonian path (Point) It is a path in an undirected or directed graph that visits each vertex...","categories": ["algorithm"],
        "tags": [],
        "url": "http://localhost:4001/algorithm/DanielAlgorithm7.1/",
        "teaser":null},{
        "title": "8.1 Learn Data Structure with Daniel --- BFS Theory",
        "excerpt":"BFS Theory We visit every vertex exactly once We visit each neighbour vertex then the neighbours of these new vertices Running time of the algorithm: It has to store a lot of pointers so it is not as efficient as depth first search It construct shortest path tree: Dijkstra shortest...","categories": ["algorithm"],
        "tags": [],
        "url": "http://localhost:4001/algorithm/DanielAlgorithm8.1/",
        "teaser":null},{
        "title": "Website Self-Learning",
        "excerpt":"1.bWAPP Home bWAPP, or a buggy web application, is a free and open source deliberately insecure web application.It helps security enthusiasts, developers and students to discover and to prevent web vulnerabilities.bWAPP prepares one to conduct successful penetration testing and ethical hacking projects. Link: http://www.itsecgames.com/ 2.Damn Bulnerable IOS App (DVIA) Link:...","categories": ["security"],
        "tags": [],
        "url": "http://localhost:4001/security/Security-Website/",
        "teaser":null},{
        "title": "Big Data Hadoop",
        "excerpt":"What Hadoop can do? 搭建大型数据仓库，PB级数据的存储、处理、分析、统计等业务 Search Engine Logs Analytic Business Intelligence Data Mining Hadoop核心组件之分布式文件系统HDFS 源自于Google的GFS论文，论文发表于2003年10月 HDF是GFS的克隆版 HDFS特点：扩展性&amp;容错性&amp;海量数据存储 将文件切分成指定大小的数据块（默认是128MB) 并以多副本的存储在多个机器上 数据切分、多副本、容错等操作对用户是透明度的（我们操作的时候还是以文件的方式进行操作） Hadoop核心组件之资源调度系统YARN YARN：Yet Another Resource Negotiator 负责整个集群资源的管理和调控 YARN特点：扩展性&amp;容错性&amp;多框架资源统一调度 Hadoop核心组件之分布式计算框架MapReduce 源自于Google的MapReduce论文，论文发表于2004年12月 MapReduce是Google MapReduce的克隆版 MapReduce特点：扩展性&amp;容错性&amp;海量数据离线处理（并不能做实时处理） Hadoop优势之高可靠性 数据存储：数据块多副本 数据计算：重新调度作业计算 Hadoop优势之高扩展性 存储/计算资源不够时，可以横向的线性扩展机器 一个集群中可以包含数以千计的节点 Hadoop优势之其它 存储在廉价机器上，降低成本 成熟的生态圈 狭义Hadoop VS 广义Hadoop 狭义的Hadoop：是一个适合大数据分布式存储（HDFS）、分布式计算（MapReduce）和资源调度（YARN）的平台； 广义的Hadoop：指的是Hadoop生态系统，Hadoop生态系统是一个很庞大的概念，hadoop是其中最重要最基础的一个部分；生态系统中的每一子系统只能解决某一个特定的问题域（甚至可能很窄），不搞统一型的一个全能系统，而是小而精的多个小系统。 Hadoop生态系统的特点 开源、社区活跃 囊括了大数据处理的方方面面 成熟的生态圈...","categories": ["notes"],
        "tags": [],
        "url": "http://localhost:4001/notes/10hours-Big-Data-Hadoop/",
        "teaser":null},{
        "title": "Big Data Hadoop HDFS",
        "excerpt":"   什么是HDFS      Hadoop实现了一个分布式文件系统（Hadoop Distributed File System),简称HDFS   源自于Google的GFS论文   发表于2003年，HDFS是GFS的克隆版   HDFS的设计目标      非常巨大的分布式文件系统   运行在普通廉价的硬件上   易扩展、为用户提供性能不错的文件存储服务   HEFS架构      1个Master(NameNode/NN)带N个Slaves(DataNode/DN)   1个文件会被拆成多个Block(文件块)，默认会存3份Block            blocksize: 128MB       130M ==&gt; 2个Block: 128MB 和 2 MB           NN:            1)负责客户端请求响应       2)负责元数据的管理           DN:            1)存储用户的文件对应的数据块(Block)       2)要定期向NN发送心跳信息，汇报本身及其所有的block信息，健康状况           1个NameNode + N个DataNode            建议：NN和DN是部署在不同的节点上           replication facor: 副本系数、副本因子          Post Malone “Better Now” and “Psycho” Medley (Live From The AMAs / 2018)   ","categories": ["notes"],
        "tags": [],
        "url": "http://localhost:4001/notes/10Hours-Big-Data-Hadoop-HDFS/",
        "teaser":null},{
        "title": "Big Data Hadoop YARN",
        "excerpt":"          Kendrick Lamar - DNA./HUMBLE.   ","categories": ["notes"],
        "tags": [],
        "url": "http://localhost:4001/notes/10Hours-Big-Data-Hadoop-YARN/",
        "teaser":null},{
        "title": "Big Data Hadoop MapReduce",
        "excerpt":"          Kanye West - POWER   ","categories": ["notes"],
        "tags": [],
        "url": "http://localhost:4001/notes/10Hours-Big-Data-Hadoop-MapReduce/",
        "teaser":null},{
        "title": "AlgoCast:0x001 回文字符串判断(Leetcode 125)",
        "excerpt":"If you like it, you can subscribe the AlgoCasts 问题 这个题目说的是，给你一个字符串，你要判断它是否是回文字符串。字符串里只考虑字母和数字，其它的字符可以无视。另外，对于字母，可以忽略大小写。 比如说，给你的字符串是： ” race a E-car “ 只考虑字母数字并且忽略大小写，它是一个回文字符串，因此返回 true。再比如说，给你的字符串是 ” race a car “ 对比到最后，中间的 e 和 a 不相等，因此不是一个回文字符串，返回 false。 这道题的解题思想是,两端点对称游标向中间移动,查看对称点的字符是否相等 // 判断字符是不是英文或者是不是数字 private static boolean isAlphanumeric(char c){ return ( c &gt;= 'a' &amp;&amp; c &lt;= 'z') || (c &gt;=...","categories": ["algorithm"],
        "tags": [],
        "url": "http://localhost:4001/algorithm/AlgoCasts-0x001/",
        "teaser":null},{
        "title": "Java Interview Database",
        "excerpt":"Relational database How to design a Relational Database? RDBMS : Application instance: Storage Management Cache SQL Parsing Log Management Permission Plan Disaster-tolerant Mechanism Index Management Lock Management Storage (File System): Index : Why do we should use Index? (To avoid “Full Table Scan”) Index Data Structure: Binary Tree -&gt; Binary...","categories": ["notes"],
        "tags": [],
        "url": "http://localhost:4001/notes/Java_Interview_Database/",
        "teaser":null},{
        "title": "Java Interview Redis",
        "excerpt":"Data Types Hash: String 元素组成的字典，适合用于储存对象 127.0.0.1:6379&gt; hmset lilei name \"LiLei\" age 26 title \"Senior\" OK 127.0.0.1:6379&gt; hget lilei age \"26\" 127.0.0.1:6379&gt; hget lilei title \"Senior\" 127.0.0.1:6379&gt; hset lilei title \"Pricipal\" (integer) 0 127.0.0.1:6379&gt; hget lilei title \"Pricipal\" List: 列表，按照String元素插入顺序排序 127.0.0.1:6379&gt; lpush mylist aaa (integer) 1 127.0.0.1:6379&gt; lpush mylist bbb (integer)...","categories": ["notes"],
        "tags": [],
        "url": "http://localhost:4001/notes/Java_Interview_Redis/",
        "teaser":null},{
        "title": "Java Interview Multi-thread",
        "excerpt":"   进程和线程的区别              进程是资源分配的最小单位，线程是CPU调度的最小单位              所有与进程相关的资源，都被记录在PCB中       进程是抢占处理机的调度单位；线程属于某个进程，共享其资源       线程只由堆栈寄存器、程序计数器和TCB组成           Summary            线程不能开做独立的应用，而进程可看做独立的应用       进程有独立的地址空间，互相不影响，线程只是进程的不同执行路径       线程没有独立的地址空间，多进程的程序比多线程程序健壮       进程的切换比线程的切换开销大                Java进程和线程的关系              Java对操作系统提供的功能进行封装，包括进程和线程       运行一个程序会产生一个进程， 进程包含至少一个线程       每个进程对应一个JVM实例，多个线程共享JVM里的堆       Java采用单线程编程模型，程序会自动创建主线程       主线程可以创建子线程，原则上要后于子线程完成执行           Thread中start和run的区别      调用star()方法会创建一个新的子线程并启动   run()方法只是Thread的一个普通方法的调用   Thread和Runnable的关系      Thread是实现了Runnable接口的类，使得run支持多线程   因此类的单一继承原则，推荐多使用Runnable接口   Lil Pump - Be Like Me   ","categories": ["notes"],
        "tags": [],
        "url": "http://localhost:4001/notes/Java_Interview_Multi-thread/",
        "teaser":null},{
        "title": "Java Interview Spring",
        "excerpt":"Do you understand the Spring IOC ? The core part of the Spring Core Eg: How to design a luggage. tire &lt;- depend - bottome &lt;- depend - framework &lt;- depend - luggage High level Part depend Low level part public class Luggage { private Framework framework; Luggage(){ this.framework =...","categories": ["notes"],
        "tags": [],
        "url": "http://localhost:4001/notes/Java_Interview_Spring/",
        "teaser":null},{
        "title": "Scala Tutorial Imooc",
        "excerpt":"1.List scala&gt; val a = List(1,2,3,4) a: List[Int] = List(1, 2, 3, 4) scala&gt; val b = 0 :: a b: List[Int] = List(0, 1, 2, 3, 4) scala&gt; val c = \"x\" :: \"y\" :: \"z\" :: Nil c: List[String] = List(x, y, z) scala&gt; \"z\" :: Nil res0:...","categories": ["notes"],
        "tags": [],
        "url": "http://localhost:4001/notes/Scala_Imooc/",
        "teaser":null},{
        "title": "Scala Big Data Tutorial 0x01",
        "excerpt":"Java Vs Scala Java: (It should add “;”) public class HelloWorld { public static void main(String[] args){ System.out.println(\"Hello World...\"); } } Scala: (No Static) object HelloWorld { def main(args: Array[String]){ println(\"Hello World...\") } } val vs var (值改变的时候就用var) val: value final (immutable) val (value name):(Type) = xxx var: variable mutable...","categories": ["notes"],
        "tags": [],
        "url": "http://localhost:4001/notes/Scala_Big_Data_0x01/",
        "teaser":null},{
        "title": "Scala Big Data Tutorial 0x02 Function",
        "excerpt":"def 方法名(参数名:参数类型): 返回值类型 = { // 括号内的叫做方法体 // 方法体内的最后一行为返回值，不需要使用 return } def add(x: Int, y:Int): Int = { x + y //最后一行就是返回值，不需要return } def three() = 1 + 2 println(three()) println(three) // 没有入参的函数，调用时括号是可以省略的 默认参数：在函数定义时，允许指定参数的默认值 命名参数 scala&gt; def speed(distance:Float, time:Float):Float = { | distance/time | } speed: (distance: Float, time: Float)Float...","categories": ["notes"],
        "tags": [],
        "url": "http://localhost:4001/notes/Scala_Big_Data_0x02/",
        "teaser":null},{
        "title": "Scala Big Data Tutorial 0x03 Object",
        "excerpt":"   Scala 面向对象      构造器   继承与重写   抽象类   伴生类和伴生对象   apply   case class   trait   Java/Scala OOP      封装：属性、方法封装到类中     Person:   private int id, String name, Date birthday...    getter/setter   eat、sleeping...                继承：匪类和子类之间的关系       User extends Person                多态：⭐️⭐️⭐️⭐️⭐️  父类引用指向子类对象 ··· 精髓所在 ··· 开发框架的基石       Person person = new Person(); User user = new User(); Person person = new User();          ","categories": ["notes"],
        "tags": [],
        "url": "http://localhost:4001/notes/Scala_Big_Data_0x03/",
        "teaser":null},{
        "title": "Golang",
        "excerpt":"Golang协程      进程：太重   线程：上下文切换开销太大   协程：轻量级的线程，简介的并发模式   Golang协程：goroutine  ","categories": ["notes"],
        "tags": [],
        "url": "http://localhost:4001/notes/Golang/",
        "teaser":null},{
        "title": "2019年4月书单 持续更新中 ...",
        "excerpt":"                亚马逊图书简介       出版时间       文件格式       文件大小       Picture                       图书链接       2019       PDF       12 Mb                        图书链接       2019       PDF       10 MB                        图书链接       2019       PDF       10 MB                        图书链接       2019       PDF       10 MB                        图书链接       2019       PDF       10 MB                 ","categories": ["booklist"],
        "tags": [],
        "url": "http://localhost:4001/booklist/Booklist/",
        "teaser":null}]
