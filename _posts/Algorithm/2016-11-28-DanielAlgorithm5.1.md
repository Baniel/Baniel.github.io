---
layout : single
title : 5.1 Learn Data Structure with Daniel --- Hash Tables
category: Algorithm
---

<script type="text/javascript" async
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML">
</script>


# Hash Tables

- Balanced BST -> we can achieve $$ O(Log{N}) $$ time complexity for several operations including search.

- Can we do better?
    Yes, maybe we can reach $$ O(1) $$
    This is why hashtables came to be.

- Array: If we know the index, the insertion and retrival operations are very fast $$ O(1) $$. That is what we want it.

- Here we want to search for a given item with a given key.We have key-value pairs
    - $$Key \Longrightarrow Slot\ in\ a\ set\ of\ buckets $$

---

# Hash Function
- Distribute the keys uniformly into buckets
- n: number of keys
- m: number of buckets // size of array
- h(X) = n % m ( modulo operator)
    - We should use prime numbers both for the size of the array and in our hash function to make sure the distribution will be uniform !!!
    - $$ String\ keys: we\ could\ calculate\ the\ ASCII\ value\ for\ each\ character,\ add\ them\ up\  \rightarrow  make\ \%\ modulo $$

- Hash table is a data structure used to implement an associative array, astructure that can map keys to values

- A hash table uses a hash function to compute an index into an array of buckets or slots, from which the correct value can be found

- The hash function will assign each key to a unique bucket, but this situation is rarely achievable in practice: collisions may occur !!!

- Collidion: different keys that are assigned by the hash function to the same bucket.

- In many situations, hash tables turn out to be more efficient than search trees

- So hash tables are used in caches, databases and sets.


### Time Complex Table

 | | Average case | Worst Case
---|---|---
Space |  &emsp; O(n) | &emsp; O(n)
Insert | &emsp; O(1) | &emsp; O(n)
Delete | &emsp; O(1) | &emsp; O(n)
Search | &emsp; O(1) | &emsp; O(n)

---


# Collisions

- Collision resolution with chaining: we put multiple entries into the same slot with the help of a linked list:
    - If there are many collisions: O(1) complexity gets worse !!!
    - If has an additional memory cost due to the references

- Open addressing: better solution
- If collision occurs, we find an empty slot instead:

    - Linear probing:

    1. If a collision  occures, we try the next slot
    2. If there is a collision too, we keep trying the next slot unitl we find an empty slot

    - Quadratic probing: we trying slots 1,2,3,4,8... units far away

    - Rehashing: we hash the result again in order to find an empty slot


- Open addressing strategy requires, that hash function has additional properties. In addition to performing uniform distribution, it should also avoid clustering of hash values
- Use prime numbers to avoid clustering !!!
- Load factor: number of entries divided by the number of buckets
- With the growth of hash table's load factor, nubmer of collisions increases, which leads to the decrease of overall table's performance
- The solution is to resize table, when its load factor exceeds given threshold
- Remember, that hash values depend on table's size. Hence, hashes of entries are changed when resizing and algorithm can't just copy data from old storage to new one.
- But resizing is done at once and operation, which triggers resizing, take O(n) to complete, where n is a number of entries in the table. This fact may make dynamic-sized hash tables inappropriate for real0time applications.

---

# Applications

- Databases: sometimes search trees, sometimes hashing is better
- Counting given word occurece in a particular  document
- Storing data + lookup tables (password checks...)
- Lookup tables in huge networks ( lookup for IP addresses)
- The hashing technique can be used for substring search (Rabin-Karp algorithm)



# [Pwn2Own](https://en.wikipedia.org/wiki/Pwn2Own) 2016 Day 1 Recap

<div style="max-width:640px; margin:0 auto 10px;" >
<div
style="position: relative;
width:100%;
padding-bottom:56.25%;
height:0;">

<iframe width="854" height="480" src="https://www.youtube.com/embed/DOmzWKW-mto" frameborder="0" allowfullscreen></iframe>

</div>
</div>
