 
    var nameE = document.getElementById("name")
    var address = document.getElementById("address")
    var email = document.getElementById("email")
    var phone = document.getElementById("phone")
    var code = document.getElementById("code")
    var addressE = document.getElementById("addressE")
    var numE = document.getElementById("numE")
    var money = document.getElementById("money")
    var maKH = document.getElementById("maKH")
   
    const headers = {
            'Content-Type': 'application/json',
            'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUxNzcyMzQxLCJleHAiOjE2NTE4NTg3NDF9.nGuXS7CFmOJP7NjI9spmfcb5evLsgwVyN3eAPqDMU6Q'
        }
        

        axios.get('https://electric.ql6625.live/api/monthlybill/list', {headers})
            .then(response => {
               const result = response.data.data.electricUser
                console.log("abc: ", response.data)
                nameE.innerHTML = result.fullName
                address.innerHTML = result.district + "," + result.province
                addressE.innerHTML = result.electricAddress
                email.innerHTML = result.email
                phone.innerHTML = result.mobile

                const resultBill = response.data.data.monthlyBills
                numE.innerHTML = resultBill[0].houseNumber
                code.innerHTML = resultBill[0].taxNumber
                money.innerHTML = resultBill[0].price

                const resultUser = response.data.data.user
                maKH.innerHTML = resultUser.userCode
            
                
            }).catch((e) => alert(e))