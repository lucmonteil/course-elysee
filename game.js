$(document).ready(function() {
 // the DOM is now ready, you can traverse it,
 // and register events with on().
  $(document).on('keyup', function(event) {
    // Display the ASCII code of the key pressed
    if (event.keyCode === 83) {
      $('#player1_race td.active').removeClass('active').next().addClass('active');
    }
    if (event.keyCode === 72) {
      $('#player2_race td.active').removeClass('active').next().addClass('active');
    }
    if (event.keyCode === 76) {
      $('#player3_race td.active').removeClass('active').next().addClass('active');
    }

    if($('#player1_race td.active').is(':last-child')) {
      $('#Modal1').modal();
    }
    if ($('#player2_race td.active').is(':last-child')) {
      $('#Modal2').modal();
    }
    if ($('#player3_race td.active').is(':last-child')) {
      $('#Modal3').modal();
    }

    $(".btn").on("click", function(e){
      $('td.active').removeClass('active');
      $("#player1_race #departure").addClass("active");
      $("#player2_race #departure").addClass("active");
      $("#player3_race #departure").addClass("active");
    });

    console.log(event.keyCode)
  });
});

