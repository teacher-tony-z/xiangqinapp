function getTime(){
	var time=document.querySelector('.time');
	var date=new Date();
	var reg=/^[0-9]$/;
	var minutes=date.getMinutes();
	if(reg.test(minutes)==true){
		minutes= '0' + minutes;
	}
	time.innerText=date.getHours()+":"+minutes;
}
getTime();