---
layout : single
title : 6.1 Learn Data Structure with Daniel --- Ternary Search Trees Theory
category: algorithm
---

<script type="text/javascript" async
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

# Ternary Search Trees Theory

- With the help of tries we can search and sort strings very very efficiently

![image](http://p1.bpimg.com/567571/ab8435fc783967f9.png)

- The problem is that tries consume a lot of memory, so we should use ternary search trees instead which stores less references and null objects
- TST stores characters or strings in noes / not keys
- Each node has 3 children: less, equal or greater
- Can we balance TST-s with rotations? Yes but not worth the trouble
- It can be used insted of hashmap: it is as efficient as hashing
- Hashing need to examine the entire string key ... TST do not
- TST support sorting operation!!!
- TST is better than hashing :
    - especially for search misses
    - flexible than BST (usually there is no perfect hash function)
- Conclusion: TST is faster than hashmap and more flexible than binary search trees
- Applications:
    - Very important in package routing. The router direct the packages in the direction of the lognest prefix. It can be found very quickly with the help of TST-s.
    - Prefix matching ~ google search：We can use DFS instead usually

---

# Important notes

- We should combine R-way treis with TST
- At the root: it is an R-way trie with many many children
- At lower levels it becomes a TST with 3 children only
- This combination is quite efficient !!!

---

# TST vs Hashing

- Hashing
    1. Need to examine the entire key ( becuase that is the way the hash function works)
    2. Search hits and misses cost the same
    3. The running time and performance relies heavily on the hashfunction
    4. Does not support as much operations than TST ( sorting )
- TST
    1. Works only for strings
    2. Only examines just enough key characters
    3. Search miss may only involve a fer characters
    4. Support more operations (sorting)
    5. Faster than hashing (for misses especially) and flexible than BST

---

# Applications

- It can be used to implement the auto-complete feature very very efficiently

![image](http://i1.piimg.com/567571/f0b97a40272dea7a.png)

- Can be used for spell-checkers

![image](http://i1.piimg.com/567571/626be11492adc9a4.png)

- Near-neighbor searching (Of which a spell-check is a special case)

- For databases especially when indexing by serveral non-key fields is desirable

![image](http://i1.piimg.com/567571/ca3b0d29a0849651.png)



- Paper: [Fast Algorithms for Sorting and Searching Strings](http://www.cs.princeton.edu/~rs/strings/)

- Dr.Dobb's [Ternary Search Trees](http://www.drdobbs.com/database/ternary-search-trees/184410528)



# [Pwn2Own](https://en.wikipedia.org/wiki/Pwn2Own) 2016: Day 2 and Event Wrap-Up

<div style="max-width:640px; margin:0 auto 10px;" >
<div
style="position: relative;
width:100%;
padding-bottom:56.25%;
height:0;">

<iframe width="854" height="480" src="https://www.youtube.com/embed/Sh8pveFv2DI" frameborder="0" allowfullscreen></iframe>

</div>
</div>
