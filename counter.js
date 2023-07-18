

cnt = 0

function countMe(){
	cnt++;
	document.querySelector("#res").innerText = cnt;
}

function resetMe(){
	cnt = 0;
	document.querySelector("#res").innerText = 0;
}

function decreaseMe(){
	cnt--;
	document.querySelector("#res").innerText = cnt;
}