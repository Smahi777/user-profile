const container=document.querySelector('container');
const signup=document.querySelector('sign-up');
const login=document.querySelector('login-in');
const logindisplay=document.getElementsByClassName ('login-page');

signup.addEventListener('click',function(){
  document.getElementsByClassName('login-page').style.display="none";
});
