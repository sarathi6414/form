function validationForm(){
   
    var Fname = document.getElementById("Fname").value;
    var Lname = document.getElementById("Lname").value;
    var city = document.getElementById("city").value;
    var phonenumber = document.getElementById("phonenumber").value;
    var email = document.getElementById("email").value;
    var password=document.getElementById("password").value;

    if(Fname === "" && email === "" && password=== "" && Lname=="" && city=="" && phonenumber==""){
        alert("Fill the form to register");
     return false;
    }
    if (Fname === "") {
        alert("Please fill in First Name");
        return false;
      }
      if (Lname === "") {
        alert("Please fill in Last Name");
        return false;
      }
      if (city === "") {
        alert("Please fill in City");
        return false;
      }
      if (phonenumber === "") {
        alert("Please fill in Phone Number");
        return false;
      }
      if (email === "") {
        alert("Please fill in Email");
        return false;
      }
      if(password===""){
        alert("please fill the password");
        return false;
     }
      if(password.length<6){
        alert("please fill atleast more than 6 char");
        return false;
     }
     return true;
}
