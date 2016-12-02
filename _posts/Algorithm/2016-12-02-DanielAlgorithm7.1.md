Last login: Tue Nov 29 19:30:37 on console
➜  ~ clear

➜  ~ cd Documents
➜  Documents clear

➜  Documents cd AlertSystem
➜  AlertSystem git:(master) ✗ clear

➜  AlertSystem git:(master) ✗ charm .
No IDE instance has been found. New one will be started.
➜  AlertSystem git:(master) ✗ git add .
➜  AlertSystem git:(master) ✗ git add .
➜  AlertSystem git:(master) ✗ git commit -m "Finish"
[master 3ead9a4] Finish
 14 files changed, 486 insertions(+), 137 deletions(-)
 create mode 100644 20161129212410-Data.xls
 create mode 100644 20161129212623-Data.xls
 create mode 100644 20161129212631-Data.xls
 create mode 100644 20161129213714-Data.xls
 create mode 100644 20161129213830-Data.xls
 create mode 100644 20161129213839-Data.xls
 create mode 100644 20161129214032-Data.xls
 create mode 100644 20161129214051-Data.xls
 create mode 100644 20161129214118-Data.xls
 create mode 100644 20161129214202-Data.xls
➜  AlertSystem git:(master) git add .
➜  AlertSystem git:(master) ✗ git commit -m "Finsh 2"
[master 1c33508] Finsh 2
 12 files changed, 60 insertions(+), 62 deletions(-)
 create mode 100644 20161129214315-Data.xls
 create mode 100644 20161129215115-Data.xls
 create mode 100644 20161129220740-Data.xls
 create mode 100644 20161129220830-Data.xls
 create mode 100644 20161129220941-Data.xls
 create mode 100644 20161129221041-Data.xls
 create mode 100644 20161129221459-Data.xls
 create mode 100644 20161129221620-Data.xls
 create mode 100644 20161129222203-Data.xls
➜  AlertSystem git:(master) clear

➜  AlertSystem git:(master) ✗ ls
AlertSystem.py              data.xls
Supplements for Python.xlsx
➜  AlertSystem git:(master) ✗ clear

➜  AlertSystem git:(master) ✗ ls
AlertSystem.py              data.xls
Supplements for Python.xlsx
➜  AlertSystem git:(master) ✗ cd ..
➜  Documents clear

➜  Documents ls
$RECYCLE.BIN              Parallels
Address.pages             Python
AlertSystem               RECYCLER
AlertSystem.zip           React
AlertSystemUI             TomTom
AndroidWorkspace          VSCode-darwin-signed
Application               WeChatApp
Atom.app                  Webpack
BitTiger                  Zoom
BufferOverflow            desktop.ini
CodeTime                  ePSXe205
GitHub                    weka-3-8-0
My Videos                 workspace
PTE                       ~$ico Devices Report.docx
PY Application Job Email
➜  Documents clear

➜  Documents ls
$RECYCLE.BIN              Parallels
Address.pages             Python
AlertSystem               RECYCLER
AlertSystem.zip           React
AlertSystemUI             TomTom
AndroidWorkspace          VSCode-darwin-signed
Application               WeChatApp
Atom.app                  Webpack
BitTiger                  Zoom
BufferOverflow            desktop.ini
CodeTime                  ePSXe205
GitHub                    weka-3-8-0
My Videos                 workspace
PTE                       ~$ico Devices Report.docx
PY Application Job Email
➜  Documents clear

➜  Documents ls
$RECYCLE.BIN              Parallels
Address.pages             Python
AlertSystem               RECYCLER
AlertSystem.zip           React
AlertSystemUI             TomTom
AndroidWorkspace          VSCode-darwin-signed
Application               WeChatApp
Atom.app                  Webpack
BitTiger                  Zoom
BufferOverflow            desktop.ini
CodeTime                  ePSXe205
GitHub                    weka-3-8-0
My Videos                 workspace
PTE                       ~$ico Devices Report.docx
PY Application Job Email
➜  Documents cd AlertSystemUI
➜  AlertSystemUI git:(master) ✗ clear

