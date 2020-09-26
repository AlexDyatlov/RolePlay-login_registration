$(function(){

  var checker = document.getElementById('checkbox');
  var sendbtn = document.getElementById('send-sms');

    checker.onchange = function(){

    if(this.checked){
      sendbtn.disabled = false;
    } 

    else{
      sendbtn.disabled = true;
    }
  }

});