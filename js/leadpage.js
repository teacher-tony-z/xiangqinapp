var imgDiv=document.querySelectorAll('.img')
var circleDiv=document.querySelectorAll('.circle');
var textDiv=document.querySelector('.text');
var button=document.querySelector('button')
var body=document.body;
lcEvent.init(body);
body.addEvent('swiperLeft',function(e){
	console.log(e)
	goPlay();
	
})
body.addEvent('swiperRight',function(e){
	console.log(e)
	backPlay();
	
})
var index=0;
function changePic(index){
	 for(var i=0;i<imgDiv.length;++i){
		imgDiv[i].style.display='none';
		circleDiv[i].className='circle'
	}
	imgDiv[index].style.display='block';
	circleDiv[index].className='circle active';
	if(index==0){
		textDiv.innerHTML=`<p>挖掘身边优质资源</p>
							<p>科学配对</p>`
							button.style.display="none";
	}
	if(index==1){
		textDiv.innerHTML=`<p>为儿女的终身大事</p>
							<p>早日搞定</p>`
							button.style.display="none";
	}
	if(index==2){
		textDiv.innerHTML=`<p>合适的人终成眷属</p>
							<p>皆大欢喜</p>`
							button.style.display="block"
	}
	console.log(index)
}

function goPlay(){
	if(++index>=imgDiv.length) index=2;
	changePic(index);
	
}
function backPlay(){
	if(--index<0) index=0;
	changePic(index);	
}
button.onclick=function(){
	location="loginpage.html";
}	

		

 