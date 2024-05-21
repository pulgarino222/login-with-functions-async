//el formulario
//los inputs


const formulario= document.querySelector("#register-form")
console.log(formulario)

const username=document.querySelector("#username")

const lastname=document.querySelector("#last-name")
const email=document.querySelector("#email")
const password=document.querySelector("#password")

const confirmpasword=document.querySelector("#confirm-password")

formulario.addEventListener("submit",async (e)=>{
    e.preventDefault()
    let checkPassword=validatepasswor(password,confirmpasword)

    let checkEmail=await validateEmail(email)

    window.location.href="/" //con esto despues de registrarnos nos lleva al login 

    // if(checkPassword===true&& checkEmail===true){
    //     registerUser(username,lastname,email,password)
    // }

    //esto es para ir probando si si sirve cada variable donde se guarda la funcion 
    // if(checkEmail===true){
    //     alert(`la correo no es igual `)

    // }else{
    //     alert(`el correo si es igual `)

    // }
})

//validar la clave 
function validatepasswor(password,confirmpasword){
    if(password.value===confirmpasword.value){
        return true
    }else{
        return false 
    }
}

//validar el correo como hay que consultar debe esperar mientras consulta 
async function validateEmail(email){
    const response= await fetch(`http://localhost:3000/users?email=${email.value}`)
    const data= await response.json()
    
    if(data.length ===0){
        return true
    }else{
        return false
    }


}

async function registerUser(username,lastname,email,password){

    let newUser= {
        
            username:username.value.toLowerCase(),
            lastname:lastname.value,
            email:email.value,
            password:password.value
    }
    await fetch(`http://localhost:3000/users`,{
        method:'POST',
        headers:{
            'content-Type':'application/json'
        },
        body:JSON.stringify(newUser)
    })
}


