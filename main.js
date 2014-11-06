;(function() {
$(document).ready(function() {


    $.stellar();

    // smooth scroll
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });


    // parallax activate
    // $(".parallax").parallax();

    //jugged edges
    var fn = function(){

            $('.jugged-edge').each(function(){

                var elem        = $(this),
                    slantWidth  = elem.parent().outerWidth(),
                    slantHeight = slantWidth / 100 * 2.5,
                    css         = {'border-right-width': slantWidth, 'border-top-width': slantHeight, 'top': -slantHeight+1};

                if(elem.hasClass("jugged-bottom")) {
                    css.bottom = css.top;
                    css.top    = "";
                }

                elem.css(css);

            });
        };

    fn();

    //jugged edges
    $(window).on('resize', (function(){

        fn();

    })());


    /*  navigation menu */
    var $el, leftPos, newwidth;
    $mainNav = $(".squad-list");

    $mainNav.append("<li id='magic-line'></li>");
    var $magicLine = $("#magic-line");

    $magicLine
        .height($(".current_page_item").height())
        .css("top", $(".current_page_item").position().top)
        .data("origTop", $magicLine.position().top)
        .data("origheight", $magicLine.height());   
    $(".squad-list a").hover(function() {
        $el = $(this).closest('li');
        leftPos = $el.position().top;
        newwidth = $el.height(); 
                        
    $magicLine.stop().animate({
        top: leftPos,
        height: newwidth  
        });
        }, function() {
        $magicLine.stop().animate({
        top: $(".current_page_item").position().top,
        height: $magicLine.data("origheight")   
        });    
    });


    //to Top link
    var $toTopBtn =$('.toTop');

    $(window).scroll(scrollCallback);

    function scrollCallback() {

        var $wndTop = $(window).scrollTop(),
            TOP_INDENT = 400;
        if ($wndTop > TOP_INDENT) {
            $toTopBtn.addClass('show');
        } else {
            $toTopBtn.removeClass('show');
        };

    };


});
})();
 // end ned ned



