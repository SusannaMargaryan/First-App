
var inputs = document.getElementsByTagName('input');
for (let i = 0; i < inputs.length; i++) {
	inputs[i].setAttribute('onblur',"valFunction(this)");
}
function valFunction(elem) {
	//console.log(elem);
	if (elem.value === "") {
		elem.style.borderColor = "red";
	}else{
		elem.style.borderColor = "green";
	}
}
function addEmailFunction(){
	let child_email_div = document.getElementById('email_block').children;
	if (child_email_div.length<=3) {
		let div = document.createElement("div");
		div.setAttribute("id","email_block_"+(child_email_div.length+1));
		document.getElementById("email_block").appendChild(div);

		let input = document.createElement("input");
		input.setAttribute('type','email');
		input.setAttribute('id',"email_"+(child_email_div.length));
		input.setAttribute('placeholder',"Enter Your Email");
		document.getElementById("email_block_"+(child_email_div.length)).appendChild(input);
		input.setAttribute('onblur','valFunction(this)');

		let button = document.createElement("button");
		button.setAttribute('type','button');
		button.setAttribute('id',"remove email "+(child_email_div.length));
		document.getElementById("email_block_"+(child_email_div.length)).appendChild(button);
		button.innerHTML = "Delete Email";
		button.setAttribute('onclick',"delEmailFunction(this)");
	}
}
function addPhoneFunction(){
	let child_div = document.getElementById('phone_block').children;
	if (child_div.length <= 3) {
		let div_phone = document.createElement("div");
		div_phone.setAttribute('id',"phone_block_"+(child_div.length+1));
		document.getElementById('phone_block').appendChild(div_phone);

		let input_phone = document.createElement("input");
		input_phone.setAttribute('type','tel');
		input_phone.setAttribute('id',"phone_"+(child_div.length));
		input_phone.setAttribute('placeholder',"Enter Your Phone With Zero");
		document.getElementById("phone_block_"+(child_div.length)).appendChild(input_phone);
		input_phone.setAttribute('onblur','valFunction(this)');
	
		let button_phone = document.createElement("button");
		button_phone.setAttribute('type','button');
		button_phone.setAttribute('id',"remove phone "+(child_div.length));
		document.getElementById("phone_block_"+(child_div.length)).appendChild(button_phone);
		button_phone.innerHTML = "Delete phone";
		button_phone.setAttribute('onclick',"delPhoneFunction(this)");
	}
}
function delEmailFunction(elem){
	document.getElementById('email_block').removeChild(elem.parentElement);
	let email_div_length = document.getElementById("email_block").children.length;
	for (let i = 0; i < email_div_length; i++) {
		document.getElementById("email_block").children[i].id = "email_block_"+(i+1);
		document.getElementById("email_block_"+(i+1)).children[0].id = "email_"+(i+1);
		document.getElementById("email_block_"+(i+1)).children[1].id = "remove_email "+(i+1);
	}
}
function delPhoneFunction(elem){
	document.getElementById('phone_block').removeChild(elem.parentElement);
	let phone_div_length = document.getElementById("phone_block").children.length;
	for (let i = 0; i < phone_div_length; i++) {
		document.getElementById("phone_block").children[i].id = "phone_block_"+(i+1);
		document.getElementById("phone_block_"+(i+1)).children[0].id = "phone_"+(i+1);
		document.getElementById("phone_block_"+(i+1)).children[1].id = "remove_phone "+(i+1);
	}
}
function changeFunction(){
	if(!document.getElementById("pass_div").hasChildNodes() && document.getElementById('password').value !== ""){
        let second_pass = document.createElement("input");
        second_pass.setAttribute("type","password");
        second_pass.setAttribute("placeholder","Repeat Your Password");
        second_pass.setAttribute("id","repeat_password");
        document.getElementById("pass_div").appendChild(second_pass);
		second_pass.setAttribute('onblur','valFunction(this)');
    }else{
		if(document.getElementById('password').value == ""){
			document.getElementById("pass_div").removeChild(document.getElementById('repeat_password'));
		}
    }
}
document.getElementById("done").onclick = ()=>{
	let child_element = document.getElementsByTagName('input').length;
	let txt = "";
	let count = 0;
	if (document.getElementById('pass_div').children.length !== 0) {
		if (document.getElementById('pass_div').children[0].value !== "" 
			&& document.getElementById('password').value === document.getElementById('pass_div').children[0].value ) {
			for (let i = 0; i < child_element; i++) {
				if (document.getElementsByTagName('input')[i].value !== "") {
					document.getElementsByTagName('input')[i].style.borderColor = "green";
					txt +=document.getElementsByTagName('input')[i].id+" "+
					document.getElementsByTagName('input')[i].value+"   ";
				}else{
					document.getElementsByTagName('input')[i].style.borderColor = "red";
					count++;
					break;
				}
			}
			if (count == 0) {
				console.log(txt);
			}else{ 
			console.log("You have an Error");
			}
		}
	}
}