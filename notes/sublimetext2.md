# SumlimeText 配置

http://www.cnblogs.com/harrychinese/archive/2012/10/10/sublime_settings.html
http://www.ghugo.com/sublime-text-2-tricks-and-tips-plugin/
http://www.feelcss.com/sublime-text-2-settings.html

//Plugins || Softwares
ConvertToUTF8：ST2只支持utf8编码，该插件可以显示与编辑 GBK, BIG5 等编码的文件。
Emmet，先前的Zencoding项目已经改名为Emmet，写前端HTML的用户可以进行安装。
SideBarEnhancements，此插件可以大大的加强ST2侧边栏的功能。
SublimeLinter，这是一款代码语法检测工具。可以高亮显示出错的代码。
PlainTasks，让ST2变成一个非常不错的Todo工具。
SublimeCodeIntel，一个功能强大的自动补全代码工具。
SublimeREPL，在ST2中直接执行脚本如（python,R,Ruby）等。
Alignment，代码对其工具，适用于强迫症患者。
JsFormat，同http://jsbeautifier.org/实现的功能。
DocBlockr，在JS函数上方输入/**，然后回车，doc就生成好了非常好用。
Bracket Highlighte 括号匹配高亮插件
GBK Encoding Support GBK 编码插件
AndyPython Python标准库帮助提示插件

snippet 模板


SublimeCodeIntel，一个功能强大的自动补全代码工具。
{
	"sublimelinter_popup_errors_on_save": true
}

SublimeLinter
{
	"sublimelinter_popup_errors_on_save": true,
	"sublimelinter_objj_check_ascii": false
}



Ctrl+L	选择整行(按住-继续选择下行)
Ctrl+KK	从光标处删除至行尾
Ctrl+Shift+K	删除整行
Ctrl+Shift+D	复制光标所在整行，插入在该行之前
Ctrl+J	合并行(已选择需要合并的多行时)
Ctrl+KU	改为大写
Ctrl+KL	改为小写
Ctrl+D	选词(按住-继续选择下个相同的字符串)
Ctrl+M	光标移动至括号内开始或结束的位置
Ctrl+Shift+M	选择括号内的内容(按住-继续选择父括号)
Ctrl+/	注释整行(如已选择内容，同“Ctrl+Shift+/”效果)
Ctrl+Shift+/	注释已选择内容
Ctrl+Space	自动完成(win与系统快捷键冲突，需修改)
Ctrl+Z	撤销
Ctrl+Y	恢复撤销
Ctrl+Shift+V	粘贴并自动缩进(其它兄弟写的，实测win系统自动缩进无效)
Ctrl+M	光标跳至对应的括号
Alt+.	闭合当前标签
Ctrl+Shift+A	选择光标位置父标签对儿
Ctrl+Shift+[	折叠代码
Ctrl+Shift+]	展开代码
Ctrl+KT	折叠属性
Ctrl+K0	展开所有
Ctrl+U	软撤销
Ctrl+T	词互换
Ctrl+Enter	插入行后
Ctrl+Shift Enter	插入行前
Ctrl+K Backspace	从光标处删除至行首
Ctrl+Shift+UP	与上行互换
Ctrl+Shift+DOWN	与下行互换
Shift+Tab	去除缩进
Tab	缩进
F9	行排序(按a-z)


//http://www.jankerli.com/?p=1359
安装cTags插件
首先，从Ctags官网下载压缩包下来，解压到电脑的某个地方，比如“C:\Program Files\ctags”，然后把cTags添加到系统变量里去：

在“我的电脑”右键属性 → 高级 → 环境变量 → 在“系统变量”里找到“Path”，点击“编辑” → 把“;C:\Program Files\ctags”（不包括双引号）复制到最后 → 最后一路“确定”保存。

然后通过 Package Control 来安装 cTags 插件：

按ctrl + shift + P调出命令面板；

输入 install 调出 Package Control：Install Package 选项，并回车；

输入 ctags 选中后回车即可安装。

安装完之后，在项目的当前目录下按ctrl + t, ctrl + r，会生成.tags的文件。当光标停留在某个函数上时，按快捷键 ctrl+t, ctrl+t就可以打开函数所在的文件，并跳转到相应的位置了。

PS：安装这个插件折腾了我蛮久，主要是不知道还要从ctags官网下载压缩包，以及修改系统的变量，后来还是一博友给我发的国外的参考资料才知道要这样配置的。刚开始知道这软件之所以没用是因为没有像eclipse可以追踪函数的功能，后来才知道可以通过安装cTags插件来实现。装上此功能后，就更喜欢用Sublime Text 2了。
