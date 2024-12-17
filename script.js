let usuarios = [
    { user: "admin", password: "12345" }
  ];

  const loginBtn = document.getElementById('loginBtn').addEventListener('click', validateLogin)


function validateLogin(){
    const user = document.getElementById('user').value 
    const password = document.getElementById('password').value

    usuarios.forEach(userAtual => {
        if(user === userAtual.user && password === userAtual.password){
            window.location.href = "home.html"
        }else{
            alert('tudo errado vei')
        }
    })
}