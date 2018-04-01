//Parallax background effect
$(function() {
    var $window = $(window);
    var width   = $(window).width();


    $('div.engage[data-type="background"]').each(function(){
        var $object = $(this);

        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $object.data('speed')) + 150;

            var coords = '50% '+ yPos + 'px';

            $object.css({ backgroundPosition: coords });
        });
    });

    $('div.randomMovieGenerator[data-type="background"]').each(function(){
        var $object = $(this);
        var bump    = 400;
        if (width < 1400)
        {
            bump = 300;
        }

        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $object.data('speed')) + bump;

            var coords = '50% '+ yPos + 'px';

            $object.css({ backgroundPosition: coords });
        });
    });

    $('div.personalWebsite[data-type="background"]').each(function(){
        var $object = $(this);
        var bump    = 600;
        if (width < 1600 && width > 1450)
        {
            bump = 550;
        }
        else if (width < 1250 && width > 950)
        {
            bump = 500;
        }
        else if (width < 950)
        {
            bump = 475;
        }

        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $object.data('speed')) + bump;

            var coords = '50% '+ yPos + 'px';

            $object.css({ backgroundPosition: coords });
        });
    });
});
