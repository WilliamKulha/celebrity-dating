var addError = function(){
  $('div#genderForm').addClass("has-error")
  $('div#genderForm').append('<span id="helpBlock2" class="help-block">Please enter either men or women.</span>')
}


$(document).ready(function(){
  $("form#quizInput").submit(function(event){
    event.preventDefault();
    var gender = $('input#gender').val();
    var age = $('input:radio[name=ageRadios]:checked').val();
    var wildness = $('input:radio[name=wildRadios]:checked').val();

    if (gender) {
      if (gender === 'men' && age === '1' && wildness <= '2') {
        $('#shemar').slideDown();
      } else if (gender === 'men' && age === '2'&& wildness === '1') {
        $('#daniel').slideDown();
      } else if (gender === 'men' && age === '2' && wildness <= '2') {
        $('#idris').slideDown();
      } else if (gender === 'men' && age === '3' && wildness <= '3') {
        $('#ian').slideDown();
      } else if (gender === 'women' && age === '1' && wildness <= '2') {
        $('#selena').slideDown();
      } else if (gender === 'women' && age === '1' && wildness === '3') {
        $('#rihanna').slideDown();
      } else if (gender === 'women' && age === '2' && wildness <= '2') {
        $('#gwen').slideDown();
      } else if (gender === 'women' && age === '2' && wildness === '3') {
        $('#sofia').slideDown();
      } else if (gender === 'women' && age === '3' && wildness <='3') {
        $('#heidi').slideDown();
      }
    } else {
      addError();
    }
  });
});
