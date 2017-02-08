/*module.exports=function () {
	console.log(module);
}
console.log(module);*/
var alert=log=console.log;
/*var DOMEval=require("../src/core/DOMEval");*/
/*var fs=require('fs');
var grunt=require('../Gruntfile');

/!*console.log(typeof DOMEval);*!/
console.log(typeof fs)
console.log(typeof grunt)*/
/*var func=function (aa,bb,c,s) {
 this.a=10;
 }
 console.log(func.length);*/
/*var a=1;
if(!a) console.log(Object.prototype.toString.call(a));*/
/*var func=function (a,b) {
	return a+b;
}
func=func.toString().replace('a+b' ,'a-b').replace();
console.log(func);*/
/*var a=['sdf','abc'];
a.push('sdf');
console.log(a);*/
/*require( [
	"..\src\core\DOMEval.js"
	],function () {

	}
);*/
/*jq=function (str) {
	console.log(str);
	return jq.prototype;
}
jq.fn=jq.prototype;
jq.fn.hello=function () {
	console.log("Hellow");
	return this;
}
jq.fn.world=function () {
	console.log("world");
	return this;
}
jq("fdsgd").hello().world();*/
/*arr=[1,2,3,4];
console.log(arr.slice(2,3));*/
/*console.log([].prevObject);*/
/*obj={
	length:2,
	hah:"haha"
};*/
/*console.log(!!obj &&"length" in obj && obj.length);*/
/*
console.log(
	typeof obj === "object" || typeof obj === "function" ?
	class2type[ toString.call( obj ) ] || "object" :
	typeof obj
);
*/
/*arr=[1,2,3,4,5];
type=typeof(arr);
length=arr.length;
console.log(type === "array" || length === 0 ||
	typeof length === "number" && length > 0 && ( length - 1 ) in arr
);*/
/*var b = 4 && 5 && null && undefined;
console.log(b);

stack=fn.pushStack.call(stack,[44]);
tack=fn.pushStack.call(stack,[55]);*/

/*var a=[1,2,3,4,5];
function prt(i){
	if(i==5) return ;
	prt(i+1);
	console.log(a[i]);
}
prt(0);*/

/*console.log(Math.random().toString().replace( /\D/g, "" ));*/
/*/!* global Symbol *!/
console.log(typeof Symbol);*/
/*console.log("\ufeff");*/
/*
function jquery(){
	this.val=33;
}

jquery.v=55;

jquery.prototype={
	val:11,
	func:function () {
		console.log(this.val);
	}
}
jquery.prototype.func();
var jq=new jquery();
console.log(jq.val);
jq.val=22;
jq.func();
jquery.prototype.func();
*/

/*var reguex=/([a-z]\.jpg)+/;
var match=reguex.exec("b.jpga.jpgc.jpg");
console.log(match[1]);*/
/*var rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
var match=rquickExpr.exec(" sth");
console.log(match);*/
/*
cache=function (key,value) {
	return (cache[key+" "]=value);
}
cache(1,3);
console.log(jQuery.slice.apply(cache['1 ']),0);*/

/*var n=5;							///全排列
var vis=new Array(20);
var ans=new Array(20);
for(var i=0;i<=n;i++)
	vis[i] = false;

function print() {
	var str="";
	for(var i=0;i<n;i++)
		str+=(ans[i]+" ");
	console.log(str);
}

function dfs(cnt) {
	if(cnt===n) {
		print();
		return;
	}
	for(var i=0;i<n;i++){
		if(vis[i]===false){
			ans[cnt]=i+1;
			//console.log(i);
			vis[i]=true;
			dfs(cnt+1);
			vis[i]=false;
		}
	}
}

dfs(0);*/
/*var
	whitespace = "[\\x20\\t\\r\\n\\f]",
	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" );
str=" , what is you name,i am shentr";
var match=rcomma.exec(str);
console.log(str.slice(3));
//console.log(match[0].length);
//console.log(str.length);*/


/*function a() {
	b();
}
function b() {
	a();
}
a();*/

/*
//预编译
function Aaron() {
	alert("hello");
};
Aaron(); //这里调用Aaron，输出world而不是hello

function Aaron() {
	alert("world");
};
Aaron(); //这里调用Aaron，当然输出world*/
/*var a = 1;
var b = function(callback) {
	setTimeout(function() {
		a++;
		callback();
	}, 1000)
}

b(function(){
	alert(a)  //2
})*/
/*var a = 1;

setTimeout(function(){
	a++;
	alert(a);
},1);
//for(i=0;i<100000000;i++){}
var timer=setInterval(function () {
	a+=10;
	alert(a);
	if(a>40) clearInterval(timer);
},1000);

alert(a)//1
alert(a)//1*/

/*回调函数(异步机制)
var n=1;
var bb=1;

function a(callback) {
	setTimeout(function () {
		callback();
		for(i=0;i<500000000000;i++){};
		//callback();
	},1000);
	alert(n);
	n++;
	alert(n);
	for(i=0;i<100000000;i++){}
}

a(b);
a(b);

function b() {
	n+=bb;
	bb+=3;
	for(i=0;i<50000000;i++){};
	alert(n);
}
*/
/*
var a = 1;

var b = function(callback) {
	setTimeout(function() {
		a++;
		callback();
	}, 1000)
}

b(function(){
	alert(a)  //2
})
*/

/*
function fun() {
	log(arguments);
}

fun(10,[2,4,6],{a:5});
*/
/*obj={
	func:function(){
		for(i=0;i<10;i++);
		var fob=10;
		console.log(self)
	},

	key:"value"
}
obj.func();*/

/*function a() {								///闭包
	 var i=3;
	b=function() {
		log(i);
		 return i;
	 }()
}
log(a());*/
/*var bar;
function foo(x){
	bar = function(){ console.log(++x); }
};
foo(5);
bar(); // 结果是6*/

/*function a() { 								///返回 对象 也有闭包保存局部变量的作用
	var i=3;
	return {
		vi:i,
		k:"sfd"
	}
}
log(a().vi)*/



















