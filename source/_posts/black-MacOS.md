---
title: 不是白果,买不起(确实买不起😭),而是黑苹果更具性价比[旺柴]
date: 2022-11-01 13:23:20
---
*作为一个码农, 一台趁手的电脑是必须的, 而敲代码,哪个系统最舒服,还得是 **MacOS** 
但是白果果它贵呀, 加个内存固态 , 什么...要1500.我的天, 垃圾佬永不为奴.*

***
### 初接触
初接触到黑苹果, 还是上大学那个时候, 那个时候还是 **Mac snow leopard**, 真是一转眼好多年过去了, 网上冲浪,误入论坛社区. 从此打开新大陆, 原来还能这么玩.
从最开始的
* 变色龙
* 到 clover
* 再到现在的 OpenCore

一路断断续续, 走过来. 真是见证了整个黑苹果的发展. 不过感觉也快接近尾声了, 现在苹果都不用x86的intel CPU以及AMD的显卡了, 以后可能成为绝唱了.


### 安装
我现在工作用的笔记本,还是多年以前的Hp-zhan66八代低压U,这么多年还在服役, 现在用最新Ventura已经开始卡了,一方面可能是CPU确实拉跨, 另一方, 也是跟苹果系统现在负优化有关喽 🐶头保命. 屋里的台式机, 倒是更新换代过, 从7代到10代. 显卡也换过好几张, 从gtx1060 到 rx588 再到 rtx2060s, 当年还是有NVIDIA的web驱动的.可惜随着MacOS的更新,后续已不再支持. 所以有段时间我更换了一代挖矿神卡588, 不过在挖矿风潮,沸沸扬扬的时候, 咸鱼翻了五倍果断卖了,用集显顶一顶, 我可真机智.

现在安装黑苹果可以说是简单的的一批,堪称无脑
#### first
确定电脑能不能装
* CPU方面,现在基本上没啥要求. 基本上都能符合.即使你是AMD, 亦或是E3、E5神教
* 内存无所谓,都行
* 固态大部分都行,有些三星什么的有问题,是有些解决办法,比如驱动啊, 或者是固态刷固件啊等. 最好无脑西数. 当然你要是SATA的话,基本啥牌子都行
* 显卡, N卡pass,A卡, 哎呀算了, 附上个免驱列表. 至于集显, 10代包括10代intel以内集显都可以. 至于amd. 目前有大神在弄,不过现在只支持Ryzen 1xxx (Athlon Silver/Gold) 到 5xxx
* 主板无所谓
* 无线Intel也支持,不过无隔空投送, 免驱博通bcm4319

### second
安装之前还是建议, 去论坛, 去网上找一些你机型相关的一些帖子, 看一看,心里有谱。
* [远景论坛-国内黑苹果社区](https://bbs.pcbeta.com/)
* [OpenCore文档](https://oc.skk.moe/)
* [Hackintool-必备黑果工具箱](https://www.baker76.com/hackintool/)

其实大家可以, 在论坛上先找一找跟自己机型类似的别人的配置文件, 可以在别人的这个配置文件基础上, 小小的再修改一下就可以了, 不需要配置全部一样
### third
安装开始, 这一步就类似于重装系统了, 需要准备
* 16G U盘
* MacOS镜像
* 要装系统的电脑硬盘
* 启动ESP分区大小最低>=300MB
  
差不多了, 可以先把镜像写到U盘上,镜像可以在论坛上找,或者[黑果小兵](https://blog.daliansky.net/) 上面有很多镜像以及教程 有纯原打包的, 也有pe几合一的, 推荐pe的, 因为PE用的着。

写入镜像软件推荐 [Etcher](https://etcher.balena.io/) 到这里一个MacOS系统安装盘就做好了

###### 下一步
BIOS设置, 每个牌子主板有些差别, 具体可上论坛看看
一般如下设置
**Enable**
* Intel Virtualization 
* Technology (VT-x)
* Multi-processor
* UEFI Boot
* Intel VT-d (or set DisableIoMapper in the config.plist to FALSE
* SATA Mode to AHCI
* XHCI Handoff
* Above 4G Decoding and Clever Access Memory (or set ResizeAppleGpuBars to -1)

**Disable**
* Legacy ROM support
* Secure Boot
* Intel SGX

这些搞好就, 还没完哦, 还有一项比较重要的步骤,关系到使用的一步, 那就是OpenCore的文件配置, 这一步做好, 安装使用一气呵成。

### Next
OpenCore 的配置, 建议参考官方文档根据自己 CPU、主板等配置, 或者在论坛上, 找到类似的配置文件, 拿来使用
> 相关文档:
> * [国光的文档 👍🏻](https://apple.sqlsec.com/4-OC%E9%85%8D%E7%BD%AE/4-1/)
> * [黑果小兵OpenCore精解](https://blog.daliansky.net/OpenCore-BootLoader.html)

在配置好这一步, 剩下的就非常简单了, 我们使用PE, 进入MacOS U盘的ESP 启动分区,替换我们配置好的Config.plist 位置如下 ESP/OC/ 配置文件搞好后, 剩下的基本上一路畅通的安装喽, 啊啊啊, 那啥写到这, 由于我不是从头来的, 没有录制视频, 以及截图说明, 后面参考以上文档以及论坛喽, 😋



