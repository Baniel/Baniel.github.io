---
layout: single
title: 0.Learn Front End With Daniel
category: FrontEnd

---

# Node.js Testing 01

## > Install

> 0. Open the terminal

```
cmd + space (You don't know "space",it's between two cmd)
```


> 1. Go to the desktop

```
-> cd ~/desktop
```

> 2. create a fold named by "nodejs-test" and go to this folder

```
-> mkdir nodejs-test
-> cd nodejs-test
```

> 3. Create the package.json by [NPM](https://nodejs.org/en/) (If your Mac has not installed NPM,you can install it by Node.js)

```
-> npm init -y
```

![image](http://i2.buimg.com/567571/81ecf8ef0c2263ad.png)


>  4. Install Mocha

```
-> npm install mocha --global
```

![image](http://i2.buimg.com/567571/0f807ce20fbbd91e.png)

> 5. You can input "mocha",ops, maybe something is wrong.

```
-> mocha
```
![image](http://i4.piimg.com/567571/8ef418af846b36ea.png)

!!! You need creat a folder named by "test" for Mocha !!!

> 6. Create a folder named by test, then input mocha again.You can see 0 passing.(It means no test passing,because we input nothing.)

```
-> mkdir test
-> mocha
```
![image](http://i4.piimg.com/567571/76fb0444d0c128ac.png)


> 7. Create a folder named by lib, we can create code file in this folder.

```
-> mkdir lib
```

> 8. Install mocha in your project.

```
-> npm install mocha --save-dev
```

Have you find some different between Step 4 and Step 8:

Mocha |--globa | --save-dev
---|---|---
Your Project | can use | can use
Other Project| can use | can't use

> 9. Open the project by [Atom](https://atom.io/)

```
-> atom .
```

Then you will see the IDE like this:
![image](http://i4.piimg.com/567571/2e32e2553fa15cd6.png)

> 10. find the "package.json" file, change the No.7 line "test" into below:

```
"test": "./node_modules/mocha/bin/mocha"
```

![image](http://i4.piimg.com/567571/4b5b619f771bcf76.png)

> 11. Now , you can input the "npm test" in the terminal. It's super convenient

```
-> npm test
```

If you can see this picture, it means you are successful.
![image](http://i2.buimg.com/567571/4bacc63ad8cd3955.png)

Congratulation, you have learned how to install Mocha, I will tell you how to do a simple test in the next.  


Let me know something about [Mocha](https://mochajs.org/) and [chai](http://chaijs.com/)(After, I will talk about chai)

<div style="max-width:640px; margin:0 auto 10px;" >
<div
style="position: relative;
width:100%;
padding-bottom:56.25%;
height:0;">

<iframe style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;" src="https://www.youtube.com/embed/L48AjLVgXS4" frameborder="0" allowfullscreen></iframe>
</div>
</div>
