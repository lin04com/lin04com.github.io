# 标记语言

* pandoc是什么？[pandoc](1) *

如果你需要把文件从一种标记语言格式转换到另一种格式，pandoc会是你的瑞士军刀。它可以把markdown、 reStructuredText、 textile、 HTML、或者LaTeX转换成：

HTML格式: XHTML, HTML5, 以及HTML幻灯片Slidy， S5，或者DZSlides.
文字处理软件格式： Microsoft Word docx, OpenOffice/LibreOffice ODT, OpenDocument XML
电子书： EPUB
文档格式： DocBook, GNU TexInfo, Groff man pages
TeX格式： LaTeX, ConTeXt, LaTeX Beamer slides
PDF via LaTeX
轻量级标记语言格式： Markdown, reStructuredText, AsciiDoc, MediaWiki markup, Emacs Org-Mode, Textile


* 如何安装 *

见http://johnmacfarlane.net/pandoc/installing.html。

需要注意的是，我在ubuntu下用命令sudo apt-get install pandoc安装pandoc，发现并不能编译beamer

pandoc -t beamer talk.txt -o talk.pdf
pandoc: Unknown writer: beamer
后来在ubuntu的问答网站发现了答案

sudo apt-get autoremove pandoc
sudo apt-get install cabal-install
cabal update
cabal install pandoc
然后再把~/.cabal加到路径中去，在.bashrc里加上一句

1
export PATH=/home/ypchen/.cabal/bin:$PATH
怎么用？

在官方网站的示例中找了一个例子，修改了模板文件mytemplate.tex，使它可以支持中文，然后用下面的命令编译SLIDES.md

pandoc -N --template=mytemplate.tex --variable version=1.9 SLIDES.md --latex-engine=xelatex --toc -o example14.pdf
示例页里还有很多别的例子，其中将markdown文件转换成网页的sldes非常吸引人

pandoc -s –mathml -i -t dzslides SLIDES -o example14a.html
pandoc -s –webtex -i -t slidy SLIDES -o example14b.html
pandoc -s –webtex -t -t s5 SLIDES -o example14c.html

之前益辉就给出过一个HTML5幻灯片的例子。人生苦短啊，不要把太多的时间和精力浪费在调格式上了。

参考文章

pandoc介绍
如何用markdown写简历
如何用markdown写beamer幻灯片

(1): http://yanping.me/cn/blog/2012/03/13/pandoc/
