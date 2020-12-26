var main=document.querySelector('.main');
var title=document.querySelector('.title');
var mainPage=document.querySelector('.main-page');
var bottomXbt=document.querySelector('.bottom-xbt');
var bottomNav=document.querySelector('.bottom-nav');
var bottom=document.querySelector('.bottom')
var boy=document.querySelector('.b1');
var girl=document.querySelector('.b2');
var bc=document.querySelector('.main-page .bc');
var flag=document.querySelector('.flag')
var commend=document.getElementById('1');
var edit=document.getElementById('2');
var news=document.getElementById('3');
var mine=document.getElementById('4');
var goBack=document.querySelector(".go-back")
console.log(goBack);
var minePage=document.createElement("div")
document.body.appendChild(minePage)
minePage.className='mine-page';
goBack.onclick=function(e){
	//console.log(e)
	location.reload();
}
girl.onclick=function(){
	title.innerText='推荐';
	main.style.display='none';
	mainPage.style.opacity='1'
	mainPage.style.display='flex'
	bottomNav.style.opacity='1'
	bottom.style.display='flex'
}
function boyClick1(){
	title.innerText='推荐';
	main.style.display='none';
	mainPage.style.opacity='1';
	bottomNav.style.opacity='1';
	mainPage.style.display='flex'
	bottom.style.display='flex'
}
function boyClick2(){
	bc.innerHTML=`<div class="pic" style="background-image: url(img/user2.jpeg);"></div>
				<div class="msg">
					<name>阿超</name>
					<age>28岁/188CM/北京</age>
					<rate>78%</rate>
					<pipei>匹配</pipei>
					<mainpage>主页></main-page>
				</div>`
	flag.innerHTML=`<flag>上海户口</flag>
				<flag>CEO</flag>
				<flag>自主创业</flag>
				<flag>家里有矿</flag>`
}
boy.addEventListener('click',boyClick1)
boy.addEventListener('click',boyClick2)
news.onclick=function(){
	news.style.backgroundImage="url(img/5-消息2_03.png)"
	commend.style.backgroundImage='url(img/7-我的_03.png)'
	mine.style.backgroundImage='url(img/images/2-选择_05_11.png)'
	edit.style.backgroundImage='url(img/images/2-选择_05_05.png)'
	title.innerText='消息';
	main.style.display='flex';
	mainPage.style.opacity='0';
	mainPage.style.display='none'
	bottomNav.style.opacity='1';
	minePage.style.display='none'
	main.innerHTML=`<div class="top-nav">
				<div class="span" id="zuixin">最新</div>
				<div class="span" id="like">我喜欢的</div>
				<div class="span" id="liked">喜欢我子女的</div>
			</div>
			<div class="news">
				<div class="usernews">
					<div class="tx" style="background-image: url(`+userItem.user1.url+`);"></div>
					<div class="nmsg">
						<username>`+userItem.user1.username+`</username>
						<usermsg>`+userItem.user1.usermsg+`</usermsg>
					</div>
					<div class="ntime">`+userItem.user1.msgtime+`</div>
				</div>
				<div class="usernews">
					<div class="tx" style="background-image: url(`+userItem.user2.url+`);"></div>
					<div class="nmsg">
						<username>`+userItem.user2.username+`</username>
						<usermsg>`+userItem.user2.usermsg+`</usermsg>
					</div>
					<div class="ntime">`+userItem.user2.msgtime+`</div>
				</div>
				<div class="usernews">
					<div class="tx" style="background-image: url(`+userItem.user3.url+`);"></div>
					<div class="nmsg">
						<username>`+userItem.user3.username+`</username>
						<usermsg>`+userItem.user3.usermsg+`</usermsg>
					</div>
					<div class="ntime">`+userItem.user3.msgtime+`</div>
				</div>
				<div class="usernews">
					<div class="tx" style="background-image: url(`+userItem.user4.url+`);"></div>
					<div class="nmsg">
						<username>`+userItem.user4.username+`</username>
						<usermsg>`+userItem.user4.usermsg+`</usermsg>
					</div>
					<div class="ntime">`+userItem.user4.msgtime+`</div>
				</div>
			</div>`
}



commend.onclick=function(){
	var name=document.querySelector("name")
	// console.log(name.innerText)
	news.style.backgroundImage="url(img/images/2-选择_05_08.png)"
	commend.style.backgroundImage='url(img/images/2-选择_05_03.png)'
	mine.style.backgroundImage='url(img/images/2-选择_05_11.png)'
	edit.style.backgroundImage='url(img/images/2-选择_05_05.png)'
	title.innerText='推荐';
	main.style.display='none';
	mainPage.style.opacity='1';
	mainPage.style.display='flex'
	bottomNav.style.opacity='1';
	minePage.style.display="none"
}

