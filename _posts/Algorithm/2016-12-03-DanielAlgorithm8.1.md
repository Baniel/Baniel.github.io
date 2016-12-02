---
layout : single
title : 8.1 Learn Data Structure with Daniel --- BFS Theory
category: Algorithm
---

<script type="text/javascript" async
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

# BFS Theory
- We visit every vertex exactly once
- We visit each neighbour vertex then the neighbours of these new vertices
- Running time of the algorithm: $$O(V+E)$$

![image](http://blog.hackerearth.com/wp-content/uploads/2015/05/dfsbfs_animation_final.gif)


- It has to store a lot of pointers so it is not as efficient as depth first search
- It construct shortest path tree: Dijkstra shortest path algorithm does a BFS if all the edge weight are equal to 1


> Dijkstra
![image](http://hastuts.com/wp-content/uploads/2014/07/Dijkstras-algorithm.gif)


- In AI / machine learning it can prove to be very important: robots can discover the surrounding more easily with BFS than DFS



- It is also very important in maximum flow: the [Edmonds-Karp](https://en.wikipedia.org/wiki/Edmonds%E2%80%93Karp_algorithm) maximum flow algorithm uses BFS for finding augmenting paths



- Cheyen's algorithm in garbage collecion: simliar to mark and sweep gc procedure, it helps to maintain the active references -> it uses BFS to detect all the references on the heap memmory.

<div style="max-width:640px; margin:0 auto 10px;" >
<div
style="position: relative;
width:100%;
padding-bottom:56.25%;
height:0;">

# [CTF](https://ctftime.org/ctf-wtf/)

<iframe width="854" height="480" src="https://www.youtube.com/embed/CaDIi84JA7g" frameborder="0" allowfullscreen></iframe>

</div>
</div>
