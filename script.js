let name1=false
let name2=false
let email1=false
let phnu=false
let msg1=false
$(document).ready(function(){
    $("#firstname").keyup(function(){
        let firstname=this.value
        console.log(firstname)
        let firstname_regex = /^[A-Za-z ]+$/
        if(firstname.match(firstname_regex) && firstname.length<4){
            console.log("bhjghjgjhg")
            name1=false
            $("#firstname_error").html("Enter minimum 4 characters")
        }
        else if(firstname.match(firstname_regex))
        {
            console.log("jhjg")
            name1=true
            $("#firstname_error").html("")
        }
        else{
            console.log("bhjghjgjhg")
        }
        })
     


    $("#lastname").keyup(function(){
        let lastname=this.value
        let lastname_regex = /^[A-Za-z ]+$/
        if(lastname.match(lastname_regex)&&lastname.length<4){
            name2=false
            $("#lastname_error").html("Enter minimum 4 characters")
        }else if(lastname.match(lastname_regex)){
            name2=true
            $("#lastname_error").html("")
        }
    })  
    $("#phno").keyup(function(){
        let phno=this.value
        let phno_regex = /^[0-9]*$/
        if(phno.match(phno_regex)&&phno.length<10){
            phnu=false
            $("#phno_error").html("Enter valid number")
        }else if(phno.match(phno_regex)&&phno.length<11){
            phnu=true
            $("#phno_error").html("")
        }else if(phno.match(phno_regex)&&phno.length>10){
            phnu=false
            $("#phno_error").html("Enter 10 digits")
        }    
    })  

    $("#email").keyup(function(){
        let email=this.value
        let email_regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
        if(email.match(email_regex)){
            
            email1=true
            $("#email_error").html("")
        }else{
            $("#email_error").html("Enter valid email")
            email1=false
        }
    })  
    $("#msg").keyup(function(){
        let message=this.value
        let message_regex = /^[A-Za-z ]+$/
        if(message.match(message_regex)&&message.length<21){
            msg1=false
            $("#msg_error").html("Enter minimum 20 characters")
        }else if(message.match(message_regex)){
            msg=true
            $("#msg_error").html("")
        }
    })  
}) 
    $("#submit-form").submit((e)=>{
        e.preventDefault()
        console.log(name1,name2,email1,phnu)
          if(name1&& name2&& email1&& phnu){
            console.log("submit");
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbwvbb7PZ9HpB9YCJTOMY9CaHkiKvPpDeAG9ETINJVGkaotIp1RbkV_veTIpR_LiTwt2/exec",
                data:$("#submit-form").serialize(),
                method:"post",
                success:function (response){
                    alert("Form submitted successfully")
                    window.location.reload()
                    //window.location.href="https://google.com"
                },
             error:function (err){
                    alert("Something Error")
    
                }
          })
         }
          else{
            $("#final_error").html("Enter values for all feilds") 
          }
    })