➜  AlertSystemUI git:(master) ✗ charm .
No IDE instance has been found. New one will be started.
➜  AlertSystemUI git:(master) ✗ charm .
No IDE instance has been found. New one will be started.
➜  AlertSystemUI git:(master) ✗ python
Python 3.5.2 |Anaconda 4.2.0 (x86_64)| (default, Jul  2 2016, 17:52:12)
[GCC 4.2.1 Compatible Apple LLVM 4.2 (clang-425.0.28)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> exit
Use exit() or Ctrl-D (i.e. EOF) to exit
>>> exit()
➜  AlertSystemUI git:(master) ✗ clear

➜  AlertSystemUI git:(master) ✗ ls
20161130160801-Data.xls     Supplements for Python.xlsx
20161130161439-Data.xls     data.xls
AlertSystem.py
➜  AlertSystemUI git:(master) ✗ clear

➜  AlertSystemUI git:(master) ✗ ls
20161130160801-Data.xls     Supplements for Python.xlsx
20161130161439-Data.xls     data.xls
AlertSystem.py
➜  AlertSystemUI git:(master) ✗ clear

➜  AlertSystemUI git:(master) ✗ python AlertSystem.py
Traceback (most recent call last):
  File "AlertSystem.py", line 8, in <module>
    from xlutils.copy import copy
ImportError: No module named 'xlutils'
➜  AlertSystemUI git:(master) ✗ pip install xlutils
Collecting xlutils
  Downloading xlutils-2.0.0-py2.py3-none-any.whl (55kB)
    100% |████████████████████████████████| 61kB 335kB/s
Requirement already satisfied: xlrd>=0.7.2 in /Users/daniel/anaconda/lib/python3.5/site-packages (from xlutils)
Requirement already satisfied: xlwt>=0.7.4 in /Users/daniel/anaconda/lib/python3.5/site-packages (from xlutils)
Installing collected packages: xlutils
Successfully installed xlutils-2.0.0
➜  AlertSystemUI git:(master) ✗ python AlertSystem.py
60.6814726027397 67.5363698630137 74.43275684931507 106.6408904109589
当前时间:20161130161625
开始读取数据
/Users/daniel/anaconda/lib/python3.5/site-packages/bs4/__init__.py:181: UserWarning: No parser was explicitly specified, so I'm using the best available HTML parser for this system ("lxml"). This usually isn't a problem, but if you run this code on another system, or in a different virtual environment, it may use a different parser and behave differently.

The code that caused this warning is on line 385 of the file AlertSystem.py. To get rid of this warning, change code that looks like this:

 BeautifulSoup([your markup])

to this:

 BeautifulSoup([your markup], "lxml")

  markup_type=markup_type))
/Users/daniel/anaconda/lib/python3.5/site-packages/bs4/__init__.py:181: UserWarning: No parser was explicitly specified, so I'm using the best available HTML parser for this system ("lxml"). This usually isn't a problem, but if you run this code on another system, or in a different virtual environment, it may use a different parser and behave differently.

The code that caused this warning is on line 390 of the file AlertSystem.py. To get rid of this warning, change code that looks like this:

 BeautifulSoup([your markup])

to this:

 BeautifulSoup([your markup], "lxml")

  markup_type=markup_type))
/Users/daniel/anaconda/lib/python3.5/site-packages/bs4/__init__.py:181: UserWarning: No parser was explicitly specified, so I'm using the best available HTML parser for this system ("lxml"). This usually isn't a problem, but if you run this code on another system, or in a different virtual environment, it may use a different parser and behave differently.

The code that caused this warning is on line 398 of the file AlertSystem.py. To get rid of this warning, change code that looks like this:

 BeautifulSoup([your markup])

to this:

 BeautifulSoup([your markup], "lxml")

  markup_type=markup_type))
读取数据成功
0
A:64.00 B:64.50 C:75.50 D:76.50 E:71.75 F:73.00 G:64.90 H:65.40 I:65.00 J:76.00 K:72.50 L:65.40 M:63.25 N:74.25 O:70.25 P:64.50 Q:- R:- S:68.10 T:68.50 U:- V:68.40 W:68.07 X:67.21
MeanAB:64.25 MeanCD:76.0 MeanEF:72.375 MeanGH:65.15 MeanQR:68.07 MeanST:68.3
68.53106164383561
41
A:59.90 B:60.00 C:75.50 D:76.50 E:72.25 F:73.50 G:61.00 H:61.50 I:60.00 J:76.00 K:73.00 L:0.00 M:59.50 N:74.25 O:72.00 P:60.75 Q:- R:- S:67.75 T:68.00 U:- V:67.75 W:66.64 X:67.01
MeanAB:59.95 MeanCD:76.0 MeanEF:72.875 MeanGH:61.25 MeanQR:66.64 MeanST:67.875
67.48174657534247
82
A:100.00 B:101.00 C:71.60 D:72.25 E:68.25 F:69.50 G:67.20 H:67.50 I:101.00 J:- K:69.50 L:67.50 M:99.00 N:70.75 O:67.50 P:65.84 Q:- R:- S:71.25 T:71.75 U:77.00 V:71.75 W:75.66 X:70.54
MeanAB:100.5 MeanCD:71.925 MeanEF:68.875 MeanGH:67.35 MeanQR:77.00 MeanST:71.5
74.26224315068492
123
A:133.00 B:- C:102.00 D:- E:102.00 F:- G:87.25 H:- I:- J:- K:- L:- M:135.00 N:102.00 O:101.50 P:87.00 Q:- R:- S:105.00 T:- U:- V:- W:106.23 X:105.51
MeanAB:135.00 MeanCD:102.00 MeanEF:101.50 MeanGH:87.00 MeanQR:106.23 MeanST:105.51
105.87003424657534
文件保存成功
content:Good
Message sent successfully
程序5分钟后抓取数据
68.53106164383561 67.48174657534247 74.26224315068492 105.87003424657534
^CTraceback (most recent call last):
  File "AlertSystem.py", line 646, in <module>
    time.sleep(300)
