---
layout : single
title : 1.Learn Algorithm with Daniel
category: Algorithm
---
# Linked List Theory



1. Each node is composed of a data and a reference/link to the next node in the sequence.

![image](http://www.equestionanswers.com/c/images/circular-linked-list.gif)

2. Simple and very common data structure !!!
(to be used very often and to be test very often in your interview)
![image](https://seedotnet.files.wordpress.com/2011/04/linked-list.jpg)

3. They can be used to implement several other common data types: stacks,queues

4. The principal benefit of a linked list over a conventional array is that the list elements can easily be inserted or removed without reallocation or reorganization of the entire structure becuause the data items need not be stored in memory or on disk in one block.

5. An array has to be declared in the source code,before compiling and running the program!!!

6. On the other hand,simple linked lists by themselves do not allow random access to the data.

7. Many basic operations such as obtaining the last node of the list,or finding a node that contains a given data,or locating the place where a new node should be inserted -- may require sequential scanning of most or all of the list elements.



> #  LinkedList   VS  Arrays

 ---    | LinkedList | Arrays (ArrayList)
---|---|---
Indexing | O(n) | O(1)
Insert at beginning | O(1) | O(n)
Waste space | O(n) | 0 (Zero)

* Use linked lists if you want to insert/remove elements at the beginning

* Use liked lists if the size is changing frequently ... Otherwise use arrays

* Use arrys if you need random access: it can be done very quickly, in O(1) constant time


> # Advantages

- Liked lists are dynamic data structures (arrays are not !!!).

- It can allocate the needed memory in run-time.

- Very efficient if we want to manipulate the first emelemts.

- EASY IMPLEMENTATION

- Can store items with different sizes: an array assumes every element tobe exactly the same.

- It's easier for a linked list to grow organically. An array's size needs to be known ahead of time, or re-created when it needs to grow.


> # Disadvantages

- Waste memory because of the references

- Nodes in a linked list must be read in order from the beginning as linked lists have sequential access ( array iterms can be reached via indexes in O(1) time !!!)

- Difficulties arise in linked lists when it comes to reverse traversing.Singly linked lists are extremely difficult to navigate backwards.

- Solution: doubly linked lists -> easier to read, but memory is wasted in allocating space for a back pointer.

> # Deleting from linked list

- The same as for insertion
- O(1) time complexity: if we insert items at the beginning
- O(N) time complexity: for inserting items at the end of list



**After learning the linked list, let us enjoy the video --- "Driving with My Mum". Moretoki is driving a car with his mother. You can find the love between mother and son from this funny video.Evey mother wants to look ahead and see her son as a happy, healthy grown man.Can anything replace a mother's love and care?**



![image](http://assets1.doyouyoga.com/uploads/2012/10/I-Love-My-Mom.jpg)


<div style="max-width:640px; margin:0 auto 10px;" >
<div
style="position: relative;
width:100%;
padding-bottom:56.25%;
height:0;">

<iframe style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;" src="<iframe width="854" height="480" src="https://www.youtube.com/embed/tKbej7R8oU4" frameborder="0" allowfullscreen></iframe>" frameborder="0" allowfullscreen></iframe>
</div>
</div>
