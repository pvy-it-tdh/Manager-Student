function save(){
    let fullname=document.getElementById('fullname').value;
    let email=document.getElementById('email').value;
    let phone=document.getElementById('phone').value;
    let address=document.getElementById('address').value;
    let gender='';
    if(document.getElementById('male').checked)
    {
        gender=document.getElementById('male').value
    }
    else if(document.getElementById('fmale').checked)
    {
         gender=document.getElementById('fmale').value
    }
}