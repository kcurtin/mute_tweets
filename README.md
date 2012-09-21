Mute Tweets

===========

A bookmarklet that prompts you to enter a term and hides any tweets containing that term.

Drag this link to your bookmars bar:

<a href="javascript:(function(){var muteTerm = prompt(%22Enter a term and we will hide all of the tweets that contain it%21%22);    muteFunction(muteTerm);    function muteFunction(muteTerm) {      $(%22.stream-item%22).each(function(){          if ($(this).find(%27p.js-tweet-text%27).text().toLowerCase().indexOf(muteTerm) %21= -1) {            $(this).hide();          }      });    }})();">Muste Tweets!</a>