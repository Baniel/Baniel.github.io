---
layout : single
title : 7.1 Learn Data Structure with Daniel --- Graph Theory
category: algorithm
comments: true
---

<script type="text/javascript" async
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

# Graph Theory

### Undirected Graph
![image](http://courses.cs.washington.edu/courses/cse421/07su/hw/hw2dfsb.gif)

- It means that you can go to B from A or go to A from B


### Directed Graph
![image](http://www.mrgeek.me/wp-content/uploads/2014/04/directed-graph.png)

- It means that you can just go to B form A.

![image](http://embed.wistia.com/deliveries/712da88a887ce673e90a1a088faf5a6397b8fc6f.jpg)

---

# Hamiltonian path (Point)
- It is a path in an undirected or directed graph that visits each vertex exactly once

![image](http://support.esri.com/~/media/Support/GISDictionary/Hamiltonian-path.jpg)

- Hamiltonian cycle is a Hamiltonian path that is a cycle
- Determining whether such paths and cycles exist in graphs is NP-Complete!!!
- Simulations
- Travelling salesman problem relies on Hamiltonian cycles
- TSP problem: given a list of cities and the distances between each pair of cities, what is the shortest possible route that visits each city exactly once and returns to the origin city?
- If there is a Hamiltoninan path for a graph: it is the solution for the travelling salesman problem
- NP-complete problem

---

# Eulerian Path (Line)
- It is a trail in a graph which visits every edge exactly once

![image](http://4.bp.blogspot.com/-LOrP3erurXs/UZBWITqkF7I/AAAAAAAAAN4/hq6Y-NM1t58/s1600/Screen+shot+2013-05-12+at+8.02.42+PM.png)

- Eulerian cycle is an Eulerian trail which starts and ends on the same vertex
- An undirected graph has an Eulerian cycle if and only if every vertex has even degree
- We can construct graphs that has Eulerian cycles with Heirholzer algorithm...important for the Chinese Postman Problem.


![image](https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQLf7jrFC4oMD8gEkh37WhNJI5NY4i6cvuv9UzDc25hCh76yrz9)

- Chinese postman problem: a postman needs to go through every street at least once + closed circuit + wants to find a shortest path.

![image](http://p1.bpimg.com/567571/123ffd063684a82f.png)


- If there is an Eulerian cycle that is the solution for the CPP!!!

### 2016 [Code Jam](https://en.wikipedia.org/wiki/Google_Code_Jam) World Finals in New York City Highlight Reel

<div style="max-width:640px; margin:0 auto 10px;" >
<div
style="position: relative;
width:100%;
padding-bottom:56.25%;
height:0;">

<iframe width="854" height="480" src="https://www.youtube.com/embed/g9ebwBWEuCc" frameborder="0" allowfullscreen></iframe>

</div>
</div>
