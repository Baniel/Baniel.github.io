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
        "title": "Java Interview Database:0x03",
        "excerpt":"Relational database How to design a Relational Database? RDBMS : Application instance: Storage Management Cache SQL Parsing Log Management Permission Plan Disaster-tolerant Mechanism Index Management Lock Management Storage (File System): Index : Why do we should use Index? (To avoid “Full Table Scan”) Index Data Structure: Binary Tree -&gt; Binary...","categories": ["notes"],
        "tags": [],
        "url": "http://localhost:4001/notes/Java_Interview_Database/",
        "teaser":null},{
        "title": "Java Interview Redis:0x04",
        "excerpt":"Data Types Hash: String 元素组成的字典，适合用于储存对象 127.0.0.1:6379&gt; hmset lilei name \"LiLei\" age 26 title \"Senior\" OK 127.0.0.1:6379&gt; hget lilei age \"26\" 127.0.0.1:6379&gt; hget lilei title \"Senior\" 127.0.0.1:6379&gt; hset lilei title \"Pricipal\" (integer) 0 127.0.0.1:6379&gt; hget lilei title \"Pricipal\" List: 列表，按照String元素插入顺序排序 127.0.0.1:6379&gt; lpush mylist aaa (integer) 1 127.0.0.1:6379&gt; lpush mylist bbb (integer)...","categories": ["notes"],
        "tags": [],
        "url": "http://localhost:4001/notes/Java_Interview_Redis/",
        "teaser":null},{
        "title": "Scala Tutorial Imooc",
        "excerpt":"1.List scala&gt; val a = List(1,2,3,4) a: List[Int] = List(1, 2, 3, 4) scala&gt; val b = 0 :: a b: List[Int] = List(0, 1, 2, 3, 4) scala&gt; val c = \"x\" :: \"y\" :: \"z\" :: Nil c: List[String] = List(x, y, z) scala&gt; \"z\" :: Nil res0:...","categories": ["notes"],
        "tags": [],
        "url": "http://localhost:4001/notes/Scala_Imooc/",
        "teaser":null}]