KeyboardInterrupt
➜  AlertSystemUI git:(master) ✗ clear

➜  AlertSystemUI git:(master) ✗ python3 AlertSystem.py
60.6814726027397 67.5363698630137 74.43275684931507 106.6408904109589
当前时间:20161130161659
开始读取数据
/Users/daniel/anaconda/lib/python3.5/site-packages/bs4/__init__.py:181: UserWarning: No parser was explicitly specified, so I'm using the best available HTML parser for this system ("lxml"). This usually isn't a problem, but if you run this code on another system, or in a different virtual environment, it may use a different parser and behave differently.

The code that caused this warning is on line 385 of the file AlertSystem.py. To get rid of this warning, change code that looks like this:

 BeautifulSoup([your markup])

to this:

 BeautifulSoup([your markup], "lxml")

  markup_type=markup_type))
/Users/daniel/anaconda/lib/python3.5/site-packages/bs4/__init__.py:181: UserWarning: No parser was explicitly specified, so I'm using the best available HTML parser for this system ("lxml"). This usually isn't a problem, but if you run this code on another system, or in a different virtual environment, it may use a different parser and behave differently.

The code that caused this warning is on line 390 of the file AlertSystem.py. To get rid of this warning, change code that looks like this:

 BeautifulSoup([your markup])

to this:

 BeautifulSoup([your markup], "lxml")

  markup_type=markup_type))
/Users/daniel/anaconda/lib/python3.5/site-packages/bs4/__init__.py:181: UserWarning: No parser was explicitly specified, so I'm using the best available HTML parser for this system ("lxml"). This usually isn't a problem, but if you run this code on another system, or in a different virtual environment, it may use a different parser and behave differently.

The code that caused this warning is on line 398 of the file AlertSystem.py. To get rid of this warning, change code that looks like this:

 BeautifulSoup([your markup])

to this:

 BeautifulSoup([your markup], "lxml")

  markup_type=markup_type))
读取数据成功
0
A:64.00 B:64.50 C:75.50 D:76.50 E:71.75 F:73.00 G:64.90 H:65.40 I:65.00 J:76.00 K:72.50 L:65.40 M:63.25 N:74.25 O:70.25 P:64.50 Q:- R:- S:68.10 T:68.50 U:- V:68.40 W:68.07 X:67.21
MeanAB:64.25 MeanCD:76.0 MeanEF:72.375 MeanGH:65.15 MeanQR:68.07 MeanST:68.3
68.53106164383561
41
A:59.90 B:60.00 C:75.50 D:76.50 E:72.25 F:73.50 G:61.00 H:61.50 I:60.00 J:76.00 K:73.00 L:0.00 M:59.50 N:74.25 O:72.00 P:60.75 Q:- R:- S:67.75 T:68.00 U:- V:67.75 W:66.64 X:67.01
MeanAB:59.95 MeanCD:76.0 MeanEF:72.875 MeanGH:61.25 MeanQR:66.64 MeanST:67.875
67.48174657534247
82
A:100.00 B:101.00 C:71.60 D:72.25 E:68.25 F:69.50 G:67.20 H:67.50 I:101.00 J:- K:69.50 L:67.50 M:99.00 N:70.75 O:67.50 P:65.84 Q:- R:- S:71.25 T:71.75 U:77.00 V:71.75 W:75.66 X:70.54
MeanAB:100.5 MeanCD:71.925 MeanEF:68.875 MeanGH:67.35 MeanQR:77.00 MeanST:71.5
74.26224315068492
123
A:133.00 B:- C:102.00 D:- E:102.00 F:- G:87.25 H:- I:- J:- K:- L:- M:135.00 N:102.00 O:101.50 P:87.00 Q:- R:- S:105.00 T:- U:- V:- W:106.23 X:105.51
MeanAB:135.00 MeanCD:102.00 MeanEF:101.50 MeanGH:87.00 MeanQR:106.23 MeanST:105.51
105.87003424657534
文件保存成功
content:Good
Message sent successfully
程序5分钟后抓取数据
68.53106164383561 67.48174657534247 74.26224315068492 105.87003424657534
^CTraceback (most recent call last):
  File "AlertSystem.py", line 646, in <module>
    time.sleep(300)
