---
layout: single
title: SNEAK Principle
category: SystemDesign
---
<script type="text/javascript" async
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

 # Template: SNAKE 01
-  Scenario: case/interface
-  Necessary: constrain/hypothesis
-  Application: service/algorithm
-  Kilobit: data
-  Evolve


> Do you know what's the different between "Node" and "Server"

![image](http://p1.bqimg.com/567571/acb4c4f2425aef8d.png)

## Eg: Monitor System?

- S: where?
    - WhatsApp or Wechat   


> Do you know what's the different between "Service" and "Server"

Service | Server
---|---
Software | Machine
Process, Thread | CPU, Disk


- N:
    - If you have 1000 Machine(Swarm)
    - May be 1000 x 200(Process) = 200k Process
    - We also need to send the logs to Center Machine per/Minute
    - Query Per Second([QPS](https://en.wikipedia.org/wiki/Queries_per_second)): $$ \frac{1000}{60} = 16 $$  1000 means 1000 Machine

> How many Processes can be run at the same time in Mac?

![image](https://farhakm.files.wordpress.com/2015/03/iljzp.png)

If you have a Mac, you can open "Activity Monitor" to check threads.
![image](http://p1.bqimg.com/567571/ae779f5e3673b9a6.png)










# Apple Think Different - [Steve Jobs](https://en.wikipedia.org/wiki/Steve_Jobs) Narrated Version

<div style="max-width:640px; margin:0 auto 10px;" >
<div
style="position: relative;
width:100%;
padding-bottom:56.25%;
height:0;">

<iframe width="854" height="480" src="https://www.youtube.com/embed/Rzu6zeLSWq8" frameborder="0" allowfullscreen></iframe>

</div>
</div>
