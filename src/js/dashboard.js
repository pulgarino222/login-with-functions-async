const user=localStorage.getItem("userOnline")

const btnLogOut=document.querySelector("#btn-logout")

if(user ==null){
    window.location.href="/"
}

btnLogOut.addEventListener("click",()=>{

    localStorage.removeItem("userOnline")
    window.location.href="/"
})