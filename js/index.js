const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInput();
  // form reset
  document.getElementById('form').reset();
  // display message
  document.querySelector('.alert').style.display ='block';
  setTimeout(function (){
   document.querySelector('.alert').style.display ='block';
 }, 3000);

});

function checkInput() {
  //get values from inputs

  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if(fnameValue === '') {
    //show error
    //add error class
    setErrorFor(fname, 'First Name cannot be empty');
  }else {
    //add success class
    setSucessFor(fname);
  }

  if(lnameValue === '') {
    setErrorFor(lname, 'Last Name cannot be empty');
  } else {
    setSucessFor(lname);
  }

  if(emailValue === ' ') {
    setErrorFor(email, 'Email cannot be empty');
  }else if(!isEmail(emailValue)){
    setErrorFor(email, 'Looks like this is not an email');
  } else {
    setSucessFor(email);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be empty');
  }else {
    setSucessFor(password);
  }

  //show sucess message
  if(setSucessFor(formControl) ){
    alert('Your data has been sent.');
  }

}

function setErrorFor(input, message) {
  const formControl = input.parentElement;//form control
  const small = formControl.querySelector('small');

  //add error message inside small
  small.innerText = message;

  //add error class
  formControl.className = 'form-control error';
}

function setSucessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control sucess';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
