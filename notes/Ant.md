Ant使用教程【2012-12-04】http://www.cnblogs.com/meteoric_cry/archive/2010/09/08/1821162.html
===================================
将js目录下的所有.js合并为一个all.js，调用yuicompressor压缩成一个core.js文件。

<?xml version="1.0" encoding="UTF-8"?>
<project name="Javascritp_build" default="clean" basedir="../">

	<description>Javascritp build for Ant</description>

	<property name="src" location="js"/>
	<property name="build" location="build"/>
	<property name="target" location="result"/>
	<property name="lib" location="lib"/>
	<property name="charset" value="utf-8"/>

	<!-- - - - - - - - - - - - - - - - - -
	这个 ant 配置文件要经过4个流程：
	1、target init 进行初始化处理，创建一个目录build，用于暂存文件；
	2、target concat 合并两个 js 文件，放到 build 目录下；
	3、target compress 调用 Yui Compressor 对合并后的 js 进行压缩
	4、target clean 进行清理动作，删除生成的 build 目录

	ANT标签和属性解释：
	project 的 default 对应某个 target 的 name 值，表示默认执行哪个步骤；
	target 的 depends 对应其他某些 target 的 name 属性，表示依赖性；
	${name} 可以引用 property 中定义的值。
	mkdir 标签创建一个目录
	replaceregexp, 正则表达式替换，将DEBUG标识替换为空，在正式环境不处理DEBUG信息
	注意设置文件的 encoding 属性，否则可能有乱码情况

	关于ANT的详细文档，请看官方手册：http://ant.apache.org/manual/
         - - - - - - - - - - - - - - - - - -->
    <target name="init">
    	<mkdir dir="${build}" />
    </target>

	<target name="concat" depends="init">
		<concat destfile="${build}/all.js" encoding="${charset}" outputencoding="${charset}">
			<path path="${src}/core.js" />
			<path path="${src}/g.js" />
			<path path="${src}/nav.js" />
		</concat>

		<!-- - - - - - - - - - - - - - - - - -
			replaceregexp的说明	http://ant.apache.org/manual/Tasks/replaceregexp.html
		 - - - - - - - - - - - - - - - - - -->

		<replaceregexp match="DEBUG" replace="" flags="g" byline="true" file="${build}/all.js" encoding="${charset}" />
	</target>

	<!-- - - - - - - - - - - - - - - - - -
		YUICompressor参数 http://developer.yahoo.com/yui/compressor/#work

		通用参数：
		    -h, \-\-help                 显示帮助信息
		   \-\-type <js|css>            指定输入文件的文件类型
		   \-\-charset <charset>        指定读取输入文件使用的编码
		   \-\-line-break <column>      在指定的列后插入一个 line-bread 符号
		   \-v, \-\-verbose              显示info和warn级别的信息
		   -o <file>                  指定输出文件。默认输出是控制台。

		JavaScript专用参数：
		     \-\-nomunge                  只压缩, 不对局部变量进行混淆。
		   \-\-preserve-semi            保留所有的分号。
		   \-\-disable-optimizations    禁止优化。
	- - - - - - - - - - - - - - - - - -->
	<target name="compress" depends="concat">
		<echo message="start compress" />
		<java jar="${lib}/yuicompressor-2.4.2.jar" fork="true" failonerror="false">
			<arg line="--type js --charset ${charset} --nomunge ${build}/all.js -o ${target}/core.js" />
		</java>
		<echo message="end compress" />
	</target>

	<target name="clean" depends="compress">
		<delete dir="${build}"/>
	</target>

</project>




右击build.xml，然后选中Run As ---> Ant build，如果运行成功，控制台上将出现如下的信息：



Buildfile: C:\Java_app\JavaTest\WebRoot\WEB-INF\ant-build\build.xml
init:
    [mkdir] Created dir: C:\Java_app\JavaTest\WebRoot\WEB-INF\build
concat:
compress:
     [echo] start compress
     [echo] end compress
clean:
   [delete] Deleting directory C:\Java_app\JavaTest\WebRoot\WEB-INF\build
BUILD SUCCESSFUL
Total time: 1 second



=====================================================================================
使用Ant命令压缩JavaScript文件 http://www.colorhook.com/blog/?p=491

压缩JavaScript文件可以减少代码尺寸，保护源代码，节省网络带宽，加快页面打开速度，甚至优化JS代码。Yahoo有一个压缩JS的工具叫做YUI compressor, Google也有一个工具叫Google Closure Compiler。lifesinger的blog上有一个Slide对它们做了详细的比较。

关于如何使用YUI compressor和Google Closure Compiler, 请参照相应的官方文档。本篇主要是将压缩命令整理成build.xml，然后通过ant命令来执行。下面是项目的build配置文件：

<?xml version="1.0" encoding="utf-8"?>
<project name="Javascript compress project" basedir=".">

    <property name="COMPRESSED_HOME" value="${basedir}/compressed"/>

    <!--compress js file by YUI compressor-->
    <target name="yui-compress">
		<property name="yui.compress" value="${basedir}/lib/yuicompressor-2.4.2.jar" />
       <apply executable="java" parallel="false" verbose="true" dest="${COMPRESSED_HOME}" taskname="js.compile">
			<fileset dir="${basedir}">
				<include name="*.js"/>
			</fileset>
			<arg line="-jar"/>
			<arg path="${yui.compress}" />
			<arg line="--type js --charset UTF-8 -o" />
			<mapper type="glob" from="*.js" to="*-yui-min.js" />
			<targetfile />
		</apply>
    </target>

	<!--compress js file by Google Closure Compiler-->
    <target name="google-compress">
	   <property name="google.compress" value="${basedir}/lib/compiler.jar" />
       <apply executable="java" parallel="false" verbose="true" dest="${COMPRESSED_HOME}" taskname="js.compile">
			<fileset dir="${basedir}">
				<include name="*.js"/>
			</fileset>
			<arg line="-jar"/>
			<arg path="${google.compress}" />
			<arg line="--js" />
			<srcfile/>
			 <arg line="--js_output_file"/>
			 <mapper type="glob" from="*.js" to="*-gcc-min.js" />
			<targetfile />
		</apply>
    </target>

</project>
在build.xml文件的同级目录下有两个文件夹，一个名为lib, 内面放着YUI compressor和Google Closure Compiler的jar文件，另外一个是compressed文件夹，用于存放压缩过的js文件。

压缩时，把需要压缩的js文件放在build.xml文件的同级目录中，然后执行相应的ant命令就可以在compressed文件夹中得到压缩后的js文件了，下面分别是使用YUI Compressor和Google Closure Compiler压缩的命令：

ant yui-compress
ant google-compress
