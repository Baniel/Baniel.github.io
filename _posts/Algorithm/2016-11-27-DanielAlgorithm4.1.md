---
layout : single
title : 3.2 Learn Data Structure with Daniel --- Heap
category: Algorithm
---
<script type="text/javascript" async
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

# Heap Theory

- It is a binary tree

![image](http://i.stack.imgur.com/ld3It.png)

- In a max heap, the keys of parent nodes are always greater than or equal to those of the children and the highest key is in the root node. In a min heap, the keys of parent nodes are less than or eaual to thouse of the children and the lowest key is in the root node

![image](https://qph.ec.quoracdn.net/main-qimg-ddb92cea328a64098e3219bd021ff6cb?convert_to_webp=true)

-  We can traverse heap by the level from the root and set the index from left to right. We can get the rule like below:

    When $$(1\leq i \leq= \left \lfloor \frac{n}{2} \right \rfloor)$$


    - Max Heap: $$ K_i \geq K_{2i}  $$
                and $$ K_i \geq K_{2i+1}  $$
    - Min Heap: $$ K_i \leq K_{2i}  $$
                and $$ K_i \leq K_{2i+1}  $$


- It is complete: it cannot be unbalanced !!! We insert every new item to the next available place
- Applications: Dijkstra alorithm, Prims algorithm
- The heap is one maximally efficient implementation of an abstract data type called a priority queue
- It has nothing to do with the pool of memory from which dynamically allocated memory is allocated

---

# Heap properies

1. Complete -> we construct if from left to right across each row / of course the last row may not be completely full
2.


---

# Heapsort
- comparison-based sorting algorithm
- use heap data structure rather than a linear-time search to find the maximum
- although somewhat slower in practice on most machines than a well-implemented quicksort, it has the advantage of a more favorable worst-case $$O({n}\log{n})$$ runtime.Heapsort is an in-place algorithm, but it is not a stable sort
- Does not need additional memory!!!



### Keep swapping the root with the last element + maintain heap properties !!!



---

# Binomial Heap
- Similar to a binary heap but also supports quick merging of two heaps
- It is important as an implementation of the mergeable heap abstract data type (meldable heap), which is a priority queue supporting merge operation
- A binomial heap is implemented as a collection of binary trees
- Insertion $$O(\log{n})$$ time complexity can be reduced to O(1) constant time complexity with help of binomial heaps

---

# Fibonacci heap
- Faster than the classic binary heap
- Dijkstra's shortest path algorithm and Prim's spanning tree algorithm run faster if they rely on Fibonacci heap instead of binary heaps
- But bery hard to implement efficiently so usually does not worth the effort
- Unlike binary heaps, it can have  several children: number of children are usually kept low
- We can achive O(1) insert operation instead of $$O(\log{n})$$ !!!
- Every node has degree at most $$O(\log{n})$$ and the size of a subtree rooted in a node of degree $$K$$ is at least $$F_{K+2}$$, where $$F_K $$ is the $$k_{th}$$ Fibonacci number.

---

Time complexities

| | Binary |Binomial|Fibonacci
---|---|---|---
Find min | $$O(1)$$ | $$O(1)$$ |$$O(1)$$
Delete min | $$O(\log{n})$$ | $$O(\log{n})$$ | $$O(\log{n})$$
Insert   |$$O(\log{n})$$| $$O(1)$$ |$$O(1)$$
Decrease Key |$$O(\log{n})$$ |$$O(\log{n})$$ | $$O(1)$$
Merge  | $$({m}\log({m+n}))$$  |$$O(\log{n})$$ | $$O(1)$$


<div style="max-width:640px; margin:0 auto 10px;" >
<div
style="position: relative;
width:100%;
padding-bottom:56.25%;
height:0;">

<iframe width="854" height="480" src="https://www.youtube.com/embed/hfnDTvbtDUI" frameborder="0" allowfullscreen></iframe>

</div>
</div>
