var user1 =['Whigga','halloworld@'];
var user2=['slipknot666','azerty123'];
$(document).ready(function() {
    $('#click').click( function() {
        if ($('#loger1').val()===user1[0]&& $('#loger2').val()===user1[1]){
            alert ('Welcome ' +user1[0]);
        }
        else if($('#loger1').val()===user2[0]&& $('#loger2').val()===user2[1]){
            alert ("Welcome "+user2[0]);
        }
        else{
            alert('Wrong username or password!')
        }
    });
})

