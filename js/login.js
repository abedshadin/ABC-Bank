document.getElementById('login').addEventListener('click',function(){
    const user = document.getElementById('username');
    const pass = document.getElementById('password');

    const userValue = user.value;
    const passValue = pass.value;
    
    if(userValue === 'abed' && passValue === '123456'){
        window.location.href = 'home.html';
    }
    else{
        alert('Wrong Credentials !!!!!!')
    }
})