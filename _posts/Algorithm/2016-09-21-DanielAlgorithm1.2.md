---
layout : single
title : 1.2 Learn Algorithm with Daniel --- Linked List
category: Algorithm
---

# Linked List Code Implement.







> Node.py

```
class Node(object):

    def __init__(self, data):
        self.data = data;
        self.nextNode = None;

    def remove(self, data, previousNode):
        if self.data == data:
            previousNode.nextNode = self.nextNode;
            del self.data;
            del self.nextNode;
        else:
            if self.nextNode is not None:
                self.nextNode.remove(data, self);
```

> LinkedList.py

```

from Node import Node;

class LinkedList(object):

    def __init__(self):
        self.head = None;
        self.counter = 0;

    # O(N)
    def traverseList(self):
        actualNode = self.head;

        while actualNode is not None:
            print("%d " % actualNode.data);
            actualNode = actualNode.nextNode;

    # O(1)
    def insertStart(self, data):

        self.counter += 1;

        newNode = Node(data);

        if not self.head:
            self.head = newNode;
        else:
            newNode.nextNode = self.head;
            self.head =newNode;

    # O(1) instead of O(N)
    def size(self):
        return self.counter;

    # O(N) !!!
    def insertEnd(self, data):

        if self.head is None:
            self.insertStart(data);
            return

        self.counter += 1;

        newNode = Node(data);
        actualNode = self.head;

        while actualNode.nextNode is not None:
            actualNode = actualNode.nextNode;

        actualNode.nextNode = newNode;

    # O(N)
    def remove(self, data):
        self.counter -= 1;

        if self.head:
            if data == self.head.data:
                self.head = self.head.nextNode;
            else:
                self.head.remove(data, self.head)

```

> App.py

```
# App for test the Linked list

from LinkedList import LinkedList
from Node import Node

linkedList = LinkedList();

linkedList.insertStart(12);
linkedList.insertStart(322);
linkedList.insertEnd(93);
linkedList.insertEnd(31);

linkedList.traverseList();

linkedList.remove(12);

linkedList.traverseList();

```





You can download the Code form my [GitHub](https://github.com/PythonJourney/DanielAlgorithm).

Is it very easy for you? If your answer is no, you don't be the worry.Just practice more.After more and more, you will get some idea about the "Liked List". Let us see the "[Topcoder](https://www.topcoder.com/) open " to make your blood to be boiling.

<div style="max-width:640px; margin:0 auto 10px;" >
<div
style="position: relative;
width:100%;
padding-bottom:56.25%;
height:0;">

<iframe style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;" src="https://www.youtube.com/embed/tKbej7R8oU4" frameborder="0" allowfullscreen></iframe>
</div>
</div>
