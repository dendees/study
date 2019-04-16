# GIT 使用

## 概念
1. 版本库（Repository）：本地git文件夹里的东西
2. 工作区：本地工作目录
3. 暂存区：git add后没有commit 的区域

## 常用命令
1. git init
2. git add docname : docname可以有多个，用空格分开，add以后添加到暂存区
3. git commit :提交暂存区的内容到版本库。生成一个版本，版本有commitID, HEAD
4. git reset : --hard commitID 回滚到某个版本
                --hard HEAD^ 回滚到上一个版本
5. git status: 状态查看
6. git checkout 工作区回滚到上次 git add/git commit 状态. 想把已经add的修改撤销，需要git reset HEAD docname
7. git rm docname 删除暂存区的文件
8. git remote add origin git@ <github的git文件地址>： 本地代码和github库建立关系
9. git push -u origin master : 推送本地库的内容至github
10. git clone <github的git文件地址> : 从远程库获取

## 常用操作

### 关联远程git库

1. 使用命令git remote add origin git@server-name:path/repo-name.git；
2. 关联后，使用命令git push -u origin master第一次推送master分支的所有内容；
3. 此后，每次本地提交后，只要有必要，就可以使用命令git push origin master推送最新修改；

### 提交修改

1. git add
2. git commit
3. git push

### 新建和合并分支

每次提交，相当于在git上创建一个点。git把这些点串成一条线，master是主线。
每次新建分支，相当于git新建个指针指向分支。之后所有提交修改都指向分支。分支修改完毕，再把指针指向master，分支合并完成。删除分支即是删除指针。

1. 新建分支并且切换分支 : git checkout -b <branchName> 等价于 git branch <branchName>, git checkout <branchName>
2. 查看所有分支 : git branch, 星号为当前使用的分支
3. 切回主干 <master> : git checkout master
4. 合并分支 : git merge <branchName>
5. 删除分支 : git branch -d <brandName>

### BUG分支 - Stash暂存当前工作修改其他BUG

1. git stash : 保存当前工作
2. git checkout master : 切回主干
3. git checkout -b <branchName> : 用主干内容新建分支
4. 分支修改完成，合并删掉
5. 切回 stash 对应的分支
6. git stash list： 显示stash
7. git stash apply： 恢复stash, git stash apply stash@{0} : 恢复到制定的stash， git stash drop： 删除 stash
8. git stash pop 恢复和删除

### 新功能分支 - Feature