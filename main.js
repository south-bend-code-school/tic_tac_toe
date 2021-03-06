(function(){
  $(document).ready(init);

  var clickCount = 0;
  var redScore   = 0;
  var blueScore  = 0;
  var tieGame    = 0;

  function init(){
    $('.cell').on('click', placeTic);
  }

  function placeTic(){
    clickCount++;

    if(clickCount % 2 === 0){
      $(this).addClass('red taken');
    } else {
      $(this).addClass('blue taken');
    }

    checkForWin();
  }

  function checkForWin() {
    if ($('.taken').length === 9) {
      alert('Tie!');
      tieGame++
      $('#tieGame').empty();
      $('#tieGame').append("<h1>"+tieGame+"</h1>");
      clearBoard();
    // top row win red
    } else if (($('#top-left').hasClass('red') && $('#top-mid').hasClass('red') && $('#top-right').hasClass('red'))
    // middle row win red
      || ($('#mid-left').hasClass('red') && $('#mid-mid').hasClass('red') && $('#mid-right').hasClass('red'))
    // bottom row win red
      || ($('#bottom-left').hasClass('red') && $('#bottom-mid').hasClass('red') && $('#bottom-right').hasClass('red'))
    // left column win red
      || ($('#top-left').hasClass('red') && $('#mid-left').hasClass('red') && $('#bottom-left').hasClass('red'))
    // mid column win red
      || ($('#top-mid').hasClass('red') && $('#mid-mid').hasClass('red') && $('#bottom-mid').hasClass('red'))
    // right column win red
      || ($('#top-right').hasClass('red') && $('#mid-right').hasClass('red') && $('#bottom-right').hasClass('red'))
    // diagonal left to right win red
      || ($('#top-left').hasClass('red') && $('#mid-mid').hasClass('red') && $('#bottom-right').hasClass('red'))
    // diagonal right to left win red
      || ($('#top-right').hasClass('red') && $('#mid-mid').hasClass('red') && $('#bottom-left').hasClass('red'))) {

      alert('Red Player Wins!');
      redScore++
      $('#redScore').empty();
      $('#redScore').append("<h1>"+redScore+"</h1>");
      clearBoard();

    // top row win blue
    } else if (($('#top-left').hasClass('blue') && $('#top-mid').hasClass('blue') && $('#top-right').hasClass('blue'))
    // middle row win blue
      || ($('#mid-left').hasClass('blue') && $('#mid-mid').hasClass('blue') && $('#mid-right').hasClass('blue'))
    // bottom row win blue
      || ($('#bottom-left').hasClass('blue') && $('#bottom-mid').hasClass('blue') && $('#bottom-right').hasClass('blue'))
    // left column win blue
      || ($('#top-left').hasClass('blue') && $('#mid-left').hasClass('blue') && $('#bottom-left').hasClass('blue'))
    // mid column win blue
      || ($('#top-mid').hasClass('blue') && $('#mid-mid').hasClass('blue') && $('#bottom-mid').hasClass('blue'))
    // right column win blue
      || ($('#top-right').hasClass('blue') && $('#mid-right').hasClass('blue') && $('#bottom-right').hasClass('blue'))
    // diagonal left to right win blue
      || ($('#top-left').hasClass('blue') && $('#mid-mid').hasClass('blue') && $('#bottom-right').hasClass('blue'))
    // diagonal right to left win blue
      || ($('#top-right').hasClass('blue') && $('#mid-mid').hasClass('blue') && $('#bottom-left').hasClass('blue'))) {
      alert('Blue Player Wins!');
      blueScore++
      $('#blueScore').empty();
      $('#blueScore').append("<h1>"+blueScore+"</h1>");
      clearBoard();
    }
  }

  // function checkForTie() {
  //   if ($('.taken').length === 9) {
  //     alert('Tie!');
  //   }
  // }

  function clearBoard() {
    $('.cell').removeClass('red');
    $('.cell').removeClass('blue');
    $('.cell').removeClass('taken');
    $('.red').css({
      "background-image":"none",
      "background-color":"transparent"
    });
    $('.blue').css({
      "background-image":"none",
      "background-color":"transparent"
    });
    clickCount = 0;
  }

})();
