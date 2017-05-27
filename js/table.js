/*
 * table.js
 * version:1.0
 * author:谭若欣
 * createTime:2017.5.27
 * API:http://网址
 */
//要的就是专业 框架初始版
//构造函数 参数传递和参数接收  参数:形参和实参
//当函数括号里面的参数我不知道具体值的时候 形式参数
//括号里面值有具体的值的时候  实际参数
//自己开发插件
//构造函数
function Table(nodeElement){//相等于设定人物属性的过程  new的是一个构造函数(实例) nodeElement是形参
     //属性 
     this.nodeElement=nodeElement || document.body;//如果参数存在 就保存这个参数或者 ||  如果用户没有指定具体参数,那么我就把表格放在body中
    this.Width=this.nodeElement.clientWidth;//保存放置表格的父级元素的宽度
    this.cellWidth=0;//初始化单元格宽度
}
//jq是js框架的一种 面向对象
Table.prototype={//在原型属性上增加方法  ={字面量} 行为
	//功能     
	createTable:function(json){ //名称 函数具体实现    //结构
		if (!json) {//如果不存在 设置一个报错信息  给用户设置报错信息:throw
			throw "Please set the number of rows or columns";//异常抛出
		}else{ //构建表格
			 this.cellWidth= (this.Width-json.col)/json.col;//(总宽度-本身的列数)/列数 -是因为有边框
			this.cssCon();//调用
			for (var i=0;i<json.row;i++) { //创建行  
				var rowEle=document.createElement('div');//创建一个div(每循环遍历一次)
				rowEle.className='row';//创建类名
				//判断单数列的情况			
				if(i%2==0){//模一个2 除2取余数   i从0开始 0-1 1-2
				   rowEle.className += " double";//添加类名
				}
				this.nodeElement.appendChild(rowEle);//把这个div放到用户指定的元素中去 this代表创建的当前对象
				for (var j=0;j<json.col;j++) {
					var colEle=document.createElement('div');
					colEle.className='col';
					//把列添加到行当中
					rowEle.appendChild(colEle);
				}
			}
		}
	},
	cssCon:function(){ //样式
		var css=document.getElementsByTagName('style')[0];//获取style标签
		if(!css){//判断如果不存在
			css=document.createElement('style');
			document.head.appendChild(css);//放到head标签里面
		}
		//css.innerHTML 内容添加
		css.innerHTML+=
		".row{width:100%;height:30px;background:#ecffff} .double{background:#a6ffff;} .col{height:30px;width:"+this.cellWidth+"px;float:left;border-left:1px solid #fff}";//拼接一个字符串样式 /**/
	}
	//边框 在盒模型里面是占位置的 px单位要加上
	
}
//样式:高度:父元素的高度 宽度 边框
/*f(x)=x+1;
//当函数括号里面的参数我不知道具体值的时候 形式参数
f(1)
//括号里面值有具体的值的时候 实际参数
*/
/* 食物链
 * 用户 开发 框架开发
 * 用户>>看网页(不关心开发过程)
 * 开发者>>制作网页(实现过程 开发效率 不关心原理) 年薪10-15W
 * 框架开发者>>任务 为了让开发者提高开发效率 年薪30W  顶端的人才
 */
//数据:后台<动态>  表格:展示数据    前端做项目,不是单纯的做特效 做页面,做兼容,做交互,做优化 加载速度
//可以发展到GitHub上去
//页面交互  数据交互--->做框架 