$(document).ready(function(){
  $("form#quizInput").submit(function(event){
    event.preventDefault();
    var gender = $('input#gender').val();
    var age = $('input:radio[name=ageRadios]:checked').val();
    var wildness = $('input:radio[name=wildRadios]:checked').val();

    if (gender) {
      if (gender === male &&& age == 1) {
        $('#matt').show();
        $('#danniel').slideup();

      }
    }
  })
})
