function onSubmitSignUp(e){
    e.preventDefault()
    
    var inputUsername = document.forms["form"]["username"].value
    var inputPassword = document.forms["form"]["password"].value
    var inputemailKH = document.forms["form"]["emailKH"].value
    var usernameValidate = document.getElementById("usernameValidate")
    var passwordValidate = document.getElementById("passwordValidate")
    var emailValidate = document.getElementById("emailValidate")

    if(inputUsername === ""){
        usernameValidate.innerHTML = "Không được để trống"
    } 
    if(inputPassword === ""){
        passwordValidate.innerHTML = "Không được để trống"
    }
    if(inputemailKH === ""){
       emailValidate.innerHTML = "Không được để trống"
    }  
    if(inputPassword > 0 && inputPassword.length < 8){
        passwordValidate.innerHTML = "Mật khẩu tối thiểu 8 kí tự"
    } else {
        location.replace("signIn.html")
    }
    
}