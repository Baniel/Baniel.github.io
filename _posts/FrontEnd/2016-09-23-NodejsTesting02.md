---
layout: single
title: Node.js Testing 02
category: FrontEnd
---

> Step 1: Create the testing file named by
"daniel-demo.js"


> Step 2: copy belowe code in "daniel-demo.js"

```
describe('DanielDemo', function () {
  describe('Method 1', function () {
    context('Context 1', function () {
      it('Test 1', function() {
         // Testing 1 without assert
      })
      it('Test 2', function() {
        // Testing 2 without assert
      })
    })
  })
})
```


Now, let us analysis the above code:
![image](http://i4.piimg.com/567571/394e05cd677ae384.png)

- Describe: you can create the testing group and give a name for this group.(DanielDemo , Method 1)

- Context: you can use "context" to separate the text in the different environment and give a name for this group.(Context 1)

- It: you can give a name for your testing, then you can write the testing function with assert.The next class, I will talk about how to use chai to do the assert.(Test1 & Test2)



> step 3: ensure you are in "nodejs-test" folder.After, you can go to terminal and input "mocha" or "npm test",then you will see the result like this:

![image](http://i4.piimg.com/567571/240cfb3790e197a1.png)


Congratulation,thanks again for your patience as I can focus on my blog writing.




#### Do you know about GenCoin? Do you know the startup is so much harder than people expected?Let me intro the TV series "Startup".It's the best TV Series I have ever meet.

<div style="max-width:640px; margin:0 auto 10px;" >
<div
style="position: relative;
width:100%;
padding-bottom:56.25%;
height:0;">

<iframe style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;" src="https://www.youtube.com/embed/yCf_MpXAXK8" frameborder="0" allowfullscreen></iframe>
</div>
</div>
