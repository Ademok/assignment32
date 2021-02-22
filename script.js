var button = document.getElementById("submit");

button.addEventListener("click", calculate);


function calculate () {
  var result = 500;
  var EducationDegreeValue = Number(document.getElementById("education").value);

  result*=EducationDegreeValue;

  var FamilyNetworthValue = Number (document.getElementById("networth").value);

  result*=FamilyNetworthValue;
  var l = document.getElementsByClassName('skills');
  console.log(result);
  
  for (var i=0; i<l.length; i++) {
    if (l[i].checked ===true){
        result += parseFloat(l[i].value);
     }
  }

  var age = document.getElementsByClassName("age")

  for (var i=0; i < age.length; i++) {
    if (age[i].checked) {
      result*=age[i].value;
    }
  }

   var r = document.getElementsByClassName('reputation');
   console.log(r);
   for (var i = 0; i < r.length; i++) {
     if (r[i].checked === true) {
       result *= parseFloat(r[i].value);
     }
   }
   if (r[2].checked === true){
     result -= parseFloat(r[2].value);
   }
    
   document.getElementById("adema").innerHTML = "Qalyn mal price: " + result;
// alert(result);

}
