function onSubmitSignIn(e){
    e.preventDefault()
  

    var inputUsername = document.forms["form"]["username"].value
    var inputPassword = document.forms["form"]["password"].value
    var usernameValidate = document.getElementById("usernameValidate")
    var passwordValidate = document.getElementById("passwordValidate")

    if(inputUsername === ""){
        usernameValidate.innerHTML = "Không được để trống"
    } 
    if(inputPassword === ""){
        passwordValidate.innerHTML = "Không được để trống"
    } 
    if(inputPassword > 0 && inputPassword.length < 8){
        passwordValidate.innerHTML = "Mật khẩu tối thiểu 8 kí tự"
    } else {
        const article = {username: inputUsername, password: inputPassword };
        axios.post('https://electric.ql6625.live/api/auth/signin', article)
            .then(response => {
                const accessToken = response.data.accessToken
                console.log(accessToken)
               
                localStorage.setItem('accessToken', accessToken )
                
            })
            .then(() => location.replace("payInfo.html"))
            .catch((e) => alert("Không thể đăng nhập!"))
    }
}

//username: admin
//password: password