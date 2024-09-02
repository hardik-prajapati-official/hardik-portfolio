

function validation(){
 
    const Username = document.Formfill.Username.value;
    const Email = document.Formfill.Email.value;
    const Password = document.Formfill.Password.value;
    const CPassword = document.Formfill.CPassword.value;
   
    
    
    if(Username === ""){
        document.getElementById('Username-error').innerHTML="This is a required field";
        return false;
    }else{
        document.getElementById('Username-error').innerHTML="";
    }
    if(Email ===""){
        document.getElementById('Email-error').innerHTML="Enter Email";
        return false;
    }else{
        document.getElementById('Email-error').innerHTML="";
    }
    if(Password ===""){
        document.getElementById('Password-error').innerHTML="Enter Password";
        return false;
    }else{
        document.getElementById('Password-error').innerHTML="";   
    }
    if(Password.length<6){
        document.getElementById('Password-error').innerHTML="Password must be contain atleat 6 character";
        return false;
    }else{
        document.getElementById('Password-error').innerHTML="";  
    }

    if(CPassword===""){
        document.getElementById('CPassword-error').innerHTML="Re-enter Password";
        return false;
    }else{
        document.getElementById('CPassword-error').innerHTML="";
    }
    
    if(Password !== CPassword){
        document.getElementById('CPassoword-error').innerHTML="Entered password should match";
        return false;
    }else{
       document.getElementById('CPassoword-error').innerHTML="";
       return false;
    }
    
}