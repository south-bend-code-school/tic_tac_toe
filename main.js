(function(){
  $(document).ready(init);

  var clickCount = 0;

  function init(){
    $('.cell').on('click', placeTic);
  }

  function placeTic(){
    clickCount++;

    if(clickCount % 2 === 0){
      $(this).css({
        "background-image": "url("+'./ironman.png'+")",
        "background-color": "red"
      });
      $(this).addClass('red');
    } else {
      $(this).css({
        "background-image": "url("+'./cap.png'+")",
        "background-color": "blue"
      });
      $(this).addClass('blue');
    }
  }

})();
