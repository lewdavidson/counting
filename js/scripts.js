
$(document).ready(function(){
  $("form#count-form").submit(function(event){
    event.preventDefault();
    var countTo = parseInt($("input#count-to").val());
    var countBy = parseInt($("input#count-by").val());
    var userOutput = [];
    for (var index = countBy; index <= countTo; index += countBy) {
      userOutput.push(index);
    }
    if (Number.isInteger(countTo)) && (Number.isInteger(countBy)) {
      alert(userOutput);
    }
    else {
      alert("bro you trippin!");
    }
  });
});
