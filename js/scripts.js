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
      $('div#genderForm').removeClass('has-error');
      if (gender === 'men' && age === '1' && wildness <= '2') {
        $('.celeb-cards').slideUp();
        $('#matt').slideDown();
      } else if (gender === 'men' && age ==='1' && wildness ==='3'){
        $('.celeb-cards').slideUp();
        $('#shemar').slideDown();
      } else if (gender === 'men' && age === '2'&& wildness === '1') {
        $('.celeb-cards').slideUp();
        $('#daniel').slideDown();
      } else if (gender === 'men' && age === '2' && wildness <= '2') {
        $('.celeb-cards').slideUp();
        $('#idris').slideDown();
      } else if (gender === 'men' && age === '3' && wildness <= '3') {
        $('.celeb-cards').slideUp();
        $('#ian').slideDown();
      } else if (gender === 'women' && age === '1' && wildness <= '2') {
        $('.celeb-cards').slideUp();
        $('#selena').slideDown();
      } else if (gender === 'women' && age === '1' && wildness === '3') {
        $('.celeb-cards').slideUp();
        $('#rihanna').slideDown();
      } else if (gender === 'women' && age === '2' && wildness <= '2') {
        $('.celeb-cards').slideUp();
        $('#gwen').slideDown();
      } else if (gender === 'women' && age === '2' && wildness === '3') {
        $('.celeb-cards').slideUp();
        $('#sofia').slideDown();
      } else if (gender === 'women' && age === '3' && wildness <='3') {
        $('.celeb-cards').slideUp();
        $('#heidi').slideDown();
      }
    } else {
      addError();
    }
  });
});
