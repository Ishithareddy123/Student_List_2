name_of_the_student=[];
function submit(){
   var display_student_array=[];
   for (var i=1; i<=4;i++){
       var student_name=document.getElementById("name_of_the_student_"+i).value;
       name_of_the_student.push(student_name);
   }
   var size=name_of_the_student.length;
   for (var q=0;q<size;q++){
       display_student_array.push("<h4>Name - "+name_of_the_student[q]+"</h4>");
   }
   document.getElementById("display_name_with_commas").innerHTML=display_student_array;
   var without_commas=display_student_array.join(" ");
   document.getElementById("display_name_without_commas").innerHTML=without_commas;
   document.getElementById("submit_button").style.display="none";
   document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    name_of_the_student.sort()
    var display_student_array=[];
    var size=name_of_the_student.length;
    for (var q=0;q<size;q++){
        display_student_array.push("<h4>Name - "+name_of_the_student[q]+"</h4>");
    }
    var without_commas=display_student_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=without_commas;   
}
function update(){
    document.getElementById("display_name_without_commas").innerHTML="<h1>"+name_of_the_student+"</h1>";
    
}