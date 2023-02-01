const pass1 = document.getElementById('password1')
const pass2 = document.getElementById('password2')
const message = document.getElementById('message')
const button = document.getElementById('button')

pass2.addEventListener('input', function(){
    if(pass1.value === pass2.value){
        message.innerHTML = 'Matching'
        message.style.color = 'green'
        button.disabled = false
    }else{
        message.innerHTML = 'Not Matching'
        message.style.color = 'red'
        button.disabled = true
    }
})