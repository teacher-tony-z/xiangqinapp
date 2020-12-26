var enrolled1=document.querySelector('button:nth-child(1)');
var icon=document.querySelector('.icon');
var login=document.querySelector('.login');
var enrolled2=document.querySelector('button:nth-child(2)');
var text=document.querySelector('.text');
var bottomDiv=document.querySelector('.bottom')
var middleDiv=document.querySelector('.middle');
var yzmDiv=document.createElement('a')
var input1=document.createElement('input');
var input2=document.createElement('input');
var zhlogin=document.createElement('span');
var warn=document.createElement('warn')
var enrolled3=document.createElement('newbutton')
var sha=document.createElement('sha')
var yzmlogin=document.createElement('yzmlogin')
var loginBtn=document.createElement('login-btn')
var goBack=document.querySelector('.go-back')
goBack.onclick=function(e){
	//console.log(e)
	location.reload();
}
enrolled3.innerText='注册新账号'
loginBtn.innerText='登录';
yzmlogin.innerText='手机验证码登录'
sha.innerText='忘记密码？'
bottomDiv.appendChild(sha);
bottomDiv.appendChild(yzmlogin);
bottomDiv.appendChild(loginBtn)
warn.innerText='请重新输入电话号码'
zhlogin.innerText='登录已有帐号'
bottomDiv.appendChild(zhlogin);
bottomDiv.appendChild(enrolled3);
bottomDiv.appendChild(warn);
input1.className="input1"
input2.className='input2'
input1.setAttribute("placeholder","  请输入您的验证码")
input2.setAttribute("placeholder","  请输入您的手机号码")
yzmDiv.innerText='发送验证码'
bottomDiv.appendChild(input1);
middleDiv.appendChild(input2);
middleDiv.appendChild(yzmDiv);
// 注册新账号
enrolled1.onclick=function(){
	login.style.display='none';
	enrolled2.style.display='none';
	enrolled1.style.display='none'
	icon.style.display='none';
	text.style.fontSize='2rem';
	input1.style.display='block'
	input2.style.display='block'
	zhlogin.style.display='block'
	yzmDiv.style.display='block'
	enrolled3.style.display='block'
}

// 注册按钮
enrolled3.onclick=function (){
	enrolled3.style.background='rgb(239, 56, 123, 0.4)'
	enrolled3.style.color=' rgb(255, 255, 255, 0.6)'
	var deg=/^\d{4}$/;
	if(deg.test(input1.value)){
		location='choosepage.html'
	}else{
		warn.innerText='验证码输入错误';
		warn.style.display='block';
	}
}
// 登录按钮
loginBtn.onclick=function(){
	loginBtn.style.color=' rgb(255, 255, 255, 0.6)'
	loginBtn.style.background='rgb(239, 56, 123, 0.4)'
	location='choosepage.html'
}
yzmDiv.onclick=function(){
	var deg=/^\d{11}$/;
	//console.log(deg.test(input2.value))
	if(deg.test(input2.value)){
		yzmDiv.innerText="验证码已发送(60s)"
	}else{
		warn.style.display='block';
		}
}
//登录已有账号
enrolled2.onclick=function(){
	login.style.display='none';
	enrolled2.style.display='none';
	enrolled1.style.display='none'
	icon.style.display='none';
	text.style.fontSize='2rem';
	input1.style.display='block'
	input2.style.display='block'
	zhlogin.style.display='block'
	yzmDiv.style.display='block'
	loginBtn.style.display='block'
	yzmDiv.style.display='none'
	zhlogin.style.display='none'
	input1.setAttribute('placeholder','  密码')
	sha.style.display='block'
	yzmlogin.style.display='block'
}
// 验证码登录
yzmlogin.onclick=function(){
	enrolled3.style.display='block'
	yzmlogin.style.display='none'
	loginBtn.style.display='none'
	zhlogin.style.display='block'
	sha.style.display='none';
	yzmDiv.style.display='block';
	input1.setAttribute('placeholder','  请输入验证码')
}
// 账号登陆
zhlogin.onclick=function(){
	enrolled3.style.display='none'
	loginBtn.style.display='block'
	yzmlogin.style.display='block'
	zhlogin.style.display='none'
	sha.style.display='block';
	yzmDiv.style.display='none';
	input1.setAttribute('placeholder','  密码')
}


// function daojishi(){
// 	var seconds=60;
// 	seconds--;
// 	if(--seconds<0){
// 		seconds=0;
// 	}
// }