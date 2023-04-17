
            function ValidateForm()
            {
                let name=document.getElementById("name");
                let email=document.getElementById("email");  
                let attherate=email.value.indexOf("@");
                let atthedot=email.value.lastIndexOf(".");
                let password=document.getElementById("password");
                let cpassword=document.getElementById("cpassword");
                let dob=document.getElementById("dob");
                let curdate=new Date();
                let mobile=document.getElementById("mobile");
                let address=document.getElementById("address");
                let comments=document.getElementById("comments");
        
                if(name.value== "null" || name.value == ""){
                alert("Enter a valid name");
                document.myform.name.focus();
                return false;
                }

                if (email.value == null || email.value == "") {
                alert("Enter a valid email id");
                document.myform.email.focus();
                return false;
                }
            
                if(attherate<1 || atthedot<attherate+3 || atthedot>=email.value.length){
                alert("Enter a valid email id");
                document.myform.email.focus();
                return false;
                }
                
                if(password.value.length < 6){
                alert("Password must be minimum six characters");
                document.myform.password.focus();
                return false;
                }
            
                if(cpassword.value!=password.value){
                alert("Passwords do not match");  
                document.myform.cpassword.focus();
                return false;
                }
            
                if(new Date (dob.value) > curdate){  
                alert("Enter a valid Date of birth");
                document.myform.dob.focus();
                return false;
                }
            
                if(mobile.value.length!=10){  
                alert("Enter 10 digit mobile number");
                document.myform.mobile.focus();
                return false;
                }
            
                if(address.value.length < 10){  
                alert("Enter a valid address");
                document.myform.address.focus();
                return false;
                }
            
            return true;
            
        }

 