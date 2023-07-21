
// register

function sub() {
    Bank = {
        username : uname.value,
        accountno : acno.value,
        password : pass.value,
    }
    if(acno.value in localStorage) {
    alert('Account already exist')
    }
    else if(acno.value ==""){
        alert('Enter details')
    }
    else{
        localStorage.setItem(acno.value , JSON.stringify(Bank))
        alert('Account registered successfully')
        window.location = "./index.html"
    }
}


// login


function log() {
       a = iiii.value
       b = ee.value

       
  if(a in localStorage) {
    details= JSON.parse(localStorage.getItem(a))
  
  if(b == details.password) {
    alert('Login Successfull')
  }
  else{
    alert('Incorrect Password')
  }
}
else{
    alert('Invalid Account Number')
}
}


