function login(){
	console.log("jama");
	document.getElementById('odhlasenie').style.visibility="visible";
	document.getElementById('getjoke').style.visibility="visible";
	document.getElementById('addjoke').style.visibility="visible";
	document.getElementById('sendMess').style.visibility="visible";
	document.getElementById('getMess').style.visibility="visible";
	document.getElementById('changePass').style.visibility="visible";
	document.getElementById("wrongNP").style.visibility="hidden";
	document.getElementById("changeP").style.display="none";
	document.getElementById("gMess").style.display="none";


	let meno=document.getElementById('login').value;
	let pass=document.getElementById("pass").value;

	let url="http://itsovy.sk:1201/login";
	let req=new XMLHttpRequest();
	req.open('POST',url,true);

	req.setRequestHeader("Content-type","application/json");
	req.onreadystatechange =function(){
		if (this.readyState==4 && this.status==200) {
			console.log("dobre");
			let obj=JSON.parse(req.responseText);
			console.log(obj);
			sessionStorage.setItem("name",meno);
			sessionStorage.setItem("token",obj.token);
			console.log(obj.token);
			document.getElementById("meno").innerHTML=meno;
			document.getElementById("inputs").style.visibility="hidden";
			document.getElementById("wrong").style.visibility="hidden";
			document.getElementById("send").style.visibility="hidden";
			getJoke();
			
		}
		else if(req.readyState){
			console.log("zle");
			document.getElementById("wrong").style.visibility="visible";
			document.getElementById('login').value="";
			document.getElementById("pass").value="";
		}
	}

	let udaje =JSON.stringify({login:meno,password:pass});
	req.send(udaje);

}

 function getJoke(){
 	document.getElementById("inputs").style.visibility="hidden";
	document.getElementById("wrong").style.visibility="hidden";
	document.getElementById("send").style.visibility="hidden";
	document.getElementById("sMess").style.visibility="hidden";
	document.getElementById("joke").style.visibility="visible";
	document.getElementById("aJoke").style.visibility="hidden";
	document.getElementById("wrongNP").style.visibility="hidden";
	document.getElementById("changeP").style.display="none";
	document.getElementById("gMess").style.display="none";


 	let url2="http://itsovy.sk:1201/joke";
	let req2=new XMLHttpRequest();
	req2.open('POST',url2,true);

	req2.setRequestHeader("Content-type","application/json");
	req2.onreadystatechange= function(){
		if (this.readyState==4 && this.status==200) {
			let obj=JSON.parse(req2.responseText);
			console.log(obj);
			sessionStorage.setItem("joke",obj.joke);
			let divJoke =document.getElementById("joke");
			let anotherJoke = document.createElement("p");
			let otherJoke= document.createTextNode(obj.joke);
			anotherJoke.appendChild(otherJoke);
			divJoke.appendChild(anotherJoke);
		} else{
			console.log("sova");
		}
	}
	let udaje=JSON.stringify({login:sessionStorage.getItem("name"),token:sessionStorage.getItem("token")});
	console.log(udaje);
	req2.send(udaje);
 }
function add(){
	document.getElementById("inputs").style.visibility="hidden";
	document.getElementById("send").style.visibility="hidden";
	document.getElementById("joke").style.visibility="hidden";
	document.getElementById("sMess").style.visibility="hidden";
	document.getElementById("aJoke").style.visibility="visible";
	document.getElementById("wrongNP").style.visibility="hidden";
	document.getElementById("changeP").style.display="none";
	document.getElementById("gMess").style.display="none";

}
 function addJoke(){
 	let joke2= document.getElementById("vtip").value;
 	console.log("stef");
 	let url2="http://wwww.itsovy.sk:1201/addjoke";
	let req2=new XMLHttpRequest();
	req2.open('POST',url2,true);

	req2.setRequestHeader("Content-type","application/json");
	req2.onreadystatechange= function(){
		if (this.readyState==4 && this.status==201) {
			console.log("sprava");
		} 
		
	}
	let udaje=JSON.stringify({login:sessionStorage.getItem("name"),token:sessionStorage.getItem("token"),joke:joke2});
	req2.send(udaje);
	document.getElementById("vtip").value="";
 }

 function logout(){
 	let url2="http://itsovy.sk:1201/logout";
	let req2=new XMLHttpRequest();
	req2.open('POST',url2,true);

	req2.setRequestHeader("Content-type","application/json");
	req2.onreadystatechange= function(){
		if (this.readyState==4 && this.status==200) {
			document.getElementById("inputs").style.visibility="visible";
			document.getElementById("meno").innerHTML="";
			document.getElementById("joke").innerHTML="";
			document.getElementById("login").value="";
			document.getElementById("pass").value="";
			document.getElementById("send").style.visibility="visible";
			document.getElementById("sMess").style.visibility="hidden";
			document.getElementById("aJoke").style.visibility="hidden";
			document.getElementById('odhlasenie').style.visibility="hidden";
			document.getElementById('getjoke').style.visibility="hidden";
			document.getElementById('addjoke').style.visibility="hidden";
			document.getElementById('sendMess').style.visibility="hidden";
			document.getElementById('getMess').style.visibility="hidden";
			document.getElementById("wrongNP").style.visibility="hidden";
			document.getElementById('changePass').style.visibility="hidden";
			document.getElementById("changeP").style.display="none";
			document.getElementById("gMess").style.display="none";

		} 
		
	}
	let udaje=JSON.stringify({login:sessionStorage.getItem("name"),token:sessionStorage.getItem("token")});
	req2.send(udaje);
 }

