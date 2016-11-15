
function validate_form()
{
	var username=document.getElementById("username").value;
	if(!/^[a-zA-Z0-9_]+$/.test(username)){
		alert("用户名称不合法");
		return false;
	}
	var password=document.getElementById("password").value;
	if(/^[\s\n\t\r]*$/.test(password)){
		alert("密码不能为空");
		return false;
	}
	else if(password.length<4||password.length>16){
		alert("密码长度不能低于四位高于十六位");
		return false;
	}
	var email=document.getElementById("email").value;
	if(!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)){
		alert("邮箱的格式错误");
		return false;
	}
	return true;
 }
