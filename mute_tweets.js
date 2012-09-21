javascript:(function(){   
    var muteTerm = prompt("Enter a term and we will hide all of the tweets that contain it!");
    muteFunction(muteTerm);
    function muteFunction(muteTerm) {
      $(".stream-item").each(function(){
          if ($(this).find('p.js-tweet-text').text().toLowerCase().indexOf(muteTerm) != -1) {
            $(this).hide();
          }
      });
    }
})();   
