$(document).ready(function(){
  $("form#formOne").submit(function(event){
event.preventDefault();
var num = parseInt($("input#number").val());
// var number = 1;
for (i = 0; i <= num; i ++); {
  var number = 1;
  number = num * i;
};
// var userInput = $("input#"+number).val();
// $("." + number).text(userInput);

$(".result").append(number);
});
});
