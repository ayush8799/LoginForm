
function highlight(x){
    x.classList.add('focus');
    var temp= x.previousElementSibling;
    temp.classList.add('bold');
}

function regular(x){
    if(x.value==""){
        x.classList.remove('focus');
        var temp = x.previousElementSibling;
        temp.classList.remove('bold');
    }
}

function highlightTA(x){
    x.classList.add('focus')
    var temp = x.parentElement;
    temp.classList.add('bold');
}

function regularTA(x){

    if(x.value==""){
        x.classList.remove('focus');
        var temp = x.parentElement;
        temp.classList.remove('bold');
    }


}


function validation(){
    var username=document.getElementById("username");
    var password=document.getElementById("password");
    var confirmPassword=document.getElementById("confirmPassword");

    if(username.value.trim()==""){   
        alert("username empty");  
        // var temp= username.nextElementSibling;
        // temp.classList.add('show');
        return false;
    }

    if(password.value.length<6){
        console.log(password.value.length);
        alert("Password length too short");
        return false;
    }
    
    if(password.value!=confirmPassword.value){
        alert("Password does not match");
        return false;
    }

    return true;
}