KeyboardInterrupt
➜  AlertSystemUI git:(master) ✗ clear

➜  AlertSystemUI git:(master) ✗ ls
AlertSystem.py              data.xls
Supplements for Python.xlsx
➜  AlertSystemUI git:(master) ✗ clear

➜  AlertSystemUI git:(master) ✗ ls
AlertSystem.py              data.xls
Supplements for Python.xlsx
➜  AlertSystemUI git:(master) ✗ clear

➜  AlertSystemUI git:(master) ✗ ls
AlertSystem.py              data.xls
Supplements for Python.xlsx
➜  AlertSystemUI git:(master) ✗ cd ..
➜  Documents cd GitHub
➜  GitHub clear

➜  GitHub ls
AlertSystemASXEnergy     DanielAlgorithm
Alert_System_ASXEnergy   DanielInterivewAlgorithm
Baniel.github.io
➜  GitHub cd Baniel.github.io
➜  Baniel.github.io git:(master) clear

➜  Baniel.github.io git:(master) atom .
➜  Baniel.github.io git:(master) git add .
➜  Baniel.github.io git:(master) ✗ git commit -M "Graph"
error: unknown switch `M'
usage: git commit [<options>] [--] <pathspec>...

    -q, --quiet           suppress summary after successful commit
    -v, --verbose         show diff in commit message template

Commit message options
    -F, --file <file>     read message from file
    --author <author>     override author for commit
    --date <date>         override date for commit
    -m, --message <message>
                          commit message
    -c, --reedit-message <commit>
                          reuse and edit message from specified commit
    -C, --reuse-message <commit>
                          reuse message from specified commit
    --fixup <commit>      use autosquash formatted message to fixup specified commit
    --squash <commit>     use autosquash formatted message to squash specified commit
    --reset-author        the commit is authored by me now (used with -C/-c/--amend)
    -s, --signoff         add Signed-off-by:
    -t, --template <file>
                          use specified template file
    -e, --edit            force edit of commit
    --cleanup <default>   how to strip spaces and #comments from message
    --status              include status in commit message template
    -S, --gpg-sign[=<key-id>]
                          GPG sign commit

Commit contents options
    -a, --all             commit all changed files
    -i, --include         add specified files to index for commit
    --interactive         interactively add files
    -p, --patch           interactively add changes
    -o, --only            commit only specified files
    -n, --no-verify       bypass pre-commit and commit-msg hooks
    --dry-run             show what would be committed
    --short               show status concisely
    --branch              show branch information
    --porcelain           machine-readable output
    --long                show status in long format (default)
    -z, --null            terminate entries with NUL
    --amend               amend previous commit
    --no-post-rewrite     bypass post-rewrite hook
    -u, --untracked-files[=<mode>]
                          show untracked files, optional modes: all, normal, no. (Default: all)

➜  Baniel.github.io git:(master) ✗ git commit  -m "Graph"
[master ace7953] Graph
 1 file changed, 73 insertions(+)
 create mode 100644 _posts/Algorithm/2016-12-02-DanielAlgorithm7.1.md
➜  Baniel.github.io git:(master) clear

➜  Baniel.github.io git:(master) git push -u origin master
Counting objects: 5, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 1.79 KiB | 0 bytes/s, done.
Total 5 (delta 3), reused 0 (delta 0)
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
To https://github.com/Baniel/Baniel.github.io.git
   c89cb04..ace7953  master -> master
Branch master set up to track remote branch master from origin.
➜  Baniel.github.io git:(master) git add .
➜  Baniel.github.io git:(master) ✗ git commit  -m "Graph"
[master 9c1481d] Graph
 1 file changed, 2 insertions(+), 2 deletions(-)
➜  Baniel.github.io git:(master) git push -u origin master
Counting objects: 5, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 435 bytes | 0 bytes/s, done.
Total 5 (delta 4), reused 0 (delta 0)
remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
To https://github.com/Baniel/Baniel.github.io.git
   ace7953..9c1481d  master -> master
Branch master set up to track remote branch master from origin.
➜  Baniel.github.io git:(master)
