//Form Validation method
/* Rules:
Username:
    1. Username Should be minimum 5 characters long.
    2. No Space, no Special Characters (i.e., must be alphanumeric).
Email:
    1. Valid Email Address.
        = valid characters + '@' + more valid chars + '.' + yet more valid chars
Phone:
    1. Valid US Phone Number(10 digits: 123-454-7890, (123) 454-7890, (123)+454 7890)
Password:
    1. Password length should be minimum 6 characters long.
    2. Password should not be same as Username.
    
*/
function username_validation(name){
	"REPLACE THIS CODE WITH YOUR VALIDATION METHOD"
    var valid_name = /^[a-zA-Z0-9_]{5,30}$/;
    if(!valid_name.test(name)) {
        return false;
    } else {
        return true;
    }
    
}
function email_validation(email){
var valid_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	"REPLACE THIS CODE WITH YOUR VALIDATION METHOD"
    if(!valid_email.test(email)) {
        return false;
    } else {
        return true;
    }
    
}
function phone_validation(phone){
	var valid_phone = /^\(?([0-9]{3})\)?[-.+ ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	"REPLACE THIS CODE WITH YOUR VALIDATION METHOD"
    if (!valid_phone.test(phone)) {
        return false;
    } else {
        return true;
    }
}
function password_validation(pass, uname){
	"REPLACE THIS CODE WITH YOUR VALIDATION METHOD"
    if (pass.length >=6 && uname != pass) {
        return true;
    } else {
        return false;
    }

}
function conpassword_validation(conpass, res){
  	"REPLACE THIS CODE WITH YOUR VALIDATION METHOD"
    if (conpass == res) {
        return true;
    } else {
        return false;
    }
}
