###简介
- 基于vue框架做的flappy bird游戏，用vue-cli构建，采用了部分ES6特性，在src文件夹下开发
- 在线地址[http://keep-writing-codes.github.io/woxixiulayin/example/vflappybird/index.html](http://keep-writing-codes.github.io/woxixiulayin/example/vflappybird/index.html)

####基本思路
- 1.采用vue的模块化方式编写组件（src/componets/），各游戏组件比较清晰，容易修改；
- 2.game.js采用event机制，是游戏的事件中心，提供事件操作函数，各组件内部监听游戏事件响应动作；
- 3.store.js中统一维护公有state，集中管理，对外提供操作函数；
- 4.world.js用于更新页面动画，组件通过world.listeners.add/remove注册监听函数，一旦添加监听就开始更新动画；

####其他
- 1.代码没怎么做兼容，只在chrome和苹果手机上测试过；
- 2.项目的框架没做优化


<!--![image](https://github.com/bastarder/Endless/blob/master/game.gif)-->
## 项目安装&启动

``` bash
git clone https://github.com/Xrysstal/Graduation-Project.git
cd vflappy-master
npm install
npm run dev
```
## 你好
 - 本人以信誉郑重声明：所呈交的学位毕业设计（论文）是本人在指导教师指导下由本人独立撰写完成的没有剽窃、抄袭、造假等违反道德、学术规范和其他侵权行为文中引用他人的文献、数据、图件、资料均已明确标注出不包含他人成果及为获得****大学或其他教育机构的学位或证书而使用过的材料对本设计（论文）的研究做出重要贡献的个人和集体均已在文中以明确方式标明本毕业设计（论文）引起的法律结果完全由本人承担
 
 - 本毕业设计（论文）成果归****大学所有
 
 - 特此声明,;
 - 可以联系我`QQ:854933292`,`Wechat: xuexiuxin`