let usuarios = [
    { user: "admin", password: "12345" }
  ];

  const loginBtn = document.getElementById('loginBtn').addEventListener('click', validateLogin)


function validateLogin(){
    const user = document.getElementById('user').value 
    const password = document.getElementById('password').value

    usuarios.forEach(userAtual => {
        if(user === userAtual.user && password === userAtual.password){
            alert('Login feito com sucesso.')
        }else{
            alert('tudo errado vei')
        }
    })
}