---
layout : single
title : 2.1 Learn Data Structure with Daniel --- Binary Search Tree Theory
category: Algorithm
---

# Binary Search Theory.

![image](http://turnoff.us/image/en/binary-tree.png)
The figure comes from [{turnoff.code}](http://note.youdao.com/)

- BST is used to implement lookup tables
![image](https://blog.penjee.com/wp-content/uploads/2015/11/binary-search-tree-sorted-array-animation.gif)

The figure comes from [PENJEE.COM 'S BLOG](https://blog.penjee.com/5-gifs-to-understand-binary-search-tree/)

- Keeps the keys in sorted order: so that lookup and other operations can use principle of binary search !!!
- Each comparison allows the operations to skip over half of the tree, so that each lookup/insertion/deletion takes time proportional to the logarithm of the number of items stored in the tree
- This is much better than the linear time O(N) required to find items by key in an unsorted array, but slower than the corresponding operations on hash tables
- Insertion: if the key is not equal to that of the root, we search the left or right subtrees recurisively
- Deletion: soft delete -> do not actually remove the item just mark it as deleted ( not so efficient )

---

# Deletion

![image](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/pix/del01.bmp)

- Deleting node with no child: just set it to NULL
- Deleting a node with one child: remove the node and replace it with its child
- Deleting a node with two children: call the node to be deleted i. Do not delete i directly. Instead, choose either its in-order successor node or its in-order predecessor node, j. Copy the value of j to i, then recursively call delete on j unitl reaching one of the first two cases.
- In order traversal of a graph:gives the numerical order.



  | | Average case | Worst Case
---|---|---
Space |  &emsp; O(n)  | &emsp; O(n)
Insert | &emsp; O(log n) | &emsp; O(log n)
Delete | &emsp; O(log n) | &emsp; O(log n)
Search | &emsp; O(log n) | &emsp; O(log n)


> Height of the tree "h": the length of the path from the root to the deepest node in the tree

![image](http://web.cs.wpi.edu/~cs507/f98/classes/class04/fig01.gif)

- we should keep the height of the tree at a minimum which is h=log n
- If the tree is unbalanced: the h= log n  relation is no more valid and the operation's running time is no more logarithmic.

---
How to create Binary Search Tree

> Step 1. Insert a node with value is 3

![image](http://p1.bpimg.com/567571/2e919f9c4bb56005.png)

> Step 2. Insert

Continue...

> Final Result:

![image](http://p1.bqimg.com/567571/6266e48e4828de12.png)



- In-order traversal: we call recursively the "left subtree" + "the root" + "right subtree"  
- Predecessor of a node: the previous node in the in order traversal
- Succesor of a node: the next node in the in order traversal

- Delete the node 5, we have to find the node in )(LogN) time. Then, we set the node to NULL!!!

- Delete the node 12(the root), swap of with the in order predecessor or successor (here we swap with 5). Now it is the simple situation now: it is a leaf, we just have to set the node 12 to NULL!!!

> Tip: [Swap Two Variables Without Using a Temp Variable (With Math!)](http://chris-taylor.github.io/blog/2013/02/25/xor-trick/)


# [GeoHotz](https://en.wikipedia.org/wiki/George_Hotz)

<div style="max-width:640px; margin:0 auto 10px;" >
<div
style="position: relative;
width:100%;
padding-bottom:56.25%;
height:0;">

<iframe width="854" height="480" src="https://www.youtube.com/embed/Rba7qjb0378" frameborder="0" allowfullscreen></iframe>

</div>
</div>
