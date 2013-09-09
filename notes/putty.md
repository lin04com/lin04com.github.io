putty使用技巧 http://blog.chinaunix.net/uid-24148050-id-90545.html

技巧一： 增大输出缓存
     默认情况下，Putty的输出显示最多200行，也就是说你cat一个500行的文件，它只能显示出最后的200行，你要通过滚动条看前300行的内容是看不到的，幸亏这个值可以配置，具体位置是category->window下，将Lines of scrollback 由缺省的200改成一个更大的值，我改成了2000。

技巧二：最大化最小化快捷键
    在windows下最大化最小化窗口是有快捷键的：
    Alt + 空格 + N：最小化
    Alt + 空格 + X：最大化
    Alt + 空格 + R：恢复原来大小
    可是默认情况下这快捷键对Putty不起作用，还是需要配置，具体位置在category->window->Behaviour下，将System menu appears on ALT-Space前面的框选中就好了。
（实际上只有左边的Alt管用，右边的不管用，可能和键盘配置有关）

技巧三：常用快捷键
   Shift+PgOn或Shift+PgUp：使得终端内容上下移动，每次移动一页，也可以使用Ctrl+PgOn或Ctrl+PgUp连续移动。显卡的内存决定可以回滚多少内容。
   Ctrl+L：刷新屏幕，相当于clear命令的效果。
   Ctrl+A：使得光标移至行首
   Ctrl+E：使得光标移至行尾
   Ctrl+K：从光标位置删除字符至行尾
   Ctrl+W：删除光标左边的单词
   Ctrl+Y：粘贴上面某个方式删除的内容

技巧四：putty的命令行参数
   在putty.exe的快捷方式中，可以加上命令行参数来省去ssh登陆输入账号密码的麻烦。
   先在putty.exe中建立一个session（如192.168.8.83),给putty.exe新建一个快捷方式，在“属性-》目标”的末尾添加以下信息：
   "X:/putty.exe" -load 192.168.8.83 -l root -pw 123456

没有session的话，也可以这样
   "X:/putty.exe" -ssh -l <login> -pw <passwd> <ServerIP>

技巧五：USB转串口 使用问题
   Q：USB转串口，putty，有时侯窗口只输出，无法输入。
   A：修改串口COM session的设置 Serial-》FlowControl 为 None 就搞定了

技巧六：解决putty中文乱码
Category -->Windows
   -->Appearance
   -->Font settings
把”字体”改为”Fixedsys”（或者其他中文字体），字符集为CHINEASE_GB2312

Category --> Windows
   -->Translation
   --> Received data assumed to be …
把character设置为 ”Use font encoding”
保存后登陆远程主机就可以了。

若显示仍然是乱码，说明远程主机的语言设置有问题。
修改远程主机 \home\leon\.bash_profile,加入以下语句：
    export LANG=zh_CN.UTF-8
    export LANGUAGE=zh_CN:zh
    declare -x LANG="zh_CN.UTF-8"
    declare -x LANGUAGE="zh_CN:zh"
使配置文件成效
    #source .bash_profile

Category -->Windows
         -->Translation
         --> Received data assumed to be …
把character设置为 ”UTF-8″

技巧七：关闭shell提示音
在 Linux 控制台下（没有 X11），可以使用以下命令:
    #setterm -blength 0
在X11下面(不管是 KDE、Gnome、XFCE 或者……) :
    #xset b off

也可以直接关掉某种 shell 里的提示音。
对 Bash:
    # has to go into /etc/inputrc or .inputrc
    # It will not work in a .bashrc
    set bell-style none
对 Tcsh:
    # put this into your .tcshrc file
    # just tab completion beep off:
    set matchbeep = never
    # any beep off:
    set nobeep = 1
在 shell 里面，你可以按下 crtl+g 来测试一下这个嘟嘟声是否已经去掉


技巧八：解决ssh登录慢的问题
其实是sshd的问题，跟putty没关系
修改sshd配置文件 vi /etc/ssh/sshd_config
UseDNS=no
然后重启sshd服务
service sshd restart

--------------------------------------- 华丽的分割线 -----------------------------------

http://blog.chinaunix.net/attachment/attach/24/14/80/5024148050cf9e9ed1595292b93648722fe6030e4a.txt
