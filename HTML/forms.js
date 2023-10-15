function processmydata()
{//this is old method
    //old way..
    console.log(document.forms.length);//no. of forms in html
    let username=document.forms[3].txtUsername.value;
    let password=document.forms[3].txtPasswordvalue;
    console.log(username,password);
    let username1=document.loginForm.txtUsername.value;
    let password1=document.loginForm.txtPassword.value;
}