function send(){
	document.getElementById("inputs").style.visibility="hidden";
	document.getElementById("send").style.visibility="hidden";
	document.getElementById("joke").style.visibility="hidden";
	document.getElementById("sMess").style.visibility="visible";
	document.getElementById("aJoke").style.visibility="hidden";
	document.getElementById("wrongNP").style.visibility="hidden";
	document.getElementById("changeP").style.display="none";
	document.getElementById("gMess").style.display="none";

			
}

 function sendMessage(){
 	let komu=document.getElementById("komu").value;
 	let sprava=document.getElementById("sprava").value;
 	console.log("stef");
 	let url2="http://itsovy.sk:1201/sendMessage";
	let req2=new XMLHttpRequest();
	req2.open('POST',url2,true);

	req2.setRequestHeader("Content-type","application/json");
	req2.onreadystatechange= function(){
		if (this.readyState==4 && this.status==201) {
			console.log("sprava");
			document.getElementById("komu").value="";
			document.getElementById("sprava").value="";
		} 
		
	}
	let udaje=JSON.stringify({login:sessionStorage.getItem("name"),token:sessionStorage.getItem("token"),user:komu,message:sprava});
	req2.send(udaje);
 }


function getMessages(){
	document.getElementById("inputs").style.visibility="hidden";
	document.getElementById("send").style.visibility="hidden";
	document.getElementById("joke").style.visibility="hidden";
	document.getElementById("sMess").style.visibility="hidden";
	document.getElementById("wrongNP").style.visibility="hidden";
	document.getElementById("changeP").style.display="none";
	document.getElementById("gMess").style.display="block";

	//console.log("spravy");
 	let url2="http://itsovy.sk:1201/getMessages";
	let req2=new XMLHttpRequest();
	req2.open('POST',url2,true);

	req2.setRequestHeader("Content-type","application/json");
	req2.onreadystatechange= function(){
		console.log("ide");
		if (this.readyState==4 && this.status==200){
			console.log("sprava");
			let sprava = JSON.parse(req2.responseText);
			console.log(sprava);
			for (var i = 0; i < sprava.count; i++) {
				let divMess =document.getElementById("gMess");
				let anotherMess= document.createElement("p");
				let otherMess= document.createTextNode("From: "+sprava.messages[i].from+ "  Mess: "+sprava.messages[i].message);
				anotherMess.appendChild(otherMess);
				divMess.appendChild(anotherMess);
			}
		} 
		
	}
	let udaje=JSON.stringify({login:sessionStorage.getItem("name"),token:sessionStorage.getItem("token")});
	req2.send(udaje);
 }
function change() {
	document.getElementById("inputs").style.visibility="hidden";
	document.getElementById("send").style.visibility="hidden";
	document.getElementById("joke").style.visibility="hidden";
	document.getElementById("sMess").style.visibility="hidden";
	document.getElementById("aJoke").style.visibility="hidden";
	document.getElementById("changeP").style.display="block";
	document.getElementById("wrongNP").style.visibility="hidden";
	document.getElementById("gMess").style.display="none";
}
function changePassword(){
	let oldPass=document.getElementById("oldPass").value;
	console.log(oldPass);
	let newPass=document.getElementById("newPass").value;
	console.log(newPass);
	let regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (regEx.test(newPass)){
    	console.log("zmena hesla");
		let url2="http://itsovy.sk:1201/changepassword";
		let req2=new XMLHttpRequest();
		req2.open('POST',url2,true);

		req2.setRequestHeader("Content-type","application/json");
		req2.onreadystatechange= function(){
			console.log("ide");
			if (this.readyState==4 && this.status==200){
				console.log("sprava");
				document.getElementById("rightNP").style.visibility="visible";
				document.getElementById("oldPass").value="";
				document.getElementById("newPass").value="";
			} 
	
		}
		let udaje=JSON.stringify({login:sessionStorage.getItem("name"),token:sessionStorage.getItem("token"),oldpassword:oldPass,newpassword:newPass});
		console.log(udaje);
		req2.send(udaje);
	}else {
		document.getElementById("wrongNP").style.visibility="visible";
		document.getElementById("oldPass").value="";
		document.getElementById("newPass").value="";
	}	
}

