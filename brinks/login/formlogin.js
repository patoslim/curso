function logar (){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('pswd').value;
    
    if(login == 'admin' && senha == 'admin' ) {
        alert('autorizado')
    }else{
        alert('TU VAI SER HACKEADO CABA SAFADO');
        location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=1s"
    }
}