
function onSubmitForm(e){
    e.preventDefault()
    

    var inputName = document.forms["form"]["name"].value
    var validateName = document.getElementById("nameVali")
    var nameRegex = /^[A-Za-z ]+$/;
    if(inputName === ""){
        validateName.innerHTML = "Không được để trống *"
    }
    else if(nameRegex.test(inputName)){
       console.log("name")
    }else{
        validateName.innerHTML = "Sai định dạng"
    }


    var inputEmail = document.forms["form"]["email"].value
    var validateEmail = document.getElementById("emailVali")
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(inputEmail === ""){
        validateEmail.innerHTML = "Không được để trống *"
    }
    else if(emailRegex.test(inputEmail)){
       console.log("email")
    }
    else{
        validateEmail.innerHTML = "Sai định dạng"
    }


    var inputProvince = document.forms["form"]["provin"].value
    var validateProvince = document.getElementById("provinVali")
    if(inputProvince === ""){
        validateProvince.innerHTML = "Không được để trống *"
    } else{
        console.log("address")
    }

    var inputDistrict = document.forms["form"]["district"].value
    var validateDistrict = document.getElementById("districtVali")
    if(inputDistrict === ""){
        validateDistrict.innerHTML = "Không được để trống *"
    } else{
        console.log("address")
    }

    var inputWard = document.forms["form"]["ward"].value
    var validateWard = document.getElementById("wardVali")
    if(inputWard === ""){
        validateWard.innerHTML = "Không được để trống *"
    } else{
        console.log("address")
    }


    var inputPhone = document.forms["form"]["phone"].value
    var validatePhone = document.getElementById("phoneVali")
    if(inputPhone === ""){
        validatePhone.innerHTML = "Không được để trống *"
    }
    else if(inputPhone.match(/\d/g).length === 10){
       console.log("phone")
    }
    else{
        validatePhone.innerHTML = "Sai định dạng"
    }
 

    var inputResidence = document.forms["form"]["residence"].value
    var validateResidence = document.getElementById("residenceVali")
    if(inputResidence === ""){
        validateResidence.innerHTML = "Không được để trống *"
    } else{
        console.log("residence")
    }

   
    var inputAddress = document.forms["form"]["address"].value
    var validateAddress = document.getElementById("addressVali")
    if(inputAddress === ""){
        validateAddress.innerHTML = "Không được để trống *"
    } else{
        console.log("address")
    }
 

    var inputCmnd = document.forms["form"]["cmnd"].value
    var validateCmnd = document.getElementById("cmndVali")
    if(inputCmnd === ""){
        validateCmnd.innerHTML = "Không được để trống *"
    }
    else if(inputCmnd.match(/\d/g).length === 12){
       console.log("cmnd")
    }
    else{
        validateCmnd.innerHTML = "Sai định dạng"
    }
 


    var inputDate = document.forms["form"]["date"].value
    var validateDate = document.getElementById("dateVali")
    if(inputDate === ""){
        validateDate.innerHTML = "Không được để trống *"
    } else{
        console.log("date")
    }


    var inputWhereA = document.forms["form"]["whereA"].value
    var validateWhereA = document.getElementById("whereAVali")
    if(inputWhereA === ""){
        validateWhereA.innerHTML = "Không được để trống *"
    } else{
        console.log("awhere A")
    }

    var selectPha = document.getElementById("pha")
    var optionPha = selectPha.options[selectPha.selectedIndex].text;


    if(nameRegex.test(inputName) && emailRegex.test(inputEmail) && 
        inputPhone.match(/\d/g).length === 10 && inputResidence !== "" && 
        inputAddress !== "" && inputCmnd.match(/\d/g).length === 12 &&
        inputDate !== "" && inputWhereA !== ""
    ){
       
        const article = {
            fullName: inputName,
            mobile: inputPhone,
            email: inputEmail,
            province: inputProvince,
            district: inputDistrict,
            ward: inputWard,
            address: inputAddress,
            electricAddress: inputResidence,
            identityNumber: inputCmnd,
            placeOfIssue: inputWhereA,
            arrivalDate: inputDate,
            phaseNumber: optionPha
        }

        const headers = {
            'Content-Type': 'application/json',
            'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjUwNjE3NjU1LCJleHAiOjE2NTA3MDQwNTV9.Z5dcqCN9DEYlsfBFlyilSR-shjLDqa8oe9ohyqg4HPw'
        }
        axios.post('https://electric.ql6625.live/api/electric/register', article, {headers})
            .then(response => {
                console.log(response.data)
                location.replace("index.html")
            })
            
            .catch((e) => alert("Đăng ký điện thất bại!"))
    }
}

