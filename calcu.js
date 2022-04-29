let x=document.getElementById('result');
function disply(a) {
	x.value+=a;
}
function result(){
	x.value=eval(x.value);
}
function funac(){
	x.value=" ";
}
function fnclear(){
	x.value=x.value.substring(0,x.value.length-1);
}