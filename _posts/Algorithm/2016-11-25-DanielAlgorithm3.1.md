---
layout : single
title : 3.1Learn Algorithm with Daniel --- AVL TREES Theory
category: Algorithm
---

# AVL TREES Theory
(AKA: Self-Balancing Binary Search Tree , Height-Balanced Binary Search Tree)


- The running time of BST operations depends on the height of the binary search tree: we should keep the tree balanced in order to get the best performance

- In an AVL tree, the heights of the two child subtrees of any node differ by at most one

![image](http://image.slidesharecdn.com/lecture11-140420071306-phpapp01/95/avl-tree-11-638.jpg?cb=1397978063)



- Another solution to the problem is a red-black trees
![image](http://images.slideplayer.com/25/7913304/slides/slide_6.jpg)


- AVL trees are faster than red-black trees because they are more rigidly balanced, but needs more work
- Operating Systems relies heavily on these data structures!!!

![image](http://image.slidesharecdn.com/redblacktree-140217061821-phpapp01/95/red-black-tree-23-638.jpg?cb=1392618090)


---

> It's the same like "Binary Search Tree"

 | | Average case | Worst Case
---|---|---
Space |  &emsp; O(n)  | &emsp; O(n)
Insert | &emsp; O(log n) | &emsp; O(log n)
Delete | &emsp; O(log n) | &emsp; O(log n)
Search | &emsp; O(log n) | &emsp; O(log n)

---

Height of a node: length of the longest path from it ot a leaf

We can use recursion to calculate it:

- height = max(leftChild.height(),rightChild.height()) + 1

![image](http://p1.bqimg.com/567571/d43978a58cedc07c.png)

AVL algorithm uses heights of nodes, we want the heights as small as possible: we store the height parameters -> if it gets high, we fix it.

---

- AVL tree requires the heights of left and right child of every node to differ at most +1 or -1 !!!
- | height(leftSubtree) - height(rightSubtree) | < = 1
- We can maintain this property in O(logN) time which is quite fast !!!
- Insertion:
    1.  a simple BST insertion according to the keys
    2.  fix the AVL property on each insertion from insertion upward
- There may be serveral violations of AVL property from the inserted node up to the root!!!
- We have to check them all


# [Edward Snowden](https://en.wikipedia.org/wiki/Edward_Snowden)

<div style="max-width:640px; margin:0 auto 10px;" >
<div
style="position: relative;
width:100%;
padding-bottom:56.25%;
height:0;">

<iframe width="854" height="480" src="https://www.youtube.com/embed/QlSAiI3xMh4" frameborder="0" allowfullscreen></iframe>

</div>
</div>
