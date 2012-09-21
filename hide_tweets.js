javascript:(function(){   
    var filterTerm = prompt("Enter a term and we will hide all of the tweets that contain it!");
    filterFunction(filterTerm);
    function filterFunction(filterTerm) {
      $(".stream-item").each(function(){
          if ($(this).find('p.js-tweet-text').text().toLowerCase().indexOf(filterTerm) != -1) {
            $(this).hide();
          }
      });
    }
})();   
