---
layout : single
title : 2.1 Learn Algorithm with Daniel --- Binary Search
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
-
