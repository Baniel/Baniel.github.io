---
layout : single
title : 2.2 Learn Data Structure with Daniel --- Binary Search Tree Code Implement
category: Algorithm
---

# Binary Search Tree Code Implement.

> Node.py

``` python

class Node(object):

    def __init__(self, data):
        self.data = data
        self.leftChild = None
        self.rightChild = None

    def insert(self, data):
        if data < self.data:
            if not self.leftChild:
                self.leftChild = Node(data)
            else:
                self.leftChild.insert(data)
        else:
            if not self.rightChild:
                self.leftChild = Node(data)
            else:
                self.rightChild.insert(data)

    def remove(self, data, parentNode):
        if data < self.data:
            if self.leftChild is not None:
                self.leftChild.remove(data, self)
        elif data > self.data:
            if self.rightChild is not None:
                self.rightChild.remove(data, self)
        else:
            if self.leftChild is not None and self.rightChild is not None:
                self.data = self.rightChild.getMin()
                self.rightChild.remove(self.data, self)
            elif parentNode.leftChild == self:
                if self.leftChild is not None:
                    tempNode = self.leftChild
                else:
                    tempNode = self.rightChild

                parentNode.leftChild = tempNode

            elif parentNode.rightChild == self:
                if self.leftChild is not None:
                    tempNode = self.leftChild
                else:
                    tempNode = self.rightChild

                parentNode.rightChild = tempNode


    def getMin(self):
        if self.leftChild is None:
            return self.data
        else:
            self.leftChild.getMin()

    def getMax(self):
        if self.rightChild is None:
            return self.data
        else:
            return self.rightChild.getMax()

    def traverseInOrder(self):
        if self.leftChild is not None:
            self.leftChild.traverseInOrder()

        print(self.data)

        if self.rightChild is not None:
            self.rightChild.traverseInOrder()

        print(self.data)

```

> Binary Search Tree

``` python
from BinarySearchTreeDS.Node import Node

class BST(object):

    def __init__(self):
        self.rootNode = None;

    def insert(self, data):
        if not self.rootNode:
            self.rootNode = Node(data)
        else:
            self.rootNode.insert(data)

    def remove(self, dataToRemove):
        if self.rootNode:
            if self.rootNode.data == dataToRemove:
                tempNode = Node(None)
                tempNode.leftChild = self.rootNode
                self.rootNode.remove(dataToRemove, tempNode)
            else:
                self.rootNode.remove(dataToRemove, None)

    def getMax(self):
        if self.rootNode:
            return self.rootNode.getMax()

    def getMin(self):
        if self.rootNode:
            return self.rootNode.getMin()

    def traverseInOrder(self):
        if self.rootNode:
            self.rootNode.traverseInOrder()

```

> App.py

``` python
from BinarySearchTreeDS.BinarySearchTree import BST

bst = BST()

bst.insert(12)
bst.insert(10)
bst.insert(-2)
bst.insert(1)

bst.traverseInOrder();

```
 You can download the Code form my [GitHub](https://github.com/PythonJourney/DanielAlgorithm).

<div style="max-width:640px; margin:0 auto 10px;" >
<div
style="position: relative;
width:100%;
padding-bottom:56.25%;
height:0;">

<iframe width="854" height="480" src="https://www.youtube.com/embed/eGl6kpSajag" frameborder="0" allowfullscreen></iframe>

</div>
</div>
