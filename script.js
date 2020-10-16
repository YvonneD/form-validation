const form=document.getElementById('form')
const password1El=document.getElementById('password1')
const password2El=document.getElementById('password2')
const messageContainer=document.querySelector('.message-container')
const message=document.getElementById('message')
let isValid=false
let passwordsMatch=false
function validateForm(){
    //using contraint API
    isValid=form.checkValidity()
    //style message for error
   if(!isValid){
    message.textContent='please fill out all fields'
    message.style.color='red'
    messageContainer.append(message)
    return
   }
   //check if password match
   if(password1El.value===password2El.value){
       passwordsMatch=true
       password1El.style.borderColor='#11999e'
       password2El.style.borderColor='#11999e'
   }else{
       passwordsMatch=false
       message.textContent='make sure passwords match'
       message.style.color='red'
       messageContainer.style.borderColor='red'
       password1El.style.borderColor='#40514e'
       password2El.style.borderColor='#40514e'
       return
   }
   //if form is valid and password match
   if(isValid&&passwordsMatch){
        message.textContent='successfully registed!'
        message.style.color='#40514e'
        messageContainer.style.borderColor='#11999e'
   }
}

function storeFormData(){
    const user={
        name:form.name.value,
        phone:form.phone.value,
        email:form.email.value,
        website:form.website.value,
        password:form.password.value
    }
    console.log(user)
}

function processFormData(e){
    e.preventDefault()
    //validate form
    validateForm()
    //submit
    if(isValid){
        storeFormData()
    }
}

//event listener
form.addEventListener('submit',processFormData)