mine.onclick=function(){
	minePage.style.display='flex'
	news.style.backgroundImage="url(img/images/2-选择_05_08.png)"
	commend.style.backgroundImage='url(img/7-我的_03.png)'
	mine.style.backgroundImage='url(img/7-我的_06.png)'
	edit.style.backgroundImage='url(img/images/2-选择_05_05.png)'
	title.innerText='我的';
	main.style.display='none';
	mainPage.style.opacity='0';
	mainPage.style.display='none'
	bottomNav.style.opacity='1';
	minePage.innerHTML=`<div class="top-box">
				<div class="top">
					<t-iocn style="background-image: url(img/images/7-我的_06.png);"></t-iocn>
					<t-pic style="background-image: url(img/images/5-消息1_03.png);"></t-pic>
					<t-iocn style="background-image: url(img/images/7-我的_03.png);"></t-iocn>
				</div>
				<div class="tbottom">
					<myname>帅的没人爱</myname>
					<id>亲家ID：1235886</id>
				</div>
				<div class="tbottom">
					<div class="digit">
						<digit>10</digit>
						<digit>12</digit>
						<digit>23</digit>
					</div>
					<div class="b-text">
						<like>我喜欢的</like>
						<liked>喜欢我的</liked>
						<waited>我待定的</waited>
					</div>
				</div>
			</div>
			<div class="middle-box">
				<div class="m-text" style="background-image: url(img/images/7-我的03_03.png);"></div>
				<div class="icon" style="background-image: url(img/images/7-我的_10.png);"></div>
			</div>
			<div class="bottom-box">
				<div class="m-text" style="background-image: url(img/images/7-我的03_03.png);"></div>
				<div class="icon" style="background-image: url(img/images/7-我的_10.png);"></div>
			</div>
			`
}
edit.onclick=function(){
	news.style.backgroundImage="url(img/images/2-选择_05_08.png)"
	commend.style.backgroundImage='url(img/7-我的_03.png)'
	mine.style.backgroundImage='url(img/images/2-选择_05_11.png)'
	edit.style.backgroundImage='url(img/images/编辑.png)'
	title.innerText='编辑';
	main.style.display='flex';
	mainPage.style.opacity='0';
	mainPage.style.display='none';
	bottomNav.style.opacity='1';
	minePage.style.display='none'
	main.innerHTML=`<div class="onload">
				<onload>
					<span>上传照片</span><span>最多10张</span>
				</onload>
				<div class="onload-pic">
					<div class="onloadpic"></div>
					<div class="onloadpic"></div>
					<div class="onloadpic"></div>
					<div class="onloadpic"></div>
				</div>
			</div>
			<div class="writemsg">
				<div class="wmsg">
					<p>姓名或昵称</p>
					<p>去填写></p>
				</div>
				<div class="wmsg">
					<p>年龄</p>
					<p>去填写></p>
				</div>
				<div class="wmsg">
					<p>身高</p>
					<p>去填写></p>
				</div>
				<div class="wmsg">
					<p>户籍</p>
					<p>去填写></p>
				</div>
				<div class="wmsg">
					<p>学历</p>
					<p>去填写></p>
				</div>
				<div class="wmsg">
					<p>职业</p>
					<p>去填写></p>
				</div>
				<div class="wmsg">
					<p>年薪</p>
					<p>去填写></p>
				</div>
				<div class="wmsg">
					<p>资产</p>
					<p>去填写></p>
				</div>
				<div class="wmsg">
					<p>简单描述</p>
					<p>去填写></p>
				</div>
				<div class="wmsg">
					<p>个性标签</p>
					<p>去填写></p>
				</div>
			</div>
			<div class="upload">
				<upload-button>发布</upload-button>
			</div>`
}
var userItem={
	user1:{
		url : "img/images/5-消息1_10.png",
		username : '钻石王老五',
		usermsg : 'i love you',
		msgtime: '1:30'
},
	user2:{
		url : "img/images/5-消息1_03.png",
		username : '空谷幽兰',
		usermsg : '我看了您家的闰女，我和儿子都很喜欢..',
		msgtime: '1:36'
	},
	user3:{
		url : "img/images/5-消息1_06.png",
		username : '康斯坦丁',
		usermsg : '想和你的闺女去吃个便饭，我叫上我家小子...',
		msgtime: '2:30'
	},
	user4:{
		url : "img/images/5-消息1_08.png",
		username : '我儿子好帅',
		usermsg : '我看到了您家的闺女，我觉得和我儿子很配...',
		msgtime: '2:36'
	}